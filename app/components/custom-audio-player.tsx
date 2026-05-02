"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import FacebookShareButton from "./facebook-share-button";

type CustomAudioPlayerProps = {
  tieuDe: string;
  nhacSi: string;
  tep: string;
  tepUrl?: string;
  hinh: string;
  anchorId: string;
};

function dinhDangThoiGian(soGiay: number) {
  if (!Number.isFinite(soGiay) || soGiay <= 0) {
    return "00:00";
  }

  const tongGiay = Math.floor(soGiay);
  const phut = Math.floor(tongGiay / 60);
  const giay = tongGiay % 60;

  return `${String(phut).padStart(2, "0")}:${String(giay).padStart(2, "0")}`;
}

export default function CustomAudioPlayer({
  tieuDe,
  nhacSi,
  tep,
  tepUrl,
  hinh,
  anchorId,
}: CustomAudioPlayerProps) {
  const playerId = `player-${tep}`;
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [dangPhat, setDangPhat] = useState(false);
  const [thoiLuong, setThoiLuong] = useState(0);
  const [thoiGianHienTai, setThoiGianHienTai] = useState(0);
  const [thongBaoLoi, setThongBaoLoi] = useState<string | null>(null);

  const duongDanNguon = tepUrl || `/audio/${encodeURIComponent(tep)}`;

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) {
      return;
    }

    const capNhatThoiLuong = () => {
      setThoiLuong(audioElement.duration || 0);
    };

    const capNhatTienDo = () => {
      setThoiGianHienTai(audioElement.currentTime || 0);
    };

    const khiBatDauPhat = () => {
      setDangPhat(true);
      setThongBaoLoi(null);
    };

    const khiTamDung = () => {
      setDangPhat(false);
    };

    const khiKetThuc = () => {
      setDangPhat(false);
      setThoiGianHienTai(0);
    };

    const khiKhongTaiDuocAudio = () => {
      setDangPhat(false);
      setThongBaoLoi("Không tải được tệp âm thanh. Vui lòng thử lại hoặc chọn bài khác.");
    };

    const khiPlayerKhacPhat = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      if (customEvent.detail !== playerId) {
        audioElement.pause();
      }
    };

    audioElement.addEventListener("loadedmetadata", capNhatThoiLuong);
    audioElement.addEventListener("durationchange", capNhatThoiLuong);
    audioElement.addEventListener("timeupdate", capNhatTienDo);
    audioElement.addEventListener("play", khiBatDauPhat);
    audioElement.addEventListener("pause", khiTamDung);
    audioElement.addEventListener("ended", khiKetThuc);
    audioElement.addEventListener("error", khiKhongTaiDuocAudio);
    window.addEventListener("poetry-player:play", khiPlayerKhacPhat as EventListener);

    return () => {
      audioElement.removeEventListener("loadedmetadata", capNhatThoiLuong);
      audioElement.removeEventListener("durationchange", capNhatThoiLuong);
      audioElement.removeEventListener("timeupdate", capNhatTienDo);
      audioElement.removeEventListener("play", khiBatDauPhat);
      audioElement.removeEventListener("pause", khiTamDung);
      audioElement.removeEventListener("ended", khiKetThuc);
      audioElement.removeEventListener("error", khiKhongTaiDuocAudio);
      window.removeEventListener("poetry-player:play", khiPlayerKhacPhat as EventListener);
    };
  }, [playerId]);

  const khoiTaoNguonPhatNeuCan = () => {
    const audioElement = audioRef.current;
    if (!audioElement) {
      return;
    }

    if (audioElement.getAttribute("src")) {
      return;
    }

    audioElement.src = duongDanNguon;
    audioElement.load();
  };

  const batHoacDung = async () => {
    const audioElement = audioRef.current;
    if (!audioElement) {
      return;
    }

    if (audioElement.paused) {
      khoiTaoNguonPhatNeuCan();
      window.dispatchEvent(new CustomEvent("poetry-player:play", { detail: playerId }));
      try {
        await audioElement.play();
      } catch {
        setDangPhat(false);
        setThongBaoLoi("Trình duyệt không hỗ trợ hoặc không tìm thấy nguồn phát bài này.");
      }
      return;
    }

    audioElement.pause();
  };

  const tuaTheoThanhTienDo = (giaTri: number) => {
    const audioElement = audioRef.current;
    if (!audioElement) {
      return;
    }

    khoiTaoNguonPhatNeuCan();

    const thoiDiemMoi = Math.max(0, Math.min(giaTri, thoiLuong || 0));
    audioElement.currentTime = thoiDiemMoi;
    setThoiGianHienTai(thoiDiemMoi);
  };

  return (
    <div className="grid gap-4 rounded-2xl border border-[var(--color-mist)] bg-[var(--color-paper)] p-4 md:grid-cols-[8.25rem_1fr] md:items-center md:gap-5 md:p-5">
      <Image
        src={hinh}
        alt={`Ảnh minh họa bài nhạc ${tieuDe}`}
        width={132}
        height={132}
        className="h-32 w-32 rounded-xl border border-[var(--color-mist)] object-cover shadow-[0_10px_24px_rgba(30,26,23,0.12)]"
      />

      <div>
        <p className="font-serif text-2xl text-[var(--color-ink)]">{tieuDe}</p>
        <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm tracking-[0.1em] text-[var(--color-muted)]">{nhacSi}</p>
          <FacebookShareButton
            anchorId={anchorId}
            quote={`Nghe bai ${tieuDe} - ${nhacSi}`}
            className="rounded-full border border-[var(--color-mist)] bg-[var(--color-cream)] px-3 py-1.5 text-xs font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-gold)]"
          />
        </div>

        <div className="mt-4 flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              void batHoacDung();
            }}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-gold)] bg-[var(--color-cream)] text-[var(--color-ink)] transition-colors hover:bg-[var(--color-paper)]"
            aria-label={dangPhat ? `Tạm dừng ${tieuDe}` : `Phát ${tieuDe}`}
          >
            <span aria-hidden className="text-lg leading-none">
              {dangPhat ? "||" : "▶"}
            </span>
          </button>

          <div className="flex-1">
            <input
              type="range"
              min={0}
              max={thoiLuong > 0 ? thoiLuong : 1}
              step={0.1}
              value={Math.min(thoiGianHienTai, thoiLuong > 0 ? thoiLuong : 1)}
              aria-label={`Tiến độ bài ${tieuDe}`}
              onChange={(event) => {
                tuaTheoThanhTienDo(Number(event.currentTarget.value));
              }}
              className="audio-progress w-full"
            />
            <div className="mt-1 flex items-center justify-between text-xs tabular-nums text-[var(--color-muted)]">
              <span>{dinhDangThoiGian(thoiGianHienTai)}</span>
              <span>{dinhDangThoiGian(thoiLuong)}</span>
            </div>
          </div>
        </div>

        {thongBaoLoi ? <p className="mt-2 text-sm text-[var(--color-gold)]">{thongBaoLoi}</p> : null}

        <audio ref={audioRef} preload="none" />
      </div>
    </div>
  );
}

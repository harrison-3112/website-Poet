"use client";

import { useEffect, useRef, useState } from "react";

type FacebookShareButtonProps = {
  anchorId: string;
  quote: string;
  label?: string;
  className?: string;
};

export default function FacebookShareButton({
  anchorId,
  quote,
  label = "Chia sẻ",
  className = "",
}: FacebookShareButtonProps) {
  const khungMenuRef = useRef<HTMLDivElement | null>(null);
  const [dangMoMenu, setDangMoMenu] = useState(false);

  useEffect(() => {
    if (!dangMoMenu) {
      return;
    }

    const dongMenuKhiBamRaNgoai = (event: PointerEvent) => {
      const khungMenu = khungMenuRef.current;
      const mucTieu = event.target as Node | null;
      if (!khungMenu || !mucTieu) {
        return;
      }

      if (!khungMenu.contains(mucTieu)) {
        setDangMoMenu(false);
      }
    };

    const dongMenuKhiNhanEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDangMoMenu(false);
      }
    };

    window.addEventListener("pointerdown", dongMenuKhiBamRaNgoai);
    window.addEventListener("keydown", dongMenuKhiNhanEsc);

    return () => {
      window.removeEventListener("pointerdown", dongMenuKhiBamRaNgoai);
      window.removeEventListener("keydown", dongMenuKhiNhanEsc);
    };
  }, [dangMoMenu]);

  const layDuongDanCanChiaSe = () => {
    if (typeof window === "undefined") {
      return null;
    }

    const duongDanHienTai = new URL(window.location.href);
    duongDanHienTai.hash = anchorId;

    return duongDanHienTai.toString();
  };

  const chiaSeLenNenTang = (nenTang: "facebook" | "zalo") => {
    const duongDanCanChiaSe = layDuongDanCanChiaSe();
    if (!duongDanCanChiaSe) {
      return;
    }

    if (nenTang === "facebook") {
      const duongDanChiaSeFacebook = new URL("https://www.facebook.com/sharer/sharer.php");
      duongDanChiaSeFacebook.searchParams.set("u", duongDanCanChiaSe);
      duongDanChiaSeFacebook.searchParams.set("quote", quote);
      window.open(duongDanChiaSeFacebook.toString(), "_blank", "noopener,noreferrer");
      setDangMoMenu(false);
      return;
    }

    const duongDanChiaSeZalo = new URL("https://zalo.me/share");
    duongDanChiaSeZalo.searchParams.set("url", duongDanCanChiaSe);
    duongDanChiaSeZalo.searchParams.set("text", quote);
    window.open(duongDanChiaSeZalo.toString(), "_blank", "noopener,noreferrer");
    setDangMoMenu(false);
  };

  const lopNutMacDinh =
    "inline-flex items-center gap-1 rounded-full border border-[var(--color-mist)] bg-[var(--color-cream)] px-3 py-1.5 text-xs font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]";

  const lopNutKichHoat = className || lopNutMacDinh;

  return (
    <div ref={khungMenuRef} className="relative inline-flex">
      <button
        type="button"
        className={lopNutKichHoat}
        aria-haspopup="menu"
        aria-expanded={dangMoMenu}
        onClick={() => {
          setDangMoMenu((giaTriCu) => !giaTriCu);
        }}
      >
        {label}
      </button>

      {dangMoMenu ? (
        <div
          role="menu"
          className="absolute right-0 top-full z-30 mt-2 flex items-center gap-2 rounded-2xl border border-[var(--color-mist)] bg-[var(--color-cream)] p-2 shadow-[0_14px_30px_rgba(30,26,23,0.16)]"
        >
          <div className="group relative">
            <button
              type="button"
              aria-label="Chia sẻ lên Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-mist)] bg-white transition-colors hover:border-[var(--color-gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
              onClick={() => {
                chiaSeLenNenTang("facebook");
              }}
            >
              <span
                aria-hidden
                className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1877f2] text-sm font-bold text-white"
              >
                f
              </span>
            </button>

            <span className="pointer-events-none absolute bottom-full left-1/2 z-40 mb-1 -translate-x-1/2 rounded-md bg-[var(--color-ink)] px-2 py-1 text-[10px] font-medium whitespace-nowrap text-[var(--color-cream)] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              chia sẻ facebook
            </span>
          </div>

          <div className="group relative">
            <button
              type="button"
              aria-label="Chia sẻ qua Zalo"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-mist)] bg-white transition-colors hover:border-[var(--color-gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
              onClick={() => {
                chiaSeLenNenTang("zalo");
              }}
            >
              <span
                aria-hidden
                className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0068ff] text-[10px] font-semibold tracking-wide text-white"
              >
                Z
              </span>
            </button>

            <span className="pointer-events-none absolute bottom-full left-1/2 z-40 mb-1 -translate-x-1/2 rounded-md bg-[var(--color-ink)] px-2 py-1 text-[10px] font-medium whitespace-nowrap text-[var(--color-cream)] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              chia sẻ zalo
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

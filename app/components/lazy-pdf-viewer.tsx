"use client";

import { useMemo, useState } from "react";

type LazyPdfViewerProps = {
  tepPdf: string;
  tieuDe: string;
};

export default function LazyPdfViewer({ tepPdf, tieuDe }: LazyPdfViewerProps) {
  const [daMo, setDaMo] = useState(false);

  const duongDanXem = useMemo(() => {
    return `${tepPdf}#toolbar=1&navpanes=0&zoom=page-width`;
  }, [tepPdf]);

  if (!daMo) {
    return (
      <div className="relative flex h-[620px] w-full items-center justify-center overflow-hidden rounded-2xl border border-[var(--color-mist)] md:h-[760px]">
        <div
          aria-hidden
          className="absolute inset-0 scale-110 bg-cover bg-center opacity-45 blur-sm"
          style={{ backgroundImage: "url('/images/dong-song-xuan-cover.jpg')" }}
        />
        <div aria-hidden className="absolute inset-0 bg-[rgba(30,26,23,0.3)]" />

        <button
          type="button"
          className="relative z-10 rounded-full border border-[var(--color-cream)] bg-[rgba(30,26,23,0.7)] px-10 py-4 font-serif text-2xl font-medium text-[var(--color-cream)] shadow-[0_12px_26px_rgba(0,0,0,0.36)] transition-colors hover:bg-[rgba(30,26,23,0.82)] md:text-3xl"
          onClick={() => {
            setDaMo(true);
          }}
        >
          Bấm để đọc
        </button>
      </div>
    );
  }

  return (
    <iframe
      title={tieuDe}
      src={duongDanXem}
      className="h-[620px] w-full rounded-2xl border border-[var(--color-mist)] bg-black/5 md:h-[760px]"
      loading="lazy"
      allowFullScreen
    />
  );
}

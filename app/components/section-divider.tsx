type SectionDividerProps = {
  className?: string;
  variant?: "mist-gold" | "gold-moss" | "mist-ink";
};

const bienTheDivider = {
  "mist-gold": {
    duongChinh: "var(--color-mist)",
    duongPhu: "var(--color-gold)",
    doMoDuongPhu: 0.45,
  },
  "gold-moss": {
    duongChinh: "var(--color-gold)",
    duongPhu: "var(--color-moss)",
    doMoDuongPhu: 0.5,
  },
  "mist-ink": {
    duongChinh: "var(--color-mist)",
    duongPhu: "var(--color-ink)",
    doMoDuongPhu: 0.28,
  },
} as const;

export default function SectionDivider({ className = "", variant = "mist-gold" }: SectionDividerProps) {
  const mauDivider = bienTheDivider[variant];

  return (
    <div aria-hidden className={`mx-auto w-full max-w-6xl px-6 md:px-10 ${className}`}>
      <svg viewBox="0 0 1200 72" className="h-10 w-full" fill="none" preserveAspectRatio="none">
        <path
          d="M6 38C130 15 266 15 390 38C514 61 650 61 774 38C898 15 1034 15 1194 38"
          stroke={mauDivider.duongChinh}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8 46C132 23 268 23 392 46C516 69 652 69 776 46C900 23 1036 23 1192 46"
          stroke={mauDivider.duongPhu}
          strokeOpacity={mauDivider.doMoDuongPhu}
          strokeWidth="0.9"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

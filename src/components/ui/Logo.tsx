export default function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  // Two overlapping squares mark + wordmark
  // Dark variant: white squares for dark backgrounds
  // Light variant: full colour (forest green + sage)
  const primarySquare = variant === "dark" ? "#FFFFFF" : "#2D6A4F";
  const secondarySquare = variant === "dark" ? "rgba(255,255,255,0.4)" : "#B7DBC8";
  const wordmarkColor = variant === "dark" ? "#F5F5F0" : "#1A1A1A";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Two-square mark */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Back square (sage/light - lower right) */}
        <rect x="8" y="8" width="20" height="20" rx="4" fill={secondarySquare} />
        {/* Front square (forest green/white - upper left) */}
        <rect x="4" y="4" width="20" height="20" rx="4" fill={primarySquare} />
      </svg>

      {/* Wordmark */}
      <span
        className="text-lg font-medium tracking-wide"
        style={{ color: wordmarkColor, fontFamily: "var(--font-body)" }}
      >
        weframe
      </span>
    </div>
  );
}

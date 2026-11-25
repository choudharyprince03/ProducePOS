import React from "react";

export const STORES = [
  {
    kicker: "Download on the",
    label: "App Store",
    note: "Back office for iPhone",
    href: "https://apps.apple.com/us/app/produce-ai-backoffice/id6810565424",
    icon: "/images/brand/stores/apple.svg",
  },
  {
    kicker: "Get it on",
    label: "Google Play",
    note: "Back office for Android",
    href: "https://play.google.com/store/apps/details?id=com.produceai.app",
    icon: "/images/brand/stores/google-play-icon.svg",
  },
  {
    kicker: "Download for",
    label: "Windows",
    note: "POS Lane Setup",
    href: "https://github.com/nikhildhanda04/Produce-Pos-/releases/download/v1.0.218/Produce-POS-Lane-Setup-1.0.218.exe",
    icon: "/images/brand/stores/microsoft-windows-icon.svg",
  },
];

export const StoreButtons: React.FC<{ size?: "md" | "lg"; className?: string }> = ({ size = "md", className = "" }) => (
  <div className={`flex flex-wrap gap-3 ${className}`}>
    {STORES.map(({ kicker, label, note, href, icon }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label}: ${note}`}
        className={`btn store-btn gap-3 justify-start max-sm:w-full ${size === "lg" ? "h-[60px] px-6 sm:min-w-[176px]" : "h-[54px] px-4 sm:min-w-[148px]"}`}
      >
        <img src={icon} alt="" className={`shrink-0 w-auto ${size === "lg" ? "h-8" : "h-7"}`} />
        <span className="flex flex-col items-start leading-none text-left">
          <span className="text-[11px] font-medium text-ink/55">{kicker}</span>
          <span className={`mt-1 font-bold tracking-tight ${size === "lg" ? "text-[18px]" : "text-[16px]"}`}>{label}</span>
        </span>
      </a>
    ))}
  </div>
);

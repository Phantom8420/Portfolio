const steam = [
  { d: "M6 1C6 1 6.5 2 6 3C5.5 4 6 5 6 5C6 5 6.5 6 6 7", w: 0.5, delay: "0s" },
  { d: "M8 0C8 0 8.8 1.5 8 3C7.2 4.5 8 6 8 6", w: 0.6, delay: "0.5s" },
  { d: "M10 -1C10 -1 10.8 1 10 3C9.2 5 10 7 10 7", w: 0.7, delay: "1s" },
  { d: "M12 0C12 0 12.8 2 12 4C11.2 6 12 7 12 7", w: 0.6, delay: "1.5s" },
  { d: "M14 1C14 1 14.5 2 14 3C13.5 4 14 5 14 5C14 5 14.5 6 14 7", w: 0.5, delay: "2s" },
];

const particles = [
  "top-20 left-24 size-3 bg-amber-500/25 dark:bg-amber-300/40",
  "top-24 left-32 size-4 bg-orange-400/20 dark:bg-orange-200/30",
  "top-16 left-28 size-2 bg-yellow-500/20 dark:bg-yellow-200/35",
  "top-28 left-20 size-3 bg-amber-600/20 dark:bg-amber-400/25",
];

export function CoffeeMug() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed right-0 bottom-0 z-10 hidden select-none sm:block"
    >
      {particles.map((cls, i) => (
        <div
          key={i}
          className={`steam-particle absolute rounded-full blur-sm ${cls}`}
          style={{ animationDelay: `${i * 1.25}s` }}
        />
      ))}
      <div className="mug-float" style={{ filter: "var(--mug-glow)" }}>
        <svg
          width="320"
          height="320"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-[0.25] dark:opacity-[0.15]"
        >
          <defs>
            <linearGradient id="mugBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "var(--mug-1)" }} />
              <stop offset="50%" style={{ stopColor: "var(--mug-2)" }} />
              <stop offset="100%" style={{ stopColor: "var(--mug-3)" }} />
            </linearGradient>
            <linearGradient id="handleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "var(--mug-1)" }} />
              <stop offset="100%" style={{ stopColor: "var(--mug-2)" }} />
            </linearGradient>
            <linearGradient id="coffeeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "var(--mug-coffee-1)" }} />
              <stop offset="50%" style={{ stopColor: "var(--mug-coffee-2)" }} />
              <stop offset="100%" style={{ stopColor: "var(--mug-coffee-1)" }} />
            </linearGradient>
            <linearGradient id="steamGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" style={{ stopColor: "var(--mug-steam-1)", stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: "var(--mug-steam-2)", stopOpacity: 0.2 }} />
            </linearGradient>
            <linearGradient id="saucerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "var(--mug-3)" }} />
              <stop offset="50%" style={{ stopColor: "var(--mug-1)" }} />
              <stop offset="100%" style={{ stopColor: "var(--mug-3)" }} />
            </linearGradient>
          </defs>
          {steam.map((s) => (
            <path
              key={s.d}
              d={s.d}
              stroke="url(#steamGradient)"
              strokeWidth={s.w}
              strokeLinecap="round"
              className="steam-sway"
              style={{ animationDelay: s.delay }}
            />
          ))}
          <path d="M5 8H15V18C15 19.1046 14.1046 20 13 20H7C5.89543 20 5 19.1046 5 18V8Z" stroke="url(#mugBodyGradient)" strokeWidth="1.2" />
          <path d="M6 10H14" stroke="url(#coffeeGradient)" strokeWidth="0.8" strokeLinecap="round" />
          <path d="M15 10H17C18.1046 10 19 10.8954 19 12V12C19 13.1046 18.1046 14 17 14H15" stroke="url(#handleGradient)" strokeWidth="1.2" />
          <ellipse cx="10" cy="21" rx="6" ry="1" stroke="url(#saucerGradient)" strokeWidth="0.8" fill="url(#saucerGradient)" fillOpacity="0.2" />
        </svg>
      </div>
    </div>
  );
}

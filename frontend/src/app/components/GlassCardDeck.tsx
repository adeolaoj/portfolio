// components/GlassCardDeck.tsx
import { useEffect, useState } from "react";
import { GlassCard } from "./GlassCard";
import { buildCards } from "../data/buildCards";

const AUTO_ROTATE_MS = 4500; // speed

export function GlassCardDeck() {
  const [activeIndex, setActiveIndex] = useState(0);

  const total = buildCards.length;

  const next = () => setActiveIndex((i) => (i + 1) % total);
  const prev = () => setActiveIndex((i) => (i - 1 + total) % total);

  // Auto-rotation
  useEffect(() => {
    const id = setInterval(next, AUTO_ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full max-w-md h-[450px]">
      {/* Card stack */}
      {buildCards.map((card, index) => {
        const offset = index - activeIndex;

        if (offset < -1 || offset > 2) return null;

        const translateY = offset === -1 ? 72 : offset * 36;
        const translateX = offset === -1 ? 72 : offset * 36;
        const scale = offset === -1 ? 0.9 : 1 - offset * 0.05;
        const zIndex = offset === -1 ? 1 : 3 - offset;

        return (
          <div
            key={card.title}
            className="absolute inset-0 transition-all duration-1000 ease-in-out"
            style={{
              transform: `
                translateY(${translateY}px)
                translateX(${translateX}px)
                scale(${scale})
              `,
              zIndex,
              opacity: 1,
            }}
          >
            <GlassCard
              className={`
                h-full p-8
                transition-transform duration-300
                ${offset === 0 ? "hover:scale-[1.03]" : ""}
              `}
            >
              <div className="flex flex-col justify-center h-full">
                <div>
                  <h3 className="text-5xl font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xl text-white/70">
                    {card.subtitle}
                  </p>
                </div>

                <p className="mt-5 text-white/70 text-lg leading-relaxed">
                  {card.description}
                </p>
              </div>
            </GlassCard>
          </div>
        );
      })}
    </div>
  );
}
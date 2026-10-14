import { useState, useEffect } from "react";

interface TypewriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

function usePrefersReducedMotion() {
  const query = "(prefers-reduced-motion: reduce)";
  const [reduced, setReduced] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setReduced(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

export function Typewriter({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypewriterProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;

    const targetText = texts[currentTextIndex];
    const finishedTyping = !isDeleting && currentText === targetText;

    const timeout = setTimeout(
      () => {
        if (finishedTyping) {
          setIsDeleting(true);
        } else if (!isDeleting) {
          setCurrentText(targetText.slice(0, currentText.length + 1));
        } else if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      },
      finishedTyping ? pauseDuration : isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    reducedMotion,
    currentText,
    currentTextIndex,
    isDeleting,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  // Screen readers get the whole list once, instead of every keystroke.
  const fullText = texts.join(", ");

  if (reducedMotion) {
    return <span>{texts.join(" · ")}</span>;
  }

  return (
    <span className="inline-flex items-center">
      <span className="sr-only">{fullText}</span>
      <span aria-hidden="true">{currentText}</span>
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[1em] w-[3px] animate-pulse rounded-full bg-current"
      />
    </span>
  );
}

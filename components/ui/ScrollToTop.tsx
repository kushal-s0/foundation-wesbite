"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`focus-ring fixed bottom-5 right-5 z-50 grid h-11 w-11 place-items-center rounded-md bg-primary text-white shadow-lg shadow-blue-600/25 transition ${
        show ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0 pointer-events-none"
      }`}
    >
      <ArrowUp size={20} aria-hidden="true" />
    </button>
  );
}

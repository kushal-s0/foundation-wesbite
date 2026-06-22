"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-white" role="status" aria-label="Loading website">
      <div className="flex items-center gap-3 rounded-md border border-slate-100 bg-white px-5 py-4 shadow-soft">
        <span className="h-8 w-8 animate-spin rounded-full border-4 border-slate-100 border-t-primary" />
        <span className="font-semibold text-ink">Nayepankh Foundation</span>
      </div>
    </div>
  );
}

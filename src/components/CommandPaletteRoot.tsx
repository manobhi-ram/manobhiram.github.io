"use client";

import { useCallback, useEffect, useState } from "react";
import CommandPalette from "@/components/CommandPalette";
import NavBar from "@/components/NavBar";

export default function CommandPaletteRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);
  const openPalette = useCallback(() => setOpen(true), []);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <NavBar onCommand={openPalette} />
      {children}
      <CommandPalette open={open} onClose={close} />
    </>
  );
}

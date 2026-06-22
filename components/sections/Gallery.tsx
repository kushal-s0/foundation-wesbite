"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { galleryImages } from "@/lib/data";
import type { GalleryImage } from "@/types";
import { Reveal, motion } from "@/components/ui/Motion";

export function Gallery({ preview = false }: { preview?: boolean }) {
  const images = preview ? galleryImages.slice(0, 3) : galleryImages;
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className={preview ? "grid gap-5 sm:grid-cols-3" : "masonry"}>
        {images.map((image, index) => (
          <Reveal key={image.src} delay={index * 0.05} className={preview ? "" : "masonry-item mb-4"}>
            <button
              type="button"
              onClick={() => setSelected(image)}
              className="focus-ring group block w-full overflow-hidden rounded-lg bg-slate-100 text-left shadow-sm"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={900}
                height={700}
                loading="lazy"
                className={`${preview ? "h-72" : image.height} w-full object-cover transition duration-500 group-hover:scale-105`}
              />
            </button>
          </Reveal>
        ))}
      </div>

      {selected ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] grid place-items-center bg-slate-950/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selected.alt}
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            aria-label="Close gallery image"
            className="focus-ring absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-md bg-white text-ink"
            onClick={() => setSelected(null)}
          >
            <X size={22} aria-hidden="true" />
          </button>
          <Image
            src={selected.src}
            alt={selected.alt}
            width={1200}
            height={900}
            className="max-h-[82vh] w-full max-w-5xl rounded-lg object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </motion.div>
      ) : null}
    </>
  );
}

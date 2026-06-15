'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Lightbox } from './Lightbox';

export type DesignItem = {
  src: string;
  title: string;
};

export function CreativeGallery({ designs }: { designs: DesignItem[] }) {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (designs.length === 0) {
    return (
      <div className="aspect-[3/4] rounded-3xl bg-[#F8F4F0] ring-1 ring-black/5 flex items-center justify-center text-gray-500 text-center px-6">
        Drop design photos into <code className="mx-1">public/designs/</code> to show them here.
      </div>
    );
  }

  const next = () => setActive((i) => (i + 1) % designs.length);
  const prev = () => setActive((i) => (i - 1 + designs.length) % designs.length);
  const activeDesign = designs[active];

  return (
    <>
      <button
        type="button"
        onClick={() => setLightboxOpen(true)}
        className="group relative block w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#6B8E73]"
        aria-label={`View design: ${activeDesign.title}`}
      >
        <Image
          src={activeDesign.src}
          alt={activeDesign.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          priority
        />
        <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        <span className="absolute bottom-4 right-4 rounded-full bg-white/90 backdrop-blur px-4 py-1.5 text-sm font-medium text-[#2C2520] opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          Click to view
        </span>
      </button>

      {designs.length > 1 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {designs.map((design, i) => (
            <button
              key={design.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${design.title}`}
              className={`relative h-16 w-16 rounded-xl overflow-hidden ring-2 transition-all ${
                i === active ? 'ring-[#C97D5B]' : 'ring-transparent hover:ring-[#6B8E73]/50'
              }`}
            >
              <Image src={design.src} alt={design.title} fill sizes="64px" className="object-cover" />
            </button>
          ))}
        </div>
      )}

      <Lightbox
        items={designs}
        index={lightboxOpen ? active : null}
        onClose={() => setLightboxOpen(false)}
        onPrev={prev}
        onNext={next}
      />
    </>
  );
}

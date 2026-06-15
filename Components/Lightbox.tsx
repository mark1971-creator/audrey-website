'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export type LightboxItem = {
  src: string;
  title?: string;
  subtitle?: string;
};

type LightboxProps = {
  items: LightboxItem[];
  /** Active item index, or null when the lightbox is closed. */
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function Lightbox({ items, index, onClose, onPrev, onNext }: LightboxProps) {
  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose, onNext, onPrev]);

  if (index === null) return null;

  const item = items[index];
  const multiple = items.length > 1;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-5 right-5 rounded-full bg-white/10 hover:bg-white/20 p-3 text-white transition-colors"
        aria-label="Close"
      >
        <X size={24} />
      </button>

      {multiple && (
        <>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 sm:left-8 rounded-full bg-white/10 hover:bg-white/20 p-3 text-white transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 sm:right-8 rounded-full bg-white/10 hover:bg-white/20 p-3 text-white transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>
        </>
      )}

      <motion.div
        key={item.src}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="relative max-h-[85vh] w-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={item.src}
          alt={item.title ?? ''}
          width={1000}
          height={1300}
          sizes="90vw"
          className="max-h-[85vh] w-auto rounded-2xl object-contain shadow-2xl"
        />
        {(item.title || item.subtitle) && (
          <div className="mt-4 text-center text-white">
            {item.title && <p className="text-lg font-medium">{item.title}</p>}
            {item.subtitle && <p className="text-sm text-white/70">{item.subtitle}</p>}
          </div>
        )}
      </motion.div>
    </div>
  );
}

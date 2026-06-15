'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Lightbox } from './Lightbox';

export type MomentCategory = {
  slug: string;
  caption: string;
  location: string;
  images: string[];
};

export function MomentsGallery({ categories }: { categories: MomentCategory[] }) {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  const visible = categories.filter((c) => c.images.length > 0);

  const lightboxItems =
    activeCategory === null
      ? []
      : visible[activeCategory].images.map((src) => ({
          src,
          title: visible[activeCategory].caption,
          subtitle: visible[activeCategory].location,
        }));

  const openCategory = (index: number) => {
    setActiveCategory(index);
    setPhotoIndex(0);
  };

  const close = () => {
    setActiveCategory(null);
    setPhotoIndex(0);
  };

  const next = () =>
    setPhotoIndex((i) => (lightboxItems.length ? (i + 1) % lightboxItems.length : i));
  const prev = () =>
    setPhotoIndex((i) =>
      lightboxItems.length ? (i - 1 + lightboxItems.length) % lightboxItems.length : i
    );

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((category, i) => {
          const cover = category.images[0];
          const photoCount = category.images.length;

          return (
            <motion.button
              type="button"
              key={category.slug}
              onClick={() => openCategory(i)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              aria-label={`View ${category.caption}${photoCount > 1 ? `, ${photoCount} photos` : ''}`}
              className="group relative rounded-3xl overflow-hidden shadow-md ring-1 ring-black/5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#6B8E73] text-left"
            >
              <Image
                src={cover}
                alt={category.caption}
                width={800}
                height={1000}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              {photoCount > 1 && (
                <span className="absolute top-4 right-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium text-[#2C2520] shadow-sm">
                  {photoCount} photos
                </span>
              )}
              <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-1 opacity-95 bg-gradient-to-t from-black/75 via-black/25 to-transparent p-7 pt-16 text-white transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 block">
                <span className="font-medium text-lg leading-tight block">{category.caption}</span>
                <span className="text-sm opacity-80 block">{category.location}</span>
              </span>
            </motion.button>
          );
        })}
      </div>

      <Lightbox
        items={lightboxItems}
        index={activeCategory === null ? null : photoIndex}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </>
  );
}

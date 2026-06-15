import fs from 'node:fs';
import path from 'node:path';
import { MomentsGallery, type MomentCategory } from './MomentsGallery';

/**
 * Living Life categories. Each one maps to a folder under /public/moments/<slug>/.
 * To add photos: drop image files into the matching folder — they appear in the lightbox.
 * The first image (sorted by filename) is the cover shown on the page.
 * To add a new category: create a folder and add an entry here.
 */
const categories = [
  { slug: 'golden-hour', caption: 'Golden hour with the girls', location: 'Schaffhausen' },
  { slug: 'new-city', caption: 'New city, new memories', location: 'Travel 2025' },
  { slug: 'memory-box', caption: 'Memory box', location: 'Growing up' },
];

const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif', '.gif']);

function readCategoryImages(slug: string): string[] {
  const dir = path.join(process.cwd(), 'public', 'moments', slug);
  try {
    return fs
      .readdirSync(dir)
      .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
      .map((file) => `/moments/${slug}/${file}`);
  } catch {
    return [];
  }
}

function getCategories(): MomentCategory[] {
  return categories.map((category) => ({
    ...category,
    images: readCategoryImages(category.slug),
  }));
}

export function Moments() {
  const momentCategories = getCategories();

  return (
    <section id="moments" className="section py-24 bg-[#F8F4F0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading text-6xl font-bold mb-4">Living Life</h2>
          <p className="text-xl text-gray-600">Friends &bull; Adventures &bull; Travels &bull; All the beautiful moments</p>
        </div>

        <MomentsGallery categories={momentCategories} />
      </div>
    </section>
  );
}

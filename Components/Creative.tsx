import fs from 'node:fs';
import path from 'node:path';
import { CreativeGallery, type DesignItem } from './CreativeGallery';

/**
 * Designed by Odd gallery. Drop image files into /public/designs/ — they appear automatically.
 * Optional titles: add a matching .txt file (e.g. odd-1.txt next to odd-1.png).
 * Without a .txt file, the title is derived from the filename.
 */
const DESIGNS_DIR = path.join(process.cwd(), 'public', 'designs');
const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif', '.gif']);

function titleFromFilename(filename: string): string {
  const base = path.basename(filename, path.extname(filename));
  return base
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function readCaptionFile(filename: string): string | null {
  const captionPath = path.join(DESIGNS_DIR, `${path.basename(filename, path.extname(filename))}.txt`);
  try {
    const text = fs.readFileSync(captionPath, 'utf8').trim();
    return text || null;
  } catch {
    return null;
  }
}

function getDesigns(): DesignItem[] {
  try {
    return fs
      .readdirSync(DESIGNS_DIR)
      .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
      .map((file) => ({
        src: `/designs/${file}`,
        title: readCaptionFile(file) ?? titleFromFilename(file),
      }));
  } catch {
    return [];
  }
}

export function Creative() {
  const designs = getDesigns();

  return (
    <section id="odd" className="section py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="heading text-6xl font-bold mb-8">Designed by Odd</h2>
            <p className="text-2xl leading-relaxed text-gray-600">
              I take old clothes and give them new life — with my own unique touch.
              Each piece is handmade, one-of-a-kind, and full of personality.
            </p>
            <p className="mt-6 text-lg">My friends keep asking for more. Maybe you will too.</p>
          </div>

          <CreativeGallery designs={designs} />
        </div>
      </div>
    </section>
  );
}

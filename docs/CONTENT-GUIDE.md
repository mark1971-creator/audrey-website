# Content Guide — Audrey Website

This guide explains how to update photos and text **without touching code** (where possible), and when a small code edit is needed.

---

## Quick reference

| Section | Folder | Code change needed? |
|---------|--------|---------------------|
| Living Life photos | `public/moments/<category>/` | Only to add a **new category** |
| Designed by Odd | `public/designs/` | No |
| Experience thumbnails | `public/experience/` | Yes — one line in `Experience.tsx` |
| Hero / About / Contact text | `Components/*.tsx` | Yes |
| Favicon | `public/` | No (replace files) |

---

## Living Life (Moments)

Each category is a **folder** under `public/moments/`. The site shows **one cover photo** per category; all other photos in that folder open in a **lightbox** when clicked.

### Current categories

| Folder | Caption | Location |
|--------|---------|----------|
| `golden-hour/` | Golden hour with the girls | Schaffhausen |
| `new-city/` | New city, new memories | Travel 2025 |
| `memory-box/` | Memory box | Growing up |

### Add photos to an existing category

1. Drop image files into the matching folder, e.g. `public/moments/golden-hour/`
2. Supported formats: `.png`, `.jpg`, `.jpeg`, `.webp`, `.avif`, `.gif`
3. Refresh the browser (dev) or rebuild (production)

**Cover image:** The **first file when sorted by filename** is shown on the page. Use numbered names so order is predictable:

```
1.jpeg   ← cover (shown on page)
2.jpg
3.jpeg   ← visible in lightbox only
```

**Tip:** Use consistent naming — `1`, `2`, `3` rather than random names — so the cover stays the one you want.

### Add a new category

1. Create a new folder: `public/moments/my-category/`
2. Add your photos to that folder
3. Edit `Components/Moments.tsx` — add one entry to the `categories` array:

```typescript
{ slug: 'my-category', caption: 'My caption', location: 'My location' },
```

4. Commit and deploy

---

## Designed by Odd

All upcycled fashion pieces live in **`public/designs/`**.

### Add a new design

1. Drop the photo into `public/designs/`, e.g. `odd-9.jpg`
2. *(Optional)* Add a caption file `odd-9.txt` with the title on the first line:

```
Reworked florals & cosy knits
```

Without a `.txt` file, the title is auto-generated from the filename (`odd-9.jpg` → "Odd 9").

3. Refresh or rebuild

The gallery automatically shows thumbnails when there are multiple designs, and opens a lightbox on click.

---

## Experience

Each job has a small **thumbnail** beside the entry.

### Add or change a thumbnail

1. Save the photo to `public/experience/`, e.g. `public/experience/rhykantine.jpg`
2. Edit `Components/Experience.tsx` — set the `image` field for that job:

```typescript
{
  role: "Waitress",
  company: "Rhykantine",
  // ...
  image: "/experience/rhykantine.jpg",
},
```

Use `image: ""` to show the default initial-circle fallback instead.

---

## Text & copy

Edit the relevant component file in `Components/`:

| Section | File |
|---------|------|
| Navigation labels | `Nav.tsx` |
| Hero headline & buttons | `Hero.tsx` |
| About text | `About.tsx` |
| Job titles & descriptions | `Experience.tsx` |
| Designed by Odd intro | `Creative.tsx` |
| Living Life title | `Moments.tsx` |
| Contact email | `Contact.tsx` |
| Footer | `Footer.tsx` |

**Contact email** is currently: `audrey.vandeneijnde@gmail.com`

---

## Favicon & app icons

All icon files belong in **`public/`**:

```
public/
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── android-chrome-192x192.png
├── android-chrome-512x512.png
└── site.webmanifest
```

Generate at [favicon.io](https://favicon.io/favicon-generator/) with:

- Text: **A**
- Font: **Playfair Display**
- Background: **#F8F4F0**
- Font color: **#C97D5B**

After replacing files, hard-refresh the browser: **Ctrl + Shift + R** (favicons are heavily cached).

Metadata is configured in `app/layout.tsx` — no changes needed if filenames stay the same.

---

## Git workflow (sync to GitHub)

After updating photos or content:

```bash
git status
git add .
git commit -m "Describe your changes"
git push origin main
```

For photo-only updates, a commit message like *"Update Living Life and experience photos"* is fine.

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| New photos don't appear | Refresh browser; in production run `npm run build` |
| Wrong cover photo shown | Rename files so the desired cover sorts first (`1.jpg`) |
| Styles look broken | Ensure dev server runs from project root; check `next.config.ts` turbopack root |
| Favicon not updating | Hard refresh (`Ctrl + Shift + R`); confirm `favicon.ico` is in `public/` |
| Experience photo missing | Check filename path matches `image` field in `Experience.tsx` exactly |

---

## Need help?

Contact **Being at Full Potential** or open an issue on the GitHub repository.

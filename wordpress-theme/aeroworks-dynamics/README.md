# Aeroworks Dynamics — WordPress Theme

Custom WordPress theme that replicates the React/Next.js website as closely as possible.

## Installation

1. **Copy the theme** — Upload the entire `aeroworks-dynamics` folder to `wp-content/themes/` on your WordPress server.

2. **Download images** — Download the 6 images listed in `assets/images/README.txt` from the Vercel Blob Storage URLs and place them in the `assets/images/` directory with the exact filenames specified.

3. **Activate the theme** — Go to WordPress Admin → Appearance → Themes → Activate "Aeroworks Dynamics".

4. **Create pages** — Create 5 pages in WordPress Admin → Pages → Add New:

   | Page Title | Slug (permalink) |
   |---|---|
   | Home | `home` (or any — it's the front page) |
   | Software | `software` |
   | Hardware | `hardware` |
   | Team | `team` |
   | Contact | `contact` |

   The content of each page can be left empty — all content is hardcoded in the theme templates via the `page-{slug}.php` naming convention.

5. **Set the front page** — Go to Settings → Reading:
   - Select "A static page"
   - Set "Homepage" to the "Home" page you created
   - Leave "Posts page" blank (or set to a blog page if desired)

6. **Set permalinks** — Go to Settings → Permalinks:
   - Select "Post name" (`/%postname%/`)
   - Click Save Changes

## Theme Structure

```
aeroworks-dynamics/
├── style.css                    ← All CSS (design tokens + components + pages)
├── functions.php                ← Setup, fonts, JSON-LD, SVG icons
├── header.php                   ← HTML head + navbar
├── footer.php                   ← Footer + closing HTML
├── front-page.php               ← Home page
├── page-software.php            ← Software page
├── page-hardware.php            ← Hardware page
├── page-team.php                ← Team page
├── page-contact.php             ← Contact page
├── page.php                     ← Generic page fallback
├── index.php                    ← Required WordPress fallback
├── 404.php                      ← Custom 404 page
├── template-parts/
│   ├── home/
│   │   ├── hero-section.php
│   │   ├── solutions-section.php
│   │   ├── software-highlight.php
│   │   ├── about-section.php
│   │   ├── team-preview.php
│   │   └── cta-section.php
│   └── software/
│       ├── hero.php
│       ├── product-overview.php
│       ├── trajectory-viz.php
│       ├── 3d-analysis.php
│       └── branding-cta.php
└── assets/
    ├── js/
    │   └── main.js              ← Mobile menu toggle
    └── images/
        └── (6 images to download)
```

## How Page Templates Work

WordPress automatically uses `page-{slug}.php` when a page with the matching slug is visited. No manual template assignment is needed — just make sure the page slugs match exactly:

- `/` → `front-page.php`
- `/software/` → `page-software.php`
- `/hardware/` → `page-hardware.php`
- `/team/` → `page-team.php`
- `/contact/` → `page-contact.php`

## Editing Content

Most content is hardcoded in the PHP template files for simplicity and to match the React source exactly. To edit text:

- **Team members** — Edit `page-team.php` and `template-parts/home/team-preview.php`
- **Contact info** — Edit `page-contact.php` and `footer.php`
- **Software descriptions** — Edit files in `template-parts/software/`
- **Home sections** — Edit files in `template-parts/home/`

## Optional Plugins

- **Yoast SEO** — For per-page meta titles, descriptions, and OG images
- **Classic Editor** — To simplify the admin editing experience

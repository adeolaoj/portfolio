# Portfolio

My personal website, live at [adeolaojuade.com](https://adeolaojuade.com).

Built with React, TypeScript, Vite and Tailwind CSS, and deployed on Vercel.

## Running it locally

This project uses [pnpm](https://pnpm.io). From the `frontend` folder:

| Command | What it does |
| --- | --- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start the dev server with live reload |
| `pnpm typecheck` | Check the TypeScript for errors |
| `pnpm build` | Create a production build in `dist/` |
| `pnpm preview` | Serve that production build locally |

Vercel runs `pnpm build` on every push, so `dist/` is not committed. Every branch gets its own preview link, and merging to `main` updates the live site.

## Updating the content

All the text lives in `frontend/src/app/data/`, so most updates never touch layout code:

| File | What's in it |
| --- | --- |
| `profile.ts` | Name, email, cycling roles, "Open to…" status, intro, social links, résumé link |
| `now.ts` | The Studying / Building / Exploring strip |
| `skills.ts` | Skill groups |
| `projects.ts` | Projects. Mark one `featured: true` for the large card; `highlights` adds bullet points to it |
| `experience.ts` | "Where I've worked", newest first |
| `videos.ts` | YouTube videos. The first is shown large, the next three are listed beside it |

Images go in `frontend/public/` and are referenced from the site root:

- **Project screenshots:** save as `public/projects/name.png` (16:10 works best) and set `screenshot: "/projects/name.png"` on the project.
- **Résumé:** save as `public/resume.pdf` and set `resumeUrl: "/resume.pdf"` in `profile.ts`. The Résumé buttons appear once it's set.

## How it's organized

```
frontend/
├── index.html              Page title, description, link-preview and icon tags
├── public/                 Favicons, link-preview image, screenshots, résumé
└── src/
    ├── app/
    │   ├── App.tsx         The page: sections in order
    │   ├── sections/       Nav, Hero, NowStrip, Work, Experience, Videos, Contact
    │   ├── components/     Reveal (scroll fade-in), Typewriter, LinkedInIcon
    │   └── data/           All the content (see above)
    └── styles/
        ├── theme.css       Colors, font, corner radii, base styles
        ├── tailwind.css    Tailwind setup
        └── fonts.css       Jost, self-hosted
```

**Design tokens:** colors are Tailwind utilities defined in `theme.css` (`bg-cream`, `text-sage`, `bg-terracotta`, `border-line`…). Change a hex value there to restyle it everywhere. Use `text-terracotta-deep` rather than `text-terracotta` for terracotta text, since it's the shade that stays readable on the light backgrounds.

**Motion:** sections fade in on scroll and the role line types itself out. Both turn off for visitors who have "reduce motion" set on their device.

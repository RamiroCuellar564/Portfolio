# Portfolio agent guide

## Project snapshot

- This is Ramiro Cuellar's single-page portfolio, built with Next.js 16, React 19,
  TypeScript, Tailwind CSS 4, and DaisyUI 5.
- The main route is `src/app/page.tsx`. Its section components live in
  `src/app/components/`.
- Static, publicly served assets belong in `public/`. Use root-relative paths in
  the UI, for example `/foto.png`.
- The package manager is npm. Keep `package-lock.json` in sync with any dependency
  change.
- No automated test suite is currently configured. `npm run lint` and
  `npm run build` are the required baseline checks.

## Working agreement

1. Inspect the existing implementation and `git diff` before editing. Preserve
   unrelated user changes; do not reset, overwrite, or reformat files outside the
   requested scope.
2. Prefer small, reviewable commits of work. Refactor behavior in stages and keep
   the route usable after every stage.
3. Do not add packages, external services, analytics, environment variables, or
   network calls unless the task requires them. Explain why any new dependency is
   necessary.
4. Do not fabricate portfolio facts, testimonials, metrics, credentials, project
   URLs, or contact details. Leave unknown content unchanged or ask for it.
5. Never expose secrets or place sensitive values in `NEXT_PUBLIC_*` variables.
6. Keep source code, UI copy, and documentation UTF-8. If legacy text renders with
   mojibake, repair the encoding deliberately rather than copying corrupted text.

## Next.js and React rules

- Default to Server Components. Add `"use client"` only to the smallest component
  that needs browser APIs, state, effects, event handlers, or animation libraries.
- Do not turn `page.tsx` or `layout.tsx` into client components merely to support a
  child. Isolate interactive or heavy visual effects behind a client boundary and
  dynamically import them when appropriate.
- Use `next/image` for content images when dimensions and layout are known. Set
  meaningful `alt` text; use `alt=""` only for genuinely decorative imagery.
- Use `next/link` for internal route navigation. Hash links for sections are fine.
- Maintain accurate `Metadata` in `src/app/layout.tsx`; update `lang`, title, and
  description whenever the portfolio's language or identity changes.
- Prefer semantic HTML: one `main`, logical `section` elements with headings,
  `header`/`nav`/`footer`, real `button`s for actions, and `a` elements only for
  navigation.
- Give every mapped element a stable key. Type props and data structures; avoid
  `any`, unsafe casts, and suppressing TypeScript or ESLint errors.
- Do not leave `console.log`, debug UI, dead imports, or commented-out production
  code in a completed change.

## UI, responsiveness, and accessibility

- Preserve a deliberate, personal visual direction. Avoid generic dashboard cards,
  excessive gradients, gratuitous glass effects, and animation that competes with
  the portfolio content.
- Build mobile-first. Check narrow mobile, tablet, and wide desktop layouts; avoid
  fixed widths or heights that clip content.
- Use Tailwind utilities for component styling and keep global CSS limited to
  resets, tokens, and truly global rules. Reuse existing design tokens or introduce
  a small coherent token set instead of scattering arbitrary values.
- Respect `prefers-reduced-motion`. Motion must not be the sole way to access
  content, and decorative particle/canvas effects must not block clicks, reading,
  or keyboard navigation.
- Ensure visible keyboard focus, logical tab order, sufficient contrast, and
  accessible names for icon-only controls. Test the mobile navigation with keyboard
  and screen-reader semantics, not just visual appearance.
- External links opened in a new tab must use `target="_blank"` together with
  `rel="noreferrer"` (or `noopener noreferrer`).

## Content, assets, and links

- Before referencing a file, confirm its exact name and casing under `public/`.
  In particular, do not assume `/curriculum.pdf` exists: the current CV asset is
  `public/Ramiro_Mauricio_Cuellar_Curriculum.pdf`.
- Optimize or appropriately size newly introduced raster images. Do not replace
  existing personal photos, certificates, or CV files without explicit approval.
- Use Spanish consistently for visitor-facing copy unless asked to make the site
  bilingual or change its language. Keep code identifiers in clear English.
- Verify section `id` values match every navigation hash link after a refactor.

## Validation and handoff

Run the narrowest relevant checks while working, and before handoff run:

```bash
npm run lint
npm run build
```

If a check cannot run, report the command, the reason, and any remaining risk.
For visual changes, inspect the page at mobile and desktop widths and mention what
was checked. Summarize changed files, user-visible behavior, and validation results.

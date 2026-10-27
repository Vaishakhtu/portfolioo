# Vaishak T U — Personal Portfolio

Premium dark, animated portfolio built with React 19, TypeScript, TanStack Start, Tailwind CSS 4, Motion, Radix UI, and Lucide. The page uses smooth anchor navigation as requested, with accessible project dialogs and category filters.

## Run locally

Install Bun, then run `bun install` and `bun run dev`. Vite prints the local URL. Use `bun run test` for tests, and `bun run build` for a production build. Node 22+ with npm is also supported (`npm install`, `npm run dev`). Do not commit secrets or generated output.

## Edit your portfolio

- `src/data/portfolio.ts`: change profile email, social URLs, photo URL, resume URL, projects, skill categories and journey labels/dates.
- The six project entries are configurable portfolio content, not verification of implementations. Concepts and practice work are labeled. Confirm all technology stacks and features before presenting them as completed work. Only Snake Apple has a supplied live URL. No repositories are invented.
- Generated watch/interior images are illustrative covers, not project screenshots. Replace imported cover images in `src/assets` with your screenshots, update alt text in the cover component, and add project screenshots to each `screenshots` array.
- To add a project, append a `Project` object with a unique `id` and supported category. Blank demo and repository URLs are hidden. Only HTTPS external URLs are shown.
- To add your photo, place it in `public/images/vaishak.jpg` and set `profile.photoUrl` to `/images/vaishak.jpg`. The current avatar is a neutral placeholder, not a fabricated portrait.
- Place your **actual** resume PDF at `public/resume.pdf` and set `profile.resumeUrl` to `/resume.pdf`. Until then the download action explains that the resume is unavailable.
- Remove skills you cannot confidently discuss; no proficiency percentages are used. Journey dates are blank on purpose. Add verified certificates and accomplishments to the neutral highlights area in the Journey component.

## Contact form: honest setup state

The form validates full name, email, subject, and message through `src/lib/contact-schema.ts`, imposes length limits, and contains a honeypot. **Delivery is not configured; no message is stored or sent.** A valid submission explicitly says it was not sent. The schema is ready to reuse on the server.

To enable actual delivery in Lovable, supply your receiving email and configure a verified sender domain you own in Cloud → Emails. Then wire a dedicated contact server action using the shared Zod schema, server-side spam/rate protection and a fixed recipient; return success only after the email provider accepts the request. Do not expose API credentials or accept arbitrary recipients from the browser. Lovable app emails include a managed unsubscribe footer. A backend must be enabled before adding server actions. A configured form service is another option when explicitly selected; validate and encode all outgoing input.

## Organization

- `src/components/portfolio-common.tsx`: navigation, reusable reveal/title elements, footer, branding and configured social links.
- `src/components/portfolio-projects.tsx`: cards, covers, filters, project details.
- `src/components/portfolio-contact.tsx`: accessible validated contact form.
- `src/routes/index.tsx`: hero, about, skills and journey composition; route-specific SEO.
- `src/styles.css`: semantic color and design tokens, responsive layout, motion and reduced-motion rules.
- `src/test/portfolio.test.ts`: category, URL and contact validation rules.

## Deployment

The simplest supported deployment is Lovable Publish. This is **TanStack Start**, not a plain static Vite app: do not upload `dist` or assume a React SPA preset. The current managed Vite configuration targets a Worker runtime.

For **Netlify** or **Vercel**, connect the GitHub repository, select Bun, and use `bun run build`. Configure the corresponding supported Nitro deployment preset (`netlify` or `vercel`) through the Vite/Nitro configuration using the installed managed plugin's supported options; confirm that your adapter generates provider output before publishing. Provider runtime/server configuration is required for SSR, and should be tested on the host rather than inferred from a successful local build. Never assume setting an environment variable overrides the managed plugin's preset.

For **GitHub Pages**, first configure a supported static-prerender export of `/`; Pages cannot run SSR or server actions. Use a custom domain or configure the repository base path and asset paths. Publish the generated static output through GitHub Actions. Actual contact delivery would need a separately configured external service. The current checkout is not a preconfigured Pages export.

The index route sets title, description, Open Graph and a self-referencing canonical. No fake absolute domain or share-image URL is inserted. `public/robots.txt` allows crawling. Add an absolute-URL sitemap once the final domain is known; for this single public page it is optional. Head changes reach the live site only on the next publish.

## Quality and accessibility

Animations respect reduced motion. Dialogs use managed focus, keyboard dismissal and accessible titles. Form errors are connected to labels, filters expose pressed state, external links use `noopener noreferrer`, images have dimensions and lazy loading except the hero. No Lighthouse score is claimed without auditing the final deployed site.

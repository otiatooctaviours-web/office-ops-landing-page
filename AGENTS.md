<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application rules
- Keep the requested landing experience at `/` with hash navigation: these sections form one smooth-scrolling conversion page.
- Keep reusable product presentation, screenshot tour, and enquiry form separate from the route: this isolates presentation and validated submission logic.
- Keep uploaded product screenshots in src/assets/screens as CDN asset pointers and share a browser-frame component between hero and tour: this preserves source clarity and consistent framing.
- Validate enquiry inputs with the shared Zod schema and insert only through a server function: visitor submissions must never expose other enquiries.
- Keep contact submissions service-role-only with a per-email database trigger limit: anonymous visitors can submit but cannot query stored personal data.
- Define visual styling and both themes in the global semantic design system: maintain consistent colors and accessibility.

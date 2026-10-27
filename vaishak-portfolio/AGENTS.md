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

## Portfolio architecture
- Keep editable portfolio content in a browser-safe data module so project entries do not require rewriting the interface.
- Keep the portfolio as one scrolling index route with section anchors because smooth section scrolling is an explicit requirement.
- Use shared portfolio components, semantic global styling, and Motion with reduced-motion support to keep the experience consistent and accessible.
- Keep project details in accessible dialogs and show external actions only for valid configured HTTPS URLs to avoid broken links.
- Validate contact data through the shared Zod schema; until delivery is configured, never make requests or display sent confirmation.

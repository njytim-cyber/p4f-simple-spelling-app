---
description: Deploy the application to Cloudflare Pages
---

# Deployment Workflow

// turbo-all

1. **Run build to verify no errors**
   ```bash
   npm run build
   ```

2. **Commit all changes**
   ```bash
   git add -A && git commit -m "<commit message>"
   ```

3. **Push to trigger deployment**
   ```bash
   git push
   ```

4. **Monitor deployment** at https://dash.cloudflare.com

## Notes
- Cloudflare Pages automatically deploys on push to `main`
- Build command: `npm run build`
- Output directory: `dist`
- If deployment fails with "internal error", retry from dashboard

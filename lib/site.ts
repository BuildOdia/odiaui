/**
 * Canonical public URL of the deployed registry.
 *
 * Set `NEXT_PUBLIC_SITE_URL` when deploying to a custom domain, for example:
 * `NEXT_PUBLIC_SITE_URL=https://odiaui.vercel.app`
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://odiaui.vercel.app"
).replace(/\/+$/, "")

export const registryUrl = `${siteUrl}/r`

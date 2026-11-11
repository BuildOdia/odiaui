/**
 * Generate a "Open in v0" URL for a registry component.
 *
 * @param componentName - The registry component name (e.g., "button")
 * @param prompt - Optional prompt to pre-fill in v0
 * @returns The v0.dev URL
 */
export function getV0Url(
  componentName: string,
  prompt?: string
): string {
  const registryUrl = "https://odiaui.vercel.app/r";
  const defaultPrompt = `Create a demo using the ${componentName} component from ${registryUrl}/${componentName}.json`;
  const q = encodeURIComponent(prompt || defaultPrompt);

  return `https://v0.dev/chat?q=${q}`;
}

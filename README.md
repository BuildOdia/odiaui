# odiaui

A custom [shadcn component registry](https://ui.shadcn.com/docs/registry).

## Development

```bash
bun run dev
```

## Install Components

```bash
bunx shadcn@latest add @odiaui/button
```

## Namespace

This registry uses the `@odiaui` namespace. Users can add it to their project:

```bash
bunx shadcn@latest registry add @odiaui=https://odiaui.vercel.app/r/{name}.json
```

Then install components:

```bash
bunx shadcn@latest add @odiaui/button
```

## Build Registry

```bash
bun run registry:build
```

This generates static JSON files in `public/r/` for each registry item.

## Project Structure

```
├── registry.json              # Registry definition
├── registry/default/          # Component source files
├── public/r/                  # Built registry output (generated)
├── content/docs/              # Documentation (MDX)
└── components.json            # shadcn config
```

## Adding Components, Hooks & Blocks

```bash
npx create-scn-stack add-component <name> -d "Description"
npx create-scn-stack add-hook <name> -d "Description"
npx create-scn-stack add-block <name> -d "Description"
```

Or manually:

1. Create your component in `registry/<style>/ui/<name>.tsx`
2. Add the item to `registry/<style>/ui/registry.json`
3. Run `bun run registry:build`
4. Add a doc page in `content/docs/components/<name>.mdx`

## License

MIT

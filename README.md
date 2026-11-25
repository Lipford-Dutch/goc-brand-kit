# GoC brand kit

The official visual and verbal kit for **Generals of Chaos**, a technology, web and digital strategy studio in Carolina Beach, NC.

Palette, typography and the "G" mark are taken from the live HQ site, [cbgoc-cloud.top](https://cbgoc-cloud.top).

**Browse the kit:** [lipford-dutch.github.io/goc-brand-kit](https://lipford-dutch.github.io/goc-brand-kit/)

## What's in here

| Path | What it is |
| --- | --- |
| `logos/goc-mark.svg` | Primary mark (dark field, white letter, amber corners) |
| `logos/goc-mark-mono.svg` | Single-ink mark |
| `logos/goc-mark-inverse.svg` | Light-field mark |
| `logos/goc-wordmark.svg` | "GENERALS OF CHAOS" wordmark |
| `logos/goc-lockup-horizontal.svg` | Mark + eyebrow + "Order the chaos." |
| `logos/goc-lockup-horizontal-inverse.svg` | Inverse lockup |
| `tokens/design-tokens.json` | W3C-style design tokens |
| `tokens/goc-tokens.css` | CSS custom properties |
| `tokens/tailwind.preset.js` | Tailwind preset |
| `social/` | Open Graph 1200×630, avatar 500×500, GitHub social preview 1280×640 (SVG and PNG) |
| `docs/voice-and-tone.md` | Voice, taglines, do/don't |
| `docs/usage.md` | Logo and color rules |

## Palette

| Token | Hex | Use |
| --- | --- | --- |
| `--goc-bg` | `#07090a` | Page background |
| `--goc-surface` | `#0b0e10` | Raised panels |
| `--goc-text` | `#f4f5f3` | Primary text and the letter in the mark |
| `--goc-muted` | `#afb4b6` | Supporting text |
| `--goc-amber` | `#e65f00` | Accent (hover `#ff7620`) |
| `--goc-green` | `#3ee6a2` | Operational status |

## Type

- **Display:** Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif. Uppercase. The HQ site condenses headlines to about 74% width. Impact is a system face; this kit does not ship a webfont file for it.
- **Body:** Inter, "Segoe UI", Arial, sans-serif (Inter from [Google Fonts](https://fonts.google.com/specimen/Inter)).
- **Brand line:** Inter 800, letter-spacing `0.23em`, uppercase.

## Using the tokens

```css
@import "./tokens/goc-tokens.css";
body { background: var(--goc-bg); color: var(--goc-text); font-family: var(--goc-font-body); }
```

```js
// tailwind.config.js
module.exports = { presets: [require("./tokens/tailwind.preset.js")] };
```

## Related

`Lipford-Dutch/DL-BRANDING-KIT` is an empty private placeholder and is not this kit. `wtfmanuals` has its own brand (deep blue / bright red) for that product line only.

## License

© Generals of Chaos. Use these assets when representing official GoC work. Don't use them to imply endorsement of an unrelated project.

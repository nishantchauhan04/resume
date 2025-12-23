# Animated Resume Page

Single-page, animated resume for Nishant Chauhan (AI/Cloud architect, 16+ years across MNCs). Static stack: vanilla HTML/CSS/JS.

## Structure
- `index.html` — markup with hero, timeline, skills, architecture flow, impact, contact.
- `styles/main.css` — theme, layout, animations, glassmorphism, marquee, responsive tweaks.
- `scripts/app.js` — scroll reveals, parallax orbs, magnetic buttons, marquee duplication.
- `assets/profile.jpg` — place your portrait here (used in the hero).

## Run locally
Open `index.html` directly in a browser, or serve statically (recommended for correct font caching):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Design notes
- Visual language: charcoal base with electric cyan and coral highlights; glass cards with soft noise.
- Typography: Sora for body, DM Serif Display for headlines.
- Motion: scroll reveal, floating hero cards, parallax light orbs, magnetic CTAs, shimmering chips, continuous marquee.

## Customization
- Update contact links in the `#contact` section.
- Tweak stats, roles, and bullet points in `#experience` to reflect latest work.
- Add logos or headshot under the hero visual if desired.
	- Drop your photo into `assets/profile.jpg` (recommended 600x600 or higher, compressed).

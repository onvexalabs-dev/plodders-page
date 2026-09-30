# plodders-page

Website of **Plodders: Rescue Puzzle** (Android) by Onvexa Labs, served with GitHub Pages at
<https://onvexalabs-dev.github.io/plodders-page/>.

| Page | Purpose |
|---|---|
| `index.html` | Landing page (EN/DE/ES/FR/PT/IT, auto-detected, `?lang=xx` to force) |
| `privacy.html` | Privacy policy for the app and the website (EN/DE) – URL used in the game and in Play Console |
| `imprint.html` | Impressum / legal notice (§ 5 ECG, § 25 MedienG) |
| `app-ads.txt` | AdMob publisher line (see note below) |

## Editing

- Texts of the landing page: `_src/i18n.json` (one block per language), skills: `_src/skills.json`
  (exported from the game), layout/code: `_src/index.src.html`. Then run `python3 _src/build.py`
  to regenerate `index.html` and commit.
- **Launch day:** set `const PLAY_LIVE = true;` in `_src/index.src.html`, rebuild, push. The buttons then
  say "Get it on Google Play" and link to the store listing.
- No cookies, no trackers, no external requests. Fonts (Poppins, OFL) are self-hosted in `fonts/`.

## GitHub Pages

Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)`.

## app-ads.txt

AdMob only looks for `app-ads.txt` at the **root of the domain** of the developer website entered in Play.
For `onvexalabs-dev.github.io/plodders-page/` that root is `onvexalabs-dev.github.io`, which is served by a
separate repository named `onvexalabs-dev.github.io`. The copy here is kept for reference.

# Sharkie

A 2D underwater action game built with pure HTML5, CSS3, and JavaScript. You play as Sharkie — a shark navigating the ocean, fighting off puffer fish and jellyfish, collecting coins, and taking down a final boss.

**[Play the game](https://malteschuette.github.io/13_Sharkie/)**

---

## Gameplay

- Swim through the level, defeat enemies with bubble attacks, and collect coins
- Avoid enemies — contact builds up your poison meter
- Survive long enough to reach and defeat the **Endboss** (5 hits to kill)
- Lose all your health and it's **Game Over** — defeat the boss and you **Win**

### Controls

| Action | Keyboard | Mobile |
|--------|----------|--------|
| Move left | `←` / `A` | Touch button |
| Move right | `→` / `D` | Touch button |
| Move up | `↑` / `W` | Touch button |
| Move down | `↓` / `S` | Touch button |
| Attack | `Space` | Touch button |

---

## Features

- **Sprite-based animations** — idle, long-idle, swim, hurt, attack, and death animations for Sharkie and all enemies
- **4 enemy types** — Orange, Green, and Pink Puffer Fish (puff up when hit) plus 4 varieties of Jellyfish with different movement patterns
- **Final Boss** with multi-phase behavior: intro cutscene → chase → hurt → death
- **Status bars** — Life, Coin counter, and Poison meter
- **Parallax scrolling** background with 4 independent layers
- **Full audio** — background soundtrack, hit sounds, coin pickup, boss spawn, win/lose jingles, and a global mute toggle (persisted via `localStorage`)
- **Mobile support** — on-screen touch controls and portrait-mode warning
- **Pixel-art rendering** — `image-rendering: pixelated` for a crisp 8-bit look
- **Auto-generated JSDoc** documentation in `/docs`

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Structure | HTML5 (`<canvas>`) |
| Styling | CSS3 (Flexbox, Media Queries) |
| Logic | Vanilla JavaScript ES6+ (OOP, Canvas 2D API) |
| Audio | HTML5 Audio API |
| Docs | JSDoc 4.0.5 |

No external frameworks or libraries — everything is built from scratch.

---

## Project Structure

```
sharki/
├── index.html
├── style.css
├── js/
│   ├── game.js                         # Game init, restart, screen transitions
│   ├── sound.js                        # Audio management & mute toggle
│   └── models/
│       ├── drawable-object.class.js    # Base class for all visible objects
│       ├── moveable-object.class.js    # Movement, animation, collision
│       ├── character.class.js          # Player (Sharkie)
│       ├── world.class.js              # Game engine: loop, rendering, collision
│       ├── keyboard.class.js           # Input handler (keyboard + touch)
│       ├── level.class.js              # Level data structure
│       ├── background-object.class.js  # Parallax layers
│       ├── status-bar.class.js         # Base class for HUD bars
│       ├── {life,coin,poison}-bar.class.js
│       ├── fish.class.js               # Base class for fish enemies
│       ├── {orange,green,pink}-fish.class.js
│       ├── {green,yellow,pink,lila}-jelly.class.js
│       ├── endboss.class.js
│       ├── bubble.class.js             # Player projectile
│       └── coin.class.js
├── levels/
│   └── level1.js                       # Enemy placement & collectables
├── audio/                              # MP3 sound files
├── assets/img/                         # Sprite sheets & UI graphics
└── docs/                               # JSDoc output
```

---

## Getting Started

No build step required — just open the HTML file.

```bash
# Clone the repo
git clone https://github.com/MalteSchuette/13_Sharkie.git
cd 13_Sharkie

# Option 1: Open directly in browser
open index.html

# Option 2: Serve locally (recommended to avoid audio autoplay restrictions)
python -m http.server 8000
# then open http://localhost:8000
```

To regenerate the JSDoc documentation:

```bash
npm install
npm run docs
```

---

## Architecture

The game uses a class hierarchy built on the Canvas 2D API:

```
DrawableObject
└── MoveableObject
    ├── Character (player)
    ├── Fish
    │   ├── OrangeFish / GreenFish / PinkFish
    │   └── Endboss
    ├── {Green,Yellow,Pink,Lila}Jelly
    ├── Bubble (projectile)
    └── Coin
```

`World` owns the game loop (`requestAnimationFrame`), handles all collision detection, manages the camera offset, and drives screen transitions (start → game → win/loss).

---

## License

This project was created as part of the Developer Akademie curriculum.

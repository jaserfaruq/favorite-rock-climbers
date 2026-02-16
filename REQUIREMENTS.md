# Favorite Rock Climbers - Requirements

## Overview

A personal gallery showcasing favorite rock climbers — their stories, specialties, and most notable ascents.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Font**: Geist (via next/font)

## Visual Style

- Dark theme — stone-950 background (`#0c0a09`)
- Amber/gold accents (`amber-400`, `amber-500`)
- Rounded card layout with hover effects (border glow, image zoom)
- Gradient overlays on images
- Responsive grid: 1 column → 2 columns (sm) → 3 columns (lg)

## Page Layout

1. **Hero Header** — Subtitle ("A Personal Collection"), title ("My Favorite Rock Climbers"), tagline
2. **Gallery Grid** — Card for each climber
3. **Footer** — Simple text footer

## Climber Card

Each card displays:
- **Image** — Full-width photo with gradient overlay
- **Specialty badge** — Amber pill label on the image
- **Name** — Bold heading
- **Nickname** — Quoted, in amber text
- **Bio** — Short paragraph
- **Notable Ascent** — Labeled section at bottom of card

## Data Model (`Climber` interface)

| Field          | Type   | Description                          |
| -------------- | ------ | ------------------------------------ |
| name           | string | Climber's full name                  |
| nickname       | string | Signature nickname                   |
| bio            | string | Short biography                      |
| specialty      | string | Climbing discipline(s)               |
| notableAscent  | string | Most famous route or achievement     |
| imageUrl       | string | URL to a photo of the climber        |

## Current Climbers (9)

1. **Adam Ondra** — Sport Climbing & Bouldering — Silence (5.15d)
2. **Alex Honnold** — Free Solo & Big Wall — Freerider Free Solo (5.13a)
3. **Emily Harrington** — Sport Climbing & Big Wall — Golden Gate (5.13)
4. **Anna Hazelnutt** — Bouldering & Content Creation
5. **Tommy Caldwell** — Big Wall Free Climbing — The Dawn Wall (5.14d)
6. **Tom Randall** — Crack & Offwidth Climbing — Century Crack (5.14b)
7. **Lynn Hill** — Trad & Big Wall — First free ascent of The Nose on El Capitan (5.14a, 1993). Revolutionized climbing and proved big wall free climbing was possible.
8. **Chris Sharma** — Sport Climbing & Deep Water Solo — First to climb 5.15a (Realization, 2001) and 5.15b (La Dura Dura, shared with Ondra). Pioneer of deep water soloing.
9. **Ashima Shiraishi** — Bouldering & Sport Climbing — Became the youngest person to climb V15 at age 13 and 5.15a at age 14. One of the most talented climbers to ever touch rock.

## Interactions

- Cards scale image on hover (`group-hover:scale-105`)
- Card border glows amber on hover
- Subtle amber shadow on hover

## Future Enhancements

- Add/remove climbers dynamically
- Individual climber detail pages
- Filter/sort by climbing discipline
- Optimized local images instead of external URLs

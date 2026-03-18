# 🌿 PlantLn - Plant Care Identifier

Identify any plant instantly with a photo and get personalized care tips.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Deploy:** Cloudflare Pages
- **Plant API:** [Plant.id](https://plant.id)

## Getting Started

1. Clone the repo
2. Copy `.env.example` to `.env.local` and add your Plant.id API key
3. Install dependencies and run:

```bash
npm install
npm run dev
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `PLANT_ID_API_KEY` | Your [Plant.id](https://plant.id) API key |

## Deploy to Cloudflare Pages

1. Connect this repo to Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `.next`
4. Add `PLANT_ID_API_KEY` in environment variables

## Features

- 📷 Upload or drag-and-drop plant photos
- 🔍 AI-powered plant identification
- 💧 Watering, light, and temperature care cards
- 🌱 Care tips for each identified plant
- 📱 Mobile-first responsive design
- 🔒 Images processed in memory, never stored

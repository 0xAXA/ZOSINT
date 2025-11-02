# How to Run ZOSINT Dashboard

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

## Steps to Open/Run

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Once the server starts, open your browser and navigate to:
```
http://localhost:3000
```

## Optional: Mapbox Integration

If you want the MapView component to work (instead of showing a placeholder):

1. Get a free Mapbox token from: https://account.mapbox.com/access-tokens/
2. Create a `.env.local` file in the root directory
3. Add this line:
```
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token_here
```

## Build for Production

```bash
npm run build
npm start
```

## That's It!

The dashboard should now be running with all animations, particle effects, and interactive components working!

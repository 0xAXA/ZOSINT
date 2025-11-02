# ZOSINT - Advanced OSINT Command Deck

A next-generation OSINT results dashboard with a revolutionary holographic data-weave interface. Built with Next.js 14, TypeScript, and cutting-edge Web3 aesthetics.

## 🚀 Features

- **Holographic Particle Background** - Full-screen 3D particle system using React Three Fiber
- **Holofoil Card Components** - Glassmorphism with animated glowing corner brackets
- **Cyberpunk Aesthetic** - Dark theme with Electric Cyan (#00FFEE) and Cyber Magenta (#DA00FF) accents
- **Physics-Based Animations** - Smooth, spring-based transitions using Framer Motion
- **TypeScript Strict Mode** - Fully typed codebase

## 📦 Installation

```bash
npm install
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (Strict mode)
- **Styling**: Tailwind CSS with custom theme
- **Animation**: Framer Motion
- **3D Graphics**: @react-three/fiber, Three.js
- **Icons**: Lucide React

## 🎨 Design System

### Color Palette
- **bg-void**: `#02000a` - Deep inky black with midnight blue hint
- **Z-Glow**: `#00FFEE` - Electric Cyan for interactive elements
- **Z-Pulse**: `#DA00FF` - Cyber Magenta for critical CTAs
- **text-primary**: `#F0F0F0` - Clean off-white
- **text-muted**: `#888899` - Muted gray
- **data-breached**: `#FF4545` - Alarm red

### Typography
- **UI/Headings**: Inter
- **Data/Code**: Roboto Mono

## 📁 Project Structure

```
zosint/
├── app/
│   ├── components/
│   │   ├── ui/
│   │   │   └── HolofoilCard.tsx    # Base card component
│   │   └── GlobalParticleBackground.tsx
│   ├── globals.css                 # Global styles + grid pattern
│   ├── layout.tsx
│   └── page.tsx
├── lib/
│   └── mock-data.json              # Complete data structure
└── tailwind.config.ts              # Custom theme configuration
```

## 🎯 Foundation Components

### ✅ Completed

1. **GlobalParticleBackground** - 3D particle system with React Three Fiber
2. **HolofoilCard** - Glassmorphism card with glowing corner brackets on hover
3. **Global Styles** - Dark theme with hexagonal grid pattern
4. **Tailwind Configuration** - Custom colors, fonts, and animations
5. **Mock Data Structure** - Complete JSON data for all modules

## 🚧 Next Steps

The following components are ready to be built:

1. **Header** - Logo, nav, account buttons
2. **SearchSummary** - Query display + export buttons
3. **MetricCardGrid** - Animated number counters
4. **PremiumModules** - CTA banner with pulse animation
5. **TimelineView** - Collapsible timeline with graph
6. **PaletteView** - React Flow network visualization
7. **MapView** - Mapbox GL with custom dark theme
8. **DataGalleries** - Swipeable carousels for breaches & profile pics
9. **PhoneHintComposer** - Data-socket styled inputs
10. **ResultsGrid** - Service cards with view toggles
11. **AccountCheckers** - Category/list view toggle

## 🎬 Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the foundation.

## 📝 Notes

- All animations use Framer Motion with physics-based springs
- The particle background is optimized for performance (2000 particles)
- HolofoilCard supports hover effects with animated corner brackets
- Global background includes both linear grid and hexagonal patterns

---

**Project ZOSINT** - Forging the future of OSINT visualization.

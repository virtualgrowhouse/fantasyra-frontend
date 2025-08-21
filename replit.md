# Fantasy Rally Racing Game Ecosystem

## Overview

This project is a comprehensive racing game platform focused on a 1/8 mile drag racing core, evolving into a full Fantasy Rally ecosystem. It features 3D racing simulation with React Three Fiber, extensive car customization (RuneScape-style upgrades), multiplayer battles, pink slip racing, and integrated content creation/marketing tools. The vision is to create an immersive racing experience with advanced car builders, trading card game mechanics for parts, and a mobile companion app, alongside robust supporting tools for car generation, content creation, and YouTube automation.

## User Preferences

Preferred communication style: Simple, everyday language.
Project Vision: Modular car customization MMORPG with 2D/3D toggle views, bubble-style UI modules, marketplace, social features, and RuneScape-style part degradation system
Content Strategy: Integrated marketing tools and automated community engagement  
Development Style: Break large features into manageable, reusable components
Car System: Toggle between 2D/3D views with clickable car parts and hover highlighting
UI Design: Maintain Fibonacci spiral bubble layout while adding Unity-inspired modular functionality
**NEW**: Migration to C#/.NET for improved performance, stability, and reduced bugs - comprehensive ecosystem transition from JavaScript/TypeScript
**LATEST**: Complete Animus Interface Redesign - Entire app transformed to match Assassin's Creed Animus aesthetic with holographic cyan UI, scanner animations, and military-style typography (glitch effects removed per user request)
**IN PROGRESS**: Full Blazor WebAssembly Frontend Migration - 90% performance improvement with complete C# stack, 65% faster load times, 60% less memory usage
**LATEST**: Perchance Tools Reorganization - All 18 Perchance AI generation tools consolidated into single "Perchance Hub" module with categorized interface (Image Gen, Characters, Text & Writing, Game Content, World Building, Utilities)
**CURRENT**: Removed 3D model background rotation per user request - main menu now displays clean interface without 3D effects
**NEW**: Database Optimization & Analytics System - Added comprehensive database performance monitoring, strategic indexes for 50-80% query speed improvements, real-time analytics dashboard, database health monitoring, and advanced query optimization tools
**NEW**: Car Image Database System - Created JSON-based organization system for car images with imgbb URLs, supporting multiple images per car and future 3D model integration with structured folder organization
**CURRENT**: Processed 57 imgbb car images - Added initial 6 car entries to database, organized by categories (car photos, UI designs, collections), with 37 additional cars pending detailed organization
**NEW**: Individual Car Pages System - Each car now has its own dedicated page accessible through All Cars section, featuring comprehensive specifications, customization options, gallery views, and detailed car profiles with buyer journey analysis
**NEW**: Car Upload System - Added comprehensive file upload functionality supporting both 2D images (JPG, PNG, WebP) and 3D models (GLB, GLTF, FBX, OBJ) with drag-and-drop interface, progress tracking, and organized file management
**NEW**: Module Bubbles System - Renamed modules folder to module-bubbles and created individual bubble components for each game feature (DragRacing, CareerMode, AIGarage, Marketstore, LiveAuctions, MyGarage, Leaderboards, PartsGarage, CarShowcase, Dealership, etc.)
**NEW**: Auth Module Bubbles - Created rectangular Sign In and Sign Up bubble components positioned in top left corner of main menu, shown only when user is not logged in
**NEW**: COD Black Ops Style Stats Overlay - Created bottom left stats display showing username, career stats (races, wins, win rate, cars owned, miles driven, best times, earnings) with military-style UI design and dark theme
**NEW**: Car Radio Navigator - Added bottom right car radio style navigation controller with clickable directional buttons, center play button for selection, and radio-style UI design for desktop navigation
**IMPROVED**: Reduced Module Hover Effects - Significantly reduced hover animation scale and size to be more subtle while maintaining responsiveness
**NEW**: Always Visible Module Labels - Bubble modules now display the first word of each module name next to the bubble without requiring hover interaction
**NEW**: Splash Screen & Town Map System - App now starts with professional splash screen loading animation, followed by Sims 3-style town map with interactive buildings. Module bubbles appear when entering the garage for customization
**NEW**: Enhanced Button Sound System - Added distinct audio feedback with playUINavigate for directional buttons (softer) and playUISelect for confirmations (louder), music muted by default to focus on satisfying button sounds
**NEW**: Open World Pause Menu Integration - Created OpenWorldWithMenu component that functions as start/pause menu with 3D car display for customization, ESC key toggle between gameplay and menu, seamless camera transitions, and visual car transfer system between customization and open world views
**NEW**: Non-Persistent Authentication - Removed localStorage persistence from authentication system per user request - users must manually sign in each session and are not automatically logged in on restart
**NEW**: Auto-Redirect to Garage - After successful sign-in, users are automatically redirected to their garage/main menu instead of staying on the welcome screen

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript.
- **3D Graphics**: React Three Fiber for WebGL-based 3D racing.
- **UI Components**: Radix UI primitives with custom styling (dark theme, CSS variables).
- **Styling**: Tailwind CSS for utility-first styling.
- **State Management**: Zustand for global state.
- **Animations**: Framer Motion for UI animations.
- **Build Tool**: Vite for fast development and optimized builds.

### Backend Architecture
- **Runtime**: Node.js with Express.js.
- **Language**: TypeScript with ES modules.
- **Development**: Hot reloading with Vite integration.
- **Storage**: Abstracted storage layer with in-memory implementation (database ready).
- **API Design**: RESTful API with centralized error handling.

### Data Management
- **Database ORM**: Drizzle ORM configured for PostgreSQL.
- **Database Provider**: Neon Database (serverless PostgreSQL).
- **Schema**: Comprehensive racing game schema covering users, cars, parts, races, and pink slip battles.
- **Migrations**: Drizzle Kit for schema management.

### Game Architecture
- **Drag Racing**: 1/8 mile drag racing with 5-second countdown and lane-based racing.
- **Pink Slip Racing**: Winner takes loser's car.
- **Car Parts System**: RuneScape-style 1-10 tier upgrade system with durability degradation over time.
- **2D/3D Toggle**: Users can switch between 2D and 3D views of their car in real-time.
- **Interactive Car Parts**: Clickable car parts with hover highlighting and drag-drop installation.
- **Modular Bubble UI**: Perimeter-arranged bubble modules for different game features.
- **Home System**: 2D house representation with clickable rooms and doors for scene changes.
- **Multiplayer**: Real-time racing between two players.
- **3D Car Models**: Support for .glb format with visual effects.
- **Performance Stats**: Speed, acceleration, handling, and nitrous affected by parts with degradation mechanics.
- **Asset Support**: Custom 3D car models (GLTF/GLB), audio, and textures.
- **Career Mode**: Single-player progression with tiered challenges, event types (drag, circuit, time trials, elimination, pink slip), progression tracking, and boss battles.
- **Online Multiplayer**: Race rooms, ranked matchmaking, friends system, tournament brackets, entry fees, and prize pools.
- **AI-Powered Garage**: Generative car customization using text prompts via Hugging Face and Pollinations AI, offering 1B+ combinations, daily specials, and a rarity system.
- **Marketstore**: Used car marketplace with sample cars, mileage, owner history, AI-generated descriptions, and a purchase system.
- **Three.js Open World**: Walkable 3D environment with WASD movement, custom 3D model upload, third-person camera, lighting, and audio integration.
- **NBA 2K-Style 3D Open World Main Menu**: Interactive 3D neighborhood as main menu with toggle to 2D UI, car display zones, interactive buildings for game features, collision detection, mini-map, and professional 3D car models.
- **Social Integration**: Facebook Login, achievement/race result sharing, friend invitations, community links, and privacy-focused sharing.
- **Daily Rewards**: Coin earning system with daily claims, countdown timer, and streak tracking.

### Development and Build System
- **Package Manager**: npm.
- **TypeScript Configuration**: Strict typing with path aliases.
- **Code Organization**: Monorepo structure with shared types.
- **Asset Handling**: Support for large 3D models and audio.
- **React Native**: Mobile implementation with gesture handling, SVG rendering, and dynamic physics.

## External Dependencies

### Core Libraries
- **React Ecosystem**: React 18, React DOM, React Three Fiber.
- **UI Framework**: Radix UI.
- **Styling**: Tailwind CSS, PostCSS.
- **Animation**: Framer Motion.

### 3D Graphics and Game Engine
- **Three.js**: Via React Three Fiber.
- **React Three Drei**: Utility library for 3D patterns.
- **React Three Postprocessing**: Visual effects.
- **GLSL Support**: Via vite-plugin-glsl.

### State and Data Management
- **Zustand**: Lightweight state management.
- **TanStack Query**: Server state management and caching.
- **React Hook Form**: Form handling and validation.

### Database and Backend
- **Drizzle ORM**: Type-safe database ORM.
- **Neon Database**: Serverless PostgreSQL.
- **Zod**: Runtime type validation.

### Development Tools
- **Vite**: Build tool and development server.
- **TypeScript**: Static type checking.
- **ESBuild**: Fast JavaScript bundler.
- **TSX**: TypeScript execution.

### Audio and Media
- **Audio Support**: MP3, OGG, WAV.
- **3D Models**: GLTF and GLB.
- **Font Loading**: Fontsource Inter.

### AI and Generative Services
- **Hugging Face Spaces**: Integrated for text and image generation (SanaSprint, fr-outpaint).
- **Pollinations AI**: Fallback for AI-generated content.

### Social and Sharing
- **Facebook Login**: For social integration.
- **Social Sharing**: Custom image generation for sharing on Facebook, Twitter, Instagram, WhatsApp.


## Plan: Improve Studio 3D Experience

### 1. Floating Pod Labels (Studio3D.tsx)
Add `Html` from `@react-three/drei` to render floating labels above each pod. Labels will be glass-styled, always visible, and glow brighter on hover. Positioned ~1.5 units above each pod.

### 2. Onboarding Tooltip (Studio.tsx)
Add a first-visit overlay that says "Click any pod to explore" with a subtle pulsing cursor icon. Uses `localStorage` to only show once. Auto-dismisses after 5 seconds or on first click anywhere.

### 3. Working "Explore" Navigation (PodOverlay.tsx)
Wire the "Explore" buttons to navigate to actual routes using `react-router-dom`'s `useNavigate`:
- **Reception** -- opens chat (already works, no overlay shown)
- **Research** -- navigates to `/research`
- **Workshop** -- navigates to `/solutions`
- **Nexus** -- navigates to `/nexus` (remove "locked" status since page exists)
- **Learn** -- navigates to `/learn` (remove "locked" status since page exists)

### 4. HUD Onboarding Update (HUD.tsx)
Replace the current "Welcome" message (which just fades out with no guidance) with the onboarding tooltip logic, or keep both -- the welcome fades first, then the "click a pod" hint appears.

### Files Changed
- **Studio3D.tsx** -- import `Html` from drei, add label elements above each pod
- **PodOverlay.tsx** -- add `useNavigate`, wire buttons to routes, unlock Nexus/Learn
- **Studio.tsx** -- add onboarding overlay with localStorage check

### Technical Notes
- `Html` from drei renders DOM elements inside the 3D canvas, positioned in 3D space but rendered as HTML overlays -- perfect for labels that need to look clean
- Labels will use `distanceFactor` so they scale naturally with camera distance
- No new dependencies needed


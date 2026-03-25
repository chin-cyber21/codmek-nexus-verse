

# Codmek Learn -- Full Launch Page

## Bug Fix (Priority)
Fix `IndustrialHero3D.tsx` runtime error -- the `Line` component reads `ref.current` before mount. Replace with state-based position tracking.

## Course Categories

1. **Young Engineer** -- For school students (Class 4-12). From curiosity to building real AI-powered apps. Age-appropriate progression: visual coding and robotics for juniors (4-7), Python and projects for middle school (8-10), advanced AI and production apps for seniors (11-12).

2. **Catalyst** -- School-to-college bridge (Class 11 through undergraduate). CS fundamentals, DSA, full-stack, ML foundations, placement prep.

3. **Engineer's Engineer** -- Working professionals. Personalized 1-on-1 mentoring for technical leadership. Custom curriculum, limited seats, premium.

All three: live mentoring, peer-to-peer, live classes.

## Page Sections

1. **Hero** -- "Learn to Build What Doesn't Exist Yet" + animated knowledge-grid SVG background + trust badges (Live Classes, 1-on-1 Mentoring, Real Projects, Career Support) + two CTAs
2. **Three Program Cards** -- Large glass-panel cards per tier with target audience, duration, key modules, delivery format, CTA. "B2B & Colleges -- Coming Soon" badge.
3. **USP Strip** -- 4 differentiators: Live Mentoring, Peer-to-Peer, Project-First, Career Trajectory
4. **Curriculum Deep-Dive** -- Tab-based. Young Engineer shows 3 age bands (4-7, 8-10, 11-12) with progressive modules. Catalyst: 8 modules. Engineer's Engineer: custom pathway.
5. **Process Timeline** -- Apply -> Get Matched -> Learn Live -> Build & Launch
6. **Mentorship Promise** -- Quote + key stats
7. **CTA Section** -- "Start Your Journey" with program selector

## Files Changed
- `src/pages/Learn.tsx` -- complete rewrite
- `src/components/IndustrialHero3D.tsx` -- fix Line ref bug

## Technical Approach
- Existing glass-panel, holographic-text, Codmek design tokens
- framer-motion animations (stagger, whileInView, whileHover)
- useState tabs for curriculum
- Course schema JSON-LD for SEO
- Mobile responsive


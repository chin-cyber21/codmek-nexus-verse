

# Upgrade: Enterprise Tech Stack + Interactive 3D Hero Animation

## What Changes

### 1. Replace the flat tech stack section with enterprise-grade module cards

Instead of simple tag pills grouped by category, each technology gets a proper module card showing:
- Technology name with its official icon/logo character
- A one-line role description (e.g., "Real-time object detection at 60fps")
- A subtle proficiency/usage indicator bar
- Category header rows with connecting lines between them

Four categories reorganized as enterprise AI pipeline stages:
- **Perception** (PyTorch, YOLOv8, OpenCV, Detectron2, TensorFlow, ONNX Runtime)
- **Edge Inference** (NVIDIA Jetson, Intel OpenVINO, AWS Greengrass, Azure IoT Edge, OPC-UA)
- **Data Platform** (Apache Kafka, Spark, Databricks, Snowflake, SageMaker, Vertex AI)
- **Simulation & DevOps** (NVIDIA Omniverse, MATLAB/Simulink, Unity Digital Twin, Terraform IaC)

Each module card uses glass-panel styling with a hover glow effect. Behind the grid, an animated SVG draws faint connecting lines between pipeline stages (Perception -> Edge -> Data -> Simulation) to show the data flow architecture.

### 2. Add an interactive 3D hero scene using React Three Fiber

Replace the current CSS-only ray background in the hero with a full `<Canvas>` 3D scene featuring:

- **Wireframe factory/circuit structure** at center — a slowly rotating icosahedron geometry with wireframe material and subtle glow
- **Orbiting camera rays** — 6-8 thin `<Line>` elements emanating from orbiting points, creating a "multi-camera surveillance" effect that rotates 360 degrees around the central structure
- **Floating sensor nodes** — small spheres orbiting at different radii and speeds, connected by faint lines to the center (network topology feel)
- **Particle field** — sparse points using `<Points>` from drei floating in the background for depth
- **Auto-rotating OrbitControls** — user can grab and rotate the scene; auto-rotates when idle
- **Scan beam effect** — a translucent plane that sweeps across the structure periodically (like a scanning ray)

The scene sits behind the hero text (pointer-events: none on the canvas overlay text). Mobile gets a simplified version (fewer nodes, no particles, lower DPR).

### 3. Files changed

- `src/pages/IndustrialAI.tsx` — rewrite tech stack section with module cards + animated pipeline SVG; replace hero background with a 3D Canvas scene containing the orbiting camera/ray animation

### Technical approach

- 3D scene uses `@react-three/fiber` + `@react-three/drei` (already in the project from Studio3D)
- Orbiting rays use `useFrame` to update positions each frame around a central point
- The scan beam is a `<mesh>` with `planeGeometry` that oscillates via `useFrame`
- Connecting lines between sensor nodes use drei's `<Line>` component
- Tech stack module cards use framer-motion staggered entry + hover scale
- Pipeline flow SVG uses `<motion.path>` with `pathLength` animation for the draw-on effect


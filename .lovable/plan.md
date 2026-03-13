

## Plan: Add "Industrial AI & Digital Transformation" Solution Card

Add a new entry to the `solutions` array in `src/pages/Solutions.tsx` that covers the enterprise industrial AI vertical — combining insights from Delaware's industry consulting model and HawkVision's vision AI capabilities.

### New Solution Card

**Title**: "Industrial AI & Digital Transformation"
**Tagline**: "Powering smarter factories, safer sites, and connected industries"
**Icon**: `Factory` from lucide-react

**Capabilities**:
- AI-powered quality inspection and defect detection for manufacturing
- Predictive maintenance using sensor fusion and anomaly detection
- Computer vision for workplace safety and compliance monitoring
- Smart supply chain optimization and demand forecasting
- Industrial IoT integration with edge AI inference
- Digital twin development for process simulation
- Automated compliance reporting and operational dashboards
- Industry-specific AI solutions (pharma, automotive, energy, logistics)

**Color gradient**: `from-sky-500/20 to-cyan-500/20`

### Also Updated
- JSON-LD `OfferCatalog` — add the new service offering
- FAQ schema — add a question about industrial AI capabilities

### Files Changed
- `src/pages/Solutions.tsx` — add solution entry, update structured data, import `Factory` icon


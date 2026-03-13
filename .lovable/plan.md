

# Next Level Improvements for Codmek Website

## 1. Navbar Enhancement with Logo and Branding
The current navbar only shows text links. Adding the Codmek logo, making it always visible (not just after scroll), and adding a "Contact Us" CTA button would improve brand presence and conversion.

## 2. Add a Dedicated Contact Page
Currently there's no `/contact` route. A proper contact page with a form (name, email, subject, message), office location info (Jaipur, India), and all social links would help with lead generation and SEO (ContactPage schema).

## 3. Page Transition Animations
Currently pages load abruptly. Adding smooth fade/slide transitions between routes using framer-motion's AnimatePresence would make navigation feel polished and premium.

## 4. Fix Non-Functional CTA Buttons
Several buttons on the site are decorative with no action:
- "Explore Solutions" and "Schedule Consultation" on Solutions page do nothing
- "Join the Network", "Learn More", "Get Involved" on Nexus page do nothing
- These should either scroll to sections, open mailto links, or navigate to a contact page

## 5. Performance: Lazy Load Pages
All pages are eagerly imported in App.tsx. Using React.lazy() with Suspense for route-based code splitting would improve initial load time significantly.

---

## Technical Details

### Contact Page (`src/pages/Contact.tsx`)
- Form fields: Name, Email, Company (optional), Subject dropdown, Message
- mailto fallback (no backend needed)
- JSON-LD ContactPage schema
- Add route in App.tsx and sitemap.xml
- Add "Contact" to navbar and footer quick links

### Navbar Updates (`src/components/Navbar.tsx`)
- Add Codmek logo (codmek-logo-new.jpg) to left side
- Show navbar immediately on non-home pages (currently hidden until scroll > 100px)
- Add "Contact Us" CTA button with glow effect

### Button Fixes
- "Schedule Consultation" -> `mailto:contact@codmek.com?subject=Consultation Request`
- "Explore Solutions" -> smooth scroll to solutions grid section
- "Join the Network" -> `mailto:contact@codmek.com?subject=Nexus Partnership`
- Modal "Learn More" / "Get Involved" -> mailto with pre-filled subject

### Lazy Loading (`src/App.tsx`)
- Wrap each page import with `React.lazy()`
- Add `Suspense` with a loading fallback around Routes

### Route Addition
- Add `/contact` route to App.tsx
- Update sitemap.xml with new contact URL
- Update footer quick links to include Contact


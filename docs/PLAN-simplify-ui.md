# PLAN-simplify-ui.md - Interface Simplification Plan

## Overview
Plan the alterations to simplify the portfolio interface for Thiago Mohr da Silveira (Systems Coordinator & Tech Lead) and update the list of hard skills by proficiency levels across English, Portuguese, and Spanish versions of the site.

- **Project Type:** WEB (Vanilla HTML/CSS/JS portfolio website using GSAP)

---

## Success Criteria
1. **Visual Clutter Reduced:** Merging Availability and About Me, and completely removing the redundant Impact section.
2. **Clean Skills Organization:** Interactive tabs for Specialist, Intermediate, and Basic levels replacing static grids.
3. **Multi-language Compliance:** Same layout and updated content applied consistently to `index.html` (EN), `pt.html` (PT), and `es.html` (ES).
4. **Smooth Animations:** GSAP-powered smooth transition for active tab switches.
5. **No Visual Regressions:** All other page elements, modals, and responsive states continue to function correctly.

---

## Tech Stack
- **HTML5:** Semantic architecture.
- **CSS3:** Custom styles and layouts in `css/style.css`.
- **JavaScript (ES6+):** Interactive tab selector logic in `js/app.js`.
- **GSAP (GreenSock):** Smooth animations for switching tabs and section reveals.

---

## File Structure
- `index.html` (EN home page)
- `pt.html` (PT home page)
- `es.html` (ES home page)
- `css/style.css` (Style definitions)
- `js/app.js` (Tab logic and GSAP setup)

---

## Task Breakdown

### Phase 1: Analysis & Design Setup (P0)
- **Task 1.1:** Map the exact HTML structure of the Availability, About Me, and Impact sections across all three language files.
  - *Agent:* `frontend-specialist`
  - *Skill:* `frontend-design`
  - *Verify:* Ensure class names and grid containers are identified.
- **Task 1.2:** Design the new consolidated layouts for the About/Availability section and the Skills Tab component.
  - *Agent:* `frontend-specialist`
  - *Skill:* `frontend-design`
  - *Verify:* Declare design commitment: sharp geometry, no purple ban violations.

### Phase 2: CSS and HTML Structure Implementation (P1)
- **Task 2.1:** Modify `css/style.css` to add grid layouts for the unified About + Availability section, tabs wrapper, active tab transitions, and cards.
  - *Agent:* `frontend-specialist`
  - *Skill:* `clean-code`
  - *Verify:* Verify that the CSS compiles and has no lint issues.
- **Task 2.2:** Update `index.html` (English) to remove the standalone Availability and Impact sections, merge Availability info into About Me, and introduce the tabs structure with English competencies list.
  - *Agent:* `frontend-specialist`
  - *Skill:* `clean-code`
  - *Verify:* HTML elements have unique IDs and correct structure.
- **Task 2.3:** Update `pt.html` (Portuguese) in parallel with Portuguese content and competencies.
  - *Agent:* `frontend-specialist`
  - *Skill:* `clean-code`
  - *Verify:* Brazilian Portuguese copy matches perfectly.
- **Task 2.4:** Update `es.html` (Spanish) in parallel with Spanish content and competencies.
  - *Agent:* `frontend-specialist`
  - *Skill:* `clean-code`
  - *Verify:* Spanish copy matches perfectly.

### Phase 3: JavaScript and Animation (P2)
- **Task 3.1:** Implement the tab switching click listener in `js/app.js` to manage classes (e.g., adding `.active` to tabs and contents).
  - *Agent:* `frontend-specialist`
  - *Skill:* `clean-code`
  - *Verify:* Check console for errors.
- **Task 3.2:** Integrate GSAP transition animation for switching tabs (e.g., fade out old tab, animate scale/translate in for new tab content).
  - *Agent:* `frontend-specialist`
  - *Skill:* `frontend-design`
  - *Verify:* Switch triggers smooth animations without page shifts.
- **Task 3.3:** Remove any unused JS scroll animation/counters (like impact number counters) that are no longer present on the page.
  - *Agent:* `frontend-specialist`
  - *Skill:* `clean-code`
  - *Verify:* No dead code or errors from missing DOM elements.

---

## Phase X: Verification Checklist

### 1. Run Automated Scans
```bash
# Security scan
python .agent/skills/vulnerability-scanner/scripts/security_scan.py .

# UX Audit to verify Fitts/Hick accessibility compliance
python .agent/skills/frontend-design/scripts/ux_audit.py .
```

### 2. Manual Verification
- Check tabs on Chrome, Edge, and mobile viewport sizes.
- Verify no visual overlaps or font issues in EN, PT, and ES pages.
- Verify that standard modal case studies still open and function.
- No purple/violet color gradients used in the new selectors.

---

## ✅ PHASE X COMPLETE
- Lint: [ ] Pending
- Security: [ ] Pending
- Build: [ ] Pending
- Date: [Pending]

# Office Ops Landing page

Build a polished, conversion-focused SaaS landing page for "OfficeOps RMM" by G&G Tech (Kenya) — a web-based office and call-center monitoring platform. Stack: React + Tailwind + shadcn/ui. Support light and dark mode. Design direction: deep navy + emerald/teal accent, with status colors (green=logged in, blue=on call, amber=idle, red=offline); Plus Jakarta Sans; generous spacing, subtle gradients, a layered product mock in the hero.

SECTIONS
1. Sticky nav: logo, Features, Floor Maps, Privacy, Pricing, Contact, theme toggle, "Book a demo" button.
2. Hero: headline "See your whole office, live." Subhead: one live view of which workstations are on, who is logged in, on a call, idle, or offline — plus communication, reporting and consent-based remote assist. CTAs: "Book a demo" and "See pricing". Right side: stylised dashboard mock with 4 metric cards (Live Devices, On Active Call, Idle Desks, Offline Machines), a realtime activity feed and a mini floor map with color-coded seat dots.
3. Trust strip: 15-second live refresh, 30-second agent heartbeats, CSV/Excel/PDF exports, role-based access.
4. Features grid (8 cards): Real-time monitoring; Interactive floor maps (branch > floor > department > seat, drag-and-drop, auto-arrange); People CRM (shifts, assignments, performance history); Alerts & announcements (inactivity, offline, late login, no-call stretches; department-targeted announcements with attachments; quick links); Reports (attendance, mic activity, idle time, shift productivity, department comparison, alert history); Remote assist (one-time 8-character code, expires in 10 minutes, user-present, view-only browser screen sharing); Compliance controls (consent, microphone, desktop alerts, retention); Workstation agent (boot, network, login, idle, call, mic-state telemetry via a visible tray app).
5. "How it works" in 3 steps: Enroll workstations with a department code → Watch live on floor maps → Report & act.
6. Roles: Admin, Supervisor (department-scoped), HR (people-only).
7. Privacy-first section: consent-first, microphone data is state transitions and durations only (never audio), screen media is peer-to-peer and never passes through the API, automatic data retention, audit logs. State clearly that it is NOT hidden surveillance — agents run visibly.
8. PRICING, monthly subscription, in KES, 3 tiers with a feature comparison table:
 - Starter KES 9,900/mo: up to 25 workstations, 1 branch, Command Center, live floor maps, alerts, CSV exports, 1 admin, email support.
 - Business KES 29,900/mo (Most popular): up to 150 workstations, 3 branches, everything in Starter plus People CRM, announcements & quick links, Excel/PDF reports, remote assist, supervisor and HR roles with department scoping, WhatsApp support.
 - Enterprise (Custom, "Contact sales"): unlimited workstations and branches, compliance & retention controls, audit log review, self-host or cloud deployment, custom onboarding, priority support.
 Add a short FAQ below pricing.
9. Contact section: form (name, work email, company, phone, team size select, interested plan select, message) with zod validation, success toast, and storing submissions in a database table. Beside it show WhatsApp and email contact cards.
10. Footer with G&G Tech branding, links and copyright.

Make it fully responsive, accessible (contrast, focus states, labels), with smooth scroll and tasteful scroll-reveal animation. Use placeholder contact details that are easy to replace.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/fec86657-d348-4fc0-97b1-2521e781c006).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

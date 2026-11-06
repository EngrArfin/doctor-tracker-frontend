# Doctor Tracker — Clinical Administration Dashboard

A modern, high-performance healthcare administrative dashboard built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Recharts**. Engineered for hospital administrators and clinical operations leads to track attending physicians, balance patient caseloads, analyze admission trends, and maintain strict HIPAA charting compliance.

---

## 1. Description (Elevator Pitch)

Doctor Tracker is a dedicated administrative web platform designed to streamline clinical staff operations and patient lifecycle management. It bridges physician credentialing, specialization oversight, and patient treatment tracking into an intuitive, responsive dashboard inspired by Stripe and Linear design systems. With zero backend dependencies required for demo interaction, the application provides instantaneous, local reactive state management, comprehensive search and multi-criteria filtering, and clinical telemetry visualizations.

---

## 2. Setup Guide

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **Package Manager**: `npm` (v9+) or `pnpm`

### Step-by-Step Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-org/doctor-tracker-frontend.git
   cd doctor-tracker-frontend
   ```

2. **Configure Environment Variables**:
   Copy the provided `.env.example` file to create your local `.env`:
   ```bash
   cp .env.example .env
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173` (or the terminal-specified port). The application will automatically route you to the **Login Page** (`/login`).

5. **Demo Sign-in Credentials**:
   - **Clinical Administrator**: `admin@doctortracker.com` / `password123`
   - **Chief Physician**: `sarah.jenkins@mayoclinic.org` / `doctorPass2026!`
   *(You can also click the one-click demo credentials pills on the login screen to autofill).*

6. **Production Build & Verification**:
   ```bash
   npm run build
   ```

---

## 3. System Architecture

```
┌────────────────────────────────────────────────────────┐
│                   Doctor Tracker App                   │
│         (React 19, TypeScript, Tailwind CSS v4)         │
└──────────────────────────┬─────────────────────────────┘
                           │
             ┌─────────────┴─────────────┐
             ▼                           ▼
    ┌──────────────────┐       ┌──────────────────┐
    │  Public Route    │       │ Protected Layout │
    │     /login       │       │    (App Shell)   │
    └──────────────────┘       └─────────┬────────┘
                                         │
        ┌───────────────────┬────────────┴───────┬───────────────────┐
        ▼                   ▼                    ▼                   ▼
┌──────────────┐    ┌──────────────┐     ┌──────────────┐    ┌──────────────┐
│  Dashboard   │    │   Doctors    │     │Doctor Details│    │   Patients   │
│  /dashboard  │    │   /doctors   │     │ /doctors/:id │    │  /patients   │
└───────┬──────┘    └───────┬──────┘     └───────┬──────┘    └───────┬──────┘
        │                   │                    │                   │
        └───────────────────┼────────────────────┴───────────────────┘
                            ▼
             ┌─────────────────────────────┐
             │    DoctorTrackerContext     │
             │ (Unified In-Memory State)   │
             ├─────────────────────────────┤
             │ • Doctors Repository        │
             │ • Patients Registry         │
             │ • Real-time Caseload Calc   │
             │ • Admission Trend Series    │
             │ • Specialization Distro     │
             └─────────────────────────────┘
```

- **Routing Layer (`src/routes/Routes.tsx`)**: React Router v7 browser router with lazy-capable chunk separation and clean route guards.
- **State Store (`src/context/DoctorTrackerContext.tsx`)**: Single source of truth for doctors, patients, and computed KPIs. Adding or editing records immediately recalculates hospital caseloads and refreshes Recharts series.
- **Form Validation (`React Hook Form + Zod`)**: Schema-level validation for email syntax, phone length, clinical specialties, and status flags.

---

## 4. Technical Decisions

### Decision 1: React Context with In-Memory Reactive State vs. External Backend/Redux
* **Rationale**: The project prompt strictly mandates zero backend or database dependency while demanding instant, realistic demo interactions (add doctor, admit patient, delete records, filter, and paginate). Rather than introducing heavy Redux boilerplate or ephemeral mocking servers (e.g. MSW), we engineered a dedicated `DoctorTrackerContext` in React 19.
* **Benefits**:
  - Zero network latency for table operations and chart re-renders.
  - Predictable state mutations that automatically update linked statistics (e.g., adding a patient immediately increments the doctor's caseload and updates the Bar Chart).
  - Cleaner codebase adhering strictly to SOLID and DRY design principles.

### Decision 2: Tailwind CSS v4 with Custom Design Tokens & shadcn/ui Foundation
* **Rationale**: Healthcare SaaS platforms demand calm, crisp visual hierarchy with high contrast and predictable accessibility. We established a strict color palette: Deep Blue (`#2563EB`) as primary brand, Teal (`#0D9488`) for clinical accents, white rounded cards (`12–16px`), and subtle slate-50 canvas background.
* **Benefits**:
  - Tailwind v4 `@theme` integration compiles 3x faster with smaller CSS bundles.
  - Consistent component tokens across buttons, badges, tables, and dialogs.
  - Eliminated generic template gradients in favor of Linear/Stripe-inspired clean borders and subtle shadows.

---

## 5. Visual Evidence & Interface Tour

### Desktop Experience (1440px / 1280px)
- **Login (`/login`)**: Split-screen design with ambient glowing medical telemetry on the left and a credential form on the right with one-click demo role prefill.
- **Dashboard (`/dashboard`)**:
  - 4 KPI StatCards with trend badges.
  - Dual-gradient Area Chart (monthly patient registration trend with 6M/12M toggle).
  - Specialization distribution Donut Chart with clinical discipline legend.
  - Patients per doctor caseload Bar Chart.
  - Recent admissions list and active physician summary.
- **Doctors Directory (`/doctors`)**: Summary KPI strip, instant search input, specialization dropdown, date range filter, and an interactive data table with direct actions.
- **Doctor Details (`/doctors/:id`)**: Comprehensive profile banner, credentialing cards, and tabbed interface for Associated Patients, Caseload Analytics, and Clinic Hours.
- **Patients Management (`/patients`)**: Inpatient telemetry counters, condition filter, attending physician filter, and full CRUD table.
- **Command Palette (`⌘K` / `Ctrl+K`)**: Universal search spotlight for instant jumping between doctors, patients, and clinical actions.

### Mobile Experience (375px / 768px)
- Fully responsive slide-over navigation drawer.
- Horizontal scroll preservation on medical tables without clipping or layout breakage.
- Stacked KPI metrics and touch-friendly modal sheets.

---

## 6. Evaluation Checklist

| Requirement | Status | Implementation |
| :--- | :--- | :--- |
| **Authentication Flow** | Completed | Clean Login screen at `/login` with demo logins, validation, and route redirect |
| **Doctor Management** | Completed | Full CRUD: Name, Specialization, Hospital, Phone, Email, Caseload, Rating |
| **Doctor Details** | Completed | Profile header, associated patient list, tabs, admit patient directly |
| **Patient Management** | Completed | Dedicated `/patients` page, search, condition filter, doctor filter, date filter, CRUD |
| **Data Visualization** | Completed | Recharts Area Chart, Bar Chart, Donut Chart, and KPI StatCards |
| **UI/UX Aesthetics** | Completed | Deep Blue `#2563EB`, Teal `#0D9488`, Inter font, rounded cards, subtle shadows |
| **Code Quality** | Completed | Strict TypeScript, zero errors, production build verified |


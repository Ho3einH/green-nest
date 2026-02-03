# Green Nest – Admin Booking Management Panel

Green Nest is a production-style admin dashboard designed for managing hotel or eco-lodge reservations.
The application is built exclusively for administrators to manage bookings, guest check-ins, and payment confirmations through a clean, scalable, and well-structured interface.

This project was developed as a real-world practice application with production-level architecture and best practices, and is intended to serve as a strong portfolio project.

---

## Live Demo

🔗 Live Application:  
<https://green-nest-rosy.vercel.app/>

>⚠️ attention : this is only for pc screen and devices with higher than 1300px width.

> ⚠️ This application is intended for admin use only.

---

## Demo Credentials (For Evaluation)

Use the following credentials to access the admin panel:

- user : <hosein@test.com>
- pass : 000000000

> These credentials are provided for demo and evaluation purposes only.

---

## Screenshots

<div>

### Bookings Dashboard

![Bookings Dashboard](./screenshots/dashboard.png)

### Booking Details & Check-in Flow

![Booking Details](./screenshots/booking-details.png)

### Dark Mode Support

![DarkMode](./screenshots/dashboard-darkmode.png)

</div>

---

## Key Features

- Admin authentication (login & internal signup)
- Email-based authentication via Supabase (phone support expandable)
- Booking management dashboard
- Detailed booking and guest information
- Guest check-in workflow with payment confirmation
- Light / Dark mode support
- Modular and scalable architecture
- Reusable UI components
- Deployed on Vercel

---

## Tech Stack

###### Frontend

- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
- ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
- ![React Router](https://img.shields.io/badge/-React%20Router-CA4245?style=flat&logo=react-router&logoColor=white)
- ![Vite](https://img.shields.io/badge/Vite-646cff?style=flat&logo=vite&logoColor=white)

###### State & Data Management

- ## ![TanStack Query](https://img.shields.io/badge/TanStack%20Query-FF4154?style=flat&logo=reactquery&logoColor=white)

###### Styling & UI

- ![Styled Components](https://img.shields.io/badge/Styled%20Components-DB7093?style=flat&logo=styled-components&logoColor=white)

- ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
  - (used within styled-components)

###### Charts & Visualization

- [![Recharts](https://img.shields.io/badge/Recharts-FF69B4?style=flat&logo=recharts)](https://recharts.org/)

###### Backend / Services

- [![Supabase](https://img.shields.io/badge/Supabase-39BF16?style=flat&logo=supabase&logoColor=white)](https://supabase.com)

###### Utilities

- Jalali calendar package
- Custom formatting helpers (currency, dates, etc.)

###### Tooling

- [![ESLint](https://img.shields.io/badge/ESLint-4B498B?style=flat&logo=eslint&logoColor=white)](https://eslint.org)
- [![Prettier](https://img.shields.io/badge/Prettier-1A2C42?style=flat&logo=prettier&logoColor=white)](https://prettier.io)

###### Deployment

- [![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com)

---

## Project Structure

```txt
src/
├─ assets/ # Static assets
├─ context/ # Global contexts (Dark Mode logic & state)
├─ data/ # Static or mock data
├─ features/ # Feature-based modules (auth, bookings, check-in, etc.)
├─ hooks/ # Shared custom React hooks
├─ pages/ # Main application pages
├─ services/ # Database & API service layer (Supabase)
├─ styles/ # Global styles and theming setup
├─ ui/ # Reusable UI building blocks
├─ utils/ # Helper utilities (currency, calendar options, etc.)
└─ main.jsx # Application entry point
```

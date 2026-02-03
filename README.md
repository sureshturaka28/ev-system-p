⚡ EV Analytics Dashboard

MapUp Frontend Assessment Submission

🚀 Live Demo

🔗 Add your deployed link here
Example: https://ev-analytics-dashboard.vercel.app

📌 Overview

This project is an interactive analytics dashboard built using React + TypeScript + TailwindCSS to analyze the Electric Vehicle (EV) Population dataset (50,000+ records).

The goal was to transform raw EV registration data into meaningful, visually compelling insights while ensuring performance, responsiveness, and strong UX design.

The dashboard focuses on:

Data-driven storytelling

Interactive filtering

Performance optimization

Modern SaaS-style UI

Fully responsive layout

🛠 Tech Stack

React (Vite)

TypeScript

Tailwind CSS

Recharts (Data Visualizations)

Framer Motion (Animations)

React CountUp (Animated KPIs)

React Leaflet (Map Visualization)

PapaParse (CSV Parsing)

FileSaver.js (Export functionality)

📊 Key Features
🔢 1. Animated KPI Section

Total Registered EVs

Average Electric Range

Active Manufacturers

Cities Covered

KPIs animate on load using react-countup.

📈 2. Analytical Visualizations
Chart	Insight
📈 EV Adoption Growth	Trend analysis by Model Year
🏭 Manufacturer Market Share	Top 10 EV manufacturers
🏙 City-wise Penetration	EV adoption by city
⚡ Technology Split	Battery vs Plug-in Hybrid distribution
🔋 Average Range Comparison	Manufacturer-wise efficiency
🏛 Clean Fuel Eligibility	Policy eligibility breakdown
🌍 Map Visualization	Geographic distribution of EVs

All charts include:

Responsive containers

Interactive tooltips with percentage values

Clean modern styling

🎛 3. Advanced Filtering

Users can dynamically filter by:

Manufacturer

City

EV Type

Year Range

All charts and KPIs update reactively using useMemo for performance optimization.

🌗 4. Dark Mode

Toggle between Light & Dark themes

Implemented using Tailwind’s dark class strategy

UI adapts across all charts and components

📥 5. Export to CSV

Users can export the currently filtered dataset as a downloadable CSV file.

🌍 6. Geographic Map View

Interactive map built with React Leaflet showing EV registrations geographically.

📱 7. Fully Responsive Design

Fixed sidebar (desktop)

Slide-in drawer sidebar (mobile)

Responsive grid layouts

Mobile-optimized header controls

Adaptive chart stacking

Works seamlessly across:

Mobile

Tablet

Laptop

Large screens

⚡ Performance Optimizations

useMemo used for heavy aggregations (50k rows)

Derived state calculations minimized

Efficient data grouping

Avoided unnecessary re-renders

🧠 Analytical Approach

The dataset was used from multiple analytical angles:

Temporal growth trends

Market share comparison

Geographic distribution

Technology segmentation

Efficiency benchmarking

Policy compliance impact

This ensures not just visualization — but meaningful insights.

🏗 Project Structure
src/
├── components/
│   ├── layout/
│   ├── charts/
│   ├── filters/
│   ├── kpi/
│
├── utils/
├── App.tsx


Component-based architecture ensures scalability and maintainability.

🚀 Deployment

Deployed using:

Vercel / Netlify (Add your platform)

📌 Assumptions

Dataset reduced for frontend bundle optimization

Some map points limited for performance

CSV export reflects applied filters

✨ Future Enhancements

Clustered map markers

Heatmap visualization

Advanced data table with sorting

Lazy-loading large datasets

Server-side data processing

👨‍💻 Author

Turaka Suresh
Full Stack Developer
React | TypeScript | Node | Python

🎯 Final Notes

This dashboard was designed to simulate a production-ready analytics tool rather than a basic academic visualization project.

Focus areas included:

UX clarity

Analytical depth

Clean architecture

Performance scalability

Responsive product design
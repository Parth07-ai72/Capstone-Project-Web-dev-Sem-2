# 🔐 Cybersecurity Threat Dashboard

## 📌 Description
React-based cybersecurity dashboard that visualizes real-time vulnerabilities using API integration, pagination, debounced search, and charts.

## 📌 Project Overview
The Cybersecurity Threat Dashboard is a React-based web application that displays real-time cybersecurity vulnerabilities. It fetches data from a public API and provides an interactive interface for users to explore, search, and manage threats efficiently.

## 🎯 Problem Statement
With the rapid increase in cybersecurity threats, tracking vulnerabilities in real-time becomes challenging. This project provides a centralized dashboard to monitor and manage cybersecurity threats in a simple and user-friendly manner.

## 🚀 Features
### 🔍 Core Features
+ Fetch real-time cybersecurity data from a public API.
+ Display vulnerabilities in a structured format.
+ Responsive and clean UI.

### ⚡ Advanced Features
+ Pagination for efficient navigation.
+ Search & Filter functionality.
+ Debounced API calls for performance optimization.
+ Data visualization using charts.
+ CRUD operations (Save & Delete using localStorage).

## 🛠️ Tech Stack
+ Frontend: React (Vite), JavaScript (ES6+)
+ Routing: React Router
+ State Management: useState, useEffect
+ API Integration: Fetch API
+ Styling: Tailwind CSS
+ Charts: Recharts
+ Storage: LocalStorage

## 🌐 API Used
NVD (National Vulnerability Database) CVE API
- https://services.nvd.nist.gov/rest/json/cves/2.0

## 📂 Project Structure
```
src/
│
├── 📁 components/
│   └── 📄 Navbar.jsx
│
├── 📁 pages/
│   ├── 📄 Dashboard.jsx
│   ├── 📄 Threats.jsx
│   └── 📄 Saved.jsx
│
├── 📄 App.jsx
└── 📄 main.jsx
```

## 🔄 CRUD Functionality
+ Create: Save threats
+ Read: Display threats
+ Delete: Remove saved threats

## ⚡ Performance Optimization
+ Debounced search to reduce API calls
+ Pagination for efficient rendering

## ⚠️ Error Handling
+ API error handling using try-catch
+ User-friendly error messages

## 💾 Data Storage
+ Uses browser localStorage
+ No external database is used

## 🌍 Deployment
The project can be deployed using
+ Netlify: https://wondrous-lily-f50494.netlify.app/

## 🎤 Conclusion
This project demonstrates building a real-world React application with API integration, performance optimization, and a modern UI. It provides a practical solution for monitoring cybersecurity threats efficiently.

## 🙌 Author
Kumar Partha

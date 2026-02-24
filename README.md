# 🏫 **College HRMS Dashboard** - St. Joseph's College of Engineering and Technology, Palai

![Dashboard Preview](screenshots/desktop.png)

## 📋 **Project Overview**
A responsive Human Resource Management System (HRMS) Dashboard UI designed for the HR department of **St. Joseph's College of Engineering and Technology, Palai**. This dashboard provides a clean and intuitive interface for managing employee records, tracking attendance, and viewing college staff statistics.

This project was developed as part of a **Frontend Developer Assessment**.

---

## 🚀 **Live Demo**
**Live URL:** [https://college-hrms-dashboard.netlify.app](https://college-hrms-dashboard.netlify.app)

---

## ✅ **Features Implemented**

### 📊 **Core Features**

| Feature | Description | Status |
|---------|-------------|--------|
| **📂 Sidebar Navigation** | 5 menu items: Dashboard, Employees, Attendance, Payroll, Settings | ✅ Complete |
| **🔝 Header Section** | Page title, Profile icon, Notification icon | ✅ Complete |
| **📊 Statistics Cards** | Total Employees (156), Present Today (134), On Leave (22) | ✅ Complete |
| **📋 Employee Table** | Employee ID, Name, Department, Designation, Status | ✅ Complete |
| **🔍 Search Functionality** | Real-time search across all fields (Bonus Feature) | ✅ Complete |
| **📱 Responsive Design** | Fully responsive on Desktop, Tablet, and Mobile | ✅ Complete |
| **📄 Pagination** | 5 records per page with navigation buttons | ✅ Complete |
| **🏷️ Status Badges** | Color-coded badges for Active/On Leave status | ✅ Complete |

### 🛠️ **Technical Features**

- ✅ **Component-Based Architecture** - Reusable, modular components
- ✅ **ES6+ Syntax** - Modern JavaScript practices
- ✅ **Pure CSS** - No frameworks or UI kits
- ✅ **Mobile-First Approach** - Designed for all screen sizes
- ✅ **Collapsible Sidebar** - Smooth transitions
- ✅ **Hardcoded JSON Data** - 20 employee records

---

## 📁 **Folder Structure**

```
college-hrms-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── Header.jsx
│   │   ├── dashboard/
│   │   │   ├── StatsCard.jsx
│   │   │   └── EmployeeTable.jsx
│   │   └── common/
│   │       └── Pagination.jsx
│   ├── data/
│   │   └── mockData.js
│   ├── styles/
│   │   └── dashboard.css
│   ├── App.js
│   └── index.js
├── screenshots/
│   ├── desktop.png
│   ├── tablet.png
│   └── mobile.png
├── package.json
└── README.md
```

---

## 🏗️ **Component Architecture**

```
App.js
│
├── Layout
│   ├── Sidebar
│   │   ├── Dashboard (nav item)
│   │   ├── Employees (nav item)
│   │   ├── Attendance (nav item)
│   │   ├── Payroll (nav item)
│   │   └── Settings (nav item)
│   ├── Header
│   │   ├── Page Title
│   │   ├── Notification Icon
│   │   └── Profile Icon
│   └── Content
│       ├── StatsSection
│       │   ├── StatsCard (Total Employees)
│       │   ├── StatsCard (Present Today)
│       │   └── StatsCard (On Leave)
│       └── EmployeeTable
│           ├── Search Box
│           ├── Table
│           └── Pagination
```

### **Component Descriptions**

| Component | Type | Description |
|-----------|------|-------------|
| **Layout** | Container | Manages responsive behavior, sidebar state, and overall structure |
| **Sidebar** | Presentation | Displays navigation items with active state, collapsible on desktop |
| **Header** | Presentation | Shows page title and user action icons |
| **StatsCard** | Reusable | Displays statistics with appropriate icons and colors |
| **EmployeeTable** | Container | Handles employee data, search filtering, and pagination logic |
| **Pagination** | Reusable | Provides page navigation controls |

---

## 📱 **Responsive Design Breakpoints**

| Device | Screen Width | Layout Features |
|--------|--------------|-----------------|
| **Desktop** | >1024px | Full sidebar (280px), 3-column statistics, full table view |
| **Tablet** | 769px - 1024px | Smaller sidebar (240px), 2-column statistics, auto-collapsed sidebar option |
| **Mobile** | ≤768px | Hamburger menu, hidden sidebar (slides in), 1-column statistics, horizontal scroll table |
| **Small Mobile** | ≤480px | Optimized touch targets, compact header, smaller fonts |

### **Mobile-Specific Features**
- ✅ Hamburger menu button (☰) in top-left
- ✅ Sidebar slides in from left when opened
- ✅ Dark overlay behind sidebar when open
- ✅ Tap overlay to close sidebar
- ✅ Horizontal scroll for table (swipe left/right)
- ✅ Touch-friendly pagination buttons

---

## 🛠️ **Technologies Used**

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.2.0 | Frontend UI library |
| **Lucide React** | 0.263.1 | Beautiful, consistent icons |
| **CSS3** | - | Pure CSS styling (no frameworks) |
| **Create React App** | 5.0.1 | Project bootstrapping and build tool |

### **Why These Technologies?**
- **React**: Component-based architecture matches assessment requirements
- **Lucide React**: Lightweight icon library with no bloat
- **Pure CSS**: Meets "no UI kits" requirement, complete control over styling
- **CRA**: Standard React setup with minimal configuration

---

## 📊 **Data Structure**

### **Statistics Data** (mockData.js)
```javascript
{
  totalEmployees: 156,
  presentToday: 134,
  onLeave: 22
}
```

### **Employee Data** (mockData.js)
```javascript
[
  {
    id: 'EMP001',
    name: 'Dr. Rajesh Kumar',
    department: 'Computer Science',
    designation: 'Professor & HOD',
    status: 'Active'
  },
  // ... 19 more records
]
```

## 🚀 Setup Instructions

### 📋 Prerequisites
Before you begin, ensure you have the following installed:

Requirement	Version	Check Command
Node.js	v14.0.0 or higher	node --version
npm	v6.0.0 or higher	npm --version
Git	Any recent version	git --version

## 📥 Installation Steps

## Step 1: Clone the Repository

### Clone using HTTPS
git clone https://github.com/yourusername/college-hrms-dashboard.git

### Or clone using SSH
git clone git@github.com:yourusername/college-hrms-dashboard.git

### Navigate into the project folder
cd college-hrms-dashboard

## Step 2: Install Dependencies

### Using npm
npm install

### OR using yarn
yarn install

## Step 3: Start the Development Server

### Using npm
npm start

### OR using yarn
yarn start

```
✅ Start the development server at http://localhost:3000

```

## Step 4: View the Application
Open your browser and navigate to:
```
http://localhost:3000
```

## 🏗️ Build for Production
To create an optimized production build:

### Using npm
npm run build

### OR using yarn
yarn build

## 🌐 Deployment Options
### Option A: Deploy to Netlify (Recommended - Free)

#### Build the project
npm run build

### Deploy using Netlify CLI

#### Install Netlify CLI
npm install -g netlify-cli

#### Deploy
netlify deploy

### OR Deploy via Netlify Drag & Drop

1. Go to app.netlify.com

2. Drag and drop the build folder

3. Get your live URL instantly

### Option B: Deploy to Vercel

#### Install Vercel CLI
npm install -g vercel

#### Deploy
vercel

### Option C: Deploy to GitHub Pages

#### Install gh-pages
npm install --save-dev gh-pages

### Add to package.json
#### "homepage": "https://yourusername.github.io/college-hrms-dashboard"

#### Deploy
npm run deploy

## 🛠️ Available Scripts
 Command	Description
npm start	Starts development server at localhost:3000
npm run build	Creates production build in build folder
npm test	Runs test suite
npm run eject	Ejects from Create React App (one-way operation)

## 📦 Dependencies
```
json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "lucide-react": "^0.263.1"
  }
}
```

## 🔧 Troubleshooting
### Common Issues and Solutions
Issue	Solution
Port 3000 already in use	Run npm start -- --port 3001
Module not found errors	Run npm install again
Styles not loading	Clear browser cache
Node version issues	Use nvm use 18 if using nvm

## Environment Variables
Create a .env file in the root directory:

### Optional: Change port
PORT=3000

### Optional: Disable browser opening
BROWSER=none

## ✅ Verification Checklist
After setup, verify:

App runs at http://localhost:3000

Sidebar navigation is visible

Statistics cards show numbers

Employee table displays data

Search functionality works

Pagination works

Mobile responsive design works

No console errors (F12 → Console tab)

## 📂 Project Structure After Setup
```
college-hrms-dashboard/
├── node_modules/          # Dependencies (auto-generated)
├── public/                # Public assets
├── src/                   # Source code
├── package.json           # Dependencies and scripts
├── package-lock.json      # Locked dependency versions
├── README.md              # This file
└── .gitignore             # Git ignore rules
```

## 🚨 Important Notes
⚠️ This project uses mock data - no backend required
⚠️ Sidebar items are UI only (as per assessment requirements)
⚠️ For mobile testing, use Chrome DevTools device toolbar
⚠️ The app is fully responsive - test on all screen sizes

## 💡 Quick Start Commands (Summary)
bash
### One-liner to get started
```
git clone https://github.com/yourusername/college-hrms-dashboard.git
cd college-hrms-dashboard
npm install
npm start
```

## 📸 **Screenshots**

| Desktop | Tablet | Mobile |
|---------|--------|--------|
| ![Desktop](screenshots/desktop.png) | ![Tablet](screenshots/tablet.png) | ![Mobile](screenshots/mobile.png) |

## 👨‍💻 **Author**

**Your Name**

- 📧 **Email:** neharintijo@gmail.com
- 🐙 **GitHub:** [@yourusername](https://github.com/Neharin-tijo)
- 💼 **LinkedIn:** [Your Name](https://www.linkedin.com/in/neharintijo/)

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments
St. Joseph's College of Engineering and Technology, Palai for the opportunity

React community for excellent documentation

Lucide React for beautiful icons

## 📞 Need Help?
If you encounter any issues:

Check the Troubleshooting section above

Open an issue on GitHub

Contact the developer via email

### Made with ❤️ for St. Joseph's College of Engineering and Technology, Palai 

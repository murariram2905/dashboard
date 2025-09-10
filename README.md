# 🌐 CNAPP Dashboard (Angular + Bootstrap)

## 📖 Project Overview
This is a simple **CNAPP Dashboard** built with **Angular** and **Bootstrap**.  
The dashboard has **3 categories**:  
1. CSPM Executive Dashboard  
2. CWPP Dashboard  
3. Registry Scan  

Each category contains **widgets** that can be **added** or **removed dynamically**.  
The state is managed locally using an **RxJS BehaviorSubject** in a service.  

---

## 🚀 Features
- 🌐 Navbar with project title  
- 📂 3 predefined categories  
- ➕ Add new widget dynamically  
- ❌ Remove existing widget  
- 📦 State management using RxJS BehaviorSubject  
- 🎨 Clean UI with Bootstrap cards, shadows, and hover effects  

---

## 🛠️ Tech Stack
- **Angular 16+**  
- **Bootstrap 5**  
- **RxJS BehaviorSubject** (for state management)  

---

## 📂 Project Structure
src/app/
 ├── services/
 │     └── dashboard.service.ts
 ├── components/
 │     ├── dashboard/
 │     │     ├── dashboard.component.ts
 │     │     ├── dashboard.component.html
 │     │     └── dashboard.component.scss
 │     └── add-widget/
 │           ├── add-widget.component.ts
 │           ├── add-widget.component.html
 │           └── add-widget.component.scss
 ├── app.module.ts
 ├── app.component.ts
 └── app.component.html

 ## ⚡ Getting Started
  **1. Clone the repository****2. Install dependencies**
  - git clone https://github.com/murariram2905/dashboard
  - cd cnapp-dashboard
    
**2. Install dependencies**
   - ng serve
     
**3. 🌍 Live Demo**
- https://murari-dashboard.netlify.app/

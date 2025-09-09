# BrainPage Frontend

**BrainPage Frontend** is the React + TypeScript frontend for BrainPage, a simple librarian-focused library management system. This project allows librarians to manage books, lend and return books, and track borrowing activity.

---

## 🚀 Features

* **Landing Pages (Public)**

  * Home / Landing page
  * About / Contact (optional)

* **Dashboard Pages (Librarian-only)**

  * Dashboard overview (stats)
  * Books management (add, edit, delete, list)
  * Lend Book
  * Return Book

* **API Integration**

  * Connects to Django backend via Axios
  * Handles book data, lending/return actions

---

## 🗂 Project Structure

```
Brain_Page_Frontend/
├─ public/                  # Public assets like favicon, index.html
├─ src/
│  ├─ api/                  # Axios instances, API calls
│  ├─ assets/               # Images, icons, fonts
│  ├─ components/           # Reusable UI components (buttons, forms, tables)
│  ├─ hooks/                # Custom React hooks
│  ├─ pages/
│  │  ├─ dashboard/         # Librarian dashboard pages
│  │  │    ├─ Dashboard.tsx
│  │  │    ├─ Books.tsx
│  │  │    ├─ LendBook.tsx
│  │  │    └─ ReturnBook.tsx
│  │  └─ landing/           # Public landing pages
│  │       ├─ Landing.tsx
│  │       ├─ About.tsx
│  │       └─ Contact.tsx
│  ├─ routes/               # React Router setup
│  ├─ App.tsx               # Main app with router
│  ├─ index.css             # Global styles
│  ├─ main.tsx              # Entry point
│  └─ vite-env.d.ts         # Vite TypeScript definitions
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ README.md
├─ tailwind.config.js
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts
```

---

## ⚡ Installation

1. **Clone the repository** (or navigate to your project folder):

```bash
git clone <your-repo-url>
cd Brain_Page_Frontend
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the development server:**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

---

## 🛠 Dependencies

* [React](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Vite](https://vitejs.dev/)
* [Axios](https://axios-http.com/) – for API requests
* [React Router DOM](https://reactrouter.com/) – for routing
* [React Query / TanStack](https://tanstack.com/query/latest) – optional, for data fetching & caching
* [Tailwind CSS](https://tailwindcss.com/) – optional, for styling

---

## 💡 Notes

* Landing pages and dashboard pages are **separated** for clarity.
* Dashboard routes can be **protected** later with auth (librarian-only).
* API calls are centralized in `src/api/` for maintainability.
* Components are reusable and modular, placed in `src/components/`.

---

## 🔜 Next Steps

1. Create **React components** for Books, LendBook, ReturnBook.
2. Implement **Axios calls** to Django backend.
3. Add **private routing** for dashboard pages.
4. Style the app using **Tailwind CSS** or your preferred library.

---

**BrainPage Frontend** is ready for development and can be extended into a full-featured librarian management system.

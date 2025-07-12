# 🚚 QuickDeliverLite

**QuickDeliverLite** is a lightweight, responsive, and modern delivery management web application. Built with Vue.js and TailwindCSS, this app streamlines the delivery experience for agents, customers, and admins through intuitive UI, real-time feedback, and performance stats.

## 📦 Features

### 👥 User Roles

* **Customer**: View delivery status, give feedback, check delivery history.
* **Agent**: Manage assigned deliveries, mark updates, and track performance.
* **Admin (optional)**: Extendable for dashboard controls.

### 📊 Core Modules

* **Delivery Management**: Create, assign, and track deliveries.
* **Stats Dashboard**: Visual insights for both customers and agents.
* **Feedback System**: Rate and review delivery experiences.
* **Authentication**: Basic login and signup flows.
* **Responsive Layout**: Mobile-friendly canvas-based layout.

---

## 🧱 Tech Stack

| Layer        | Tools / Libraries                                                                    |
| ------------ | ------------------------------------------------------------------------------------ |
| Framework    | [Vue 3](https://vuejs.org/) + [Vite](https://vitejs.dev/)                            |
| Styling      | [Tailwind CSS](https://tailwindcss.com/)                                             |
| State Mgmt   | [Pinia](https://pinia.vuejs.org/)                                                    |
| Routing      | [Vue Router](https://router.vuejs.org/)                                              |
| HTTP Client  | [Axios](https://axios-http.com/)                                                     |
| Dev Tools    | ESLint, Prettier, PostCSS                                                            |
| Mock Backend | `db.json` (suggests use with [json-server](https://github.com/typicode/json-server)) |

---

## 📁 Project Structure (Simplified)

```
src/
├── api/               # Axios instance setup
├── assets/            # Global styles
├── components/        # UI + Feature-specific components
├── composables/       # Reusable logic (e.g., notifications)
├── router/            # Vue router configuration
├── stores/            # Pinia store (e.g., theme)
├── views/             # Route-level views
└── App.vue, main.js   # Root files
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/saisrija07-msf-internship/quickdeliverlite.git
cd quickdeliverlite
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

### 4. (Optional) Start Mock Backend

```bash
npx json-server --watch db.json --port 3001
```

---

## ✨ Screenshots (Add your own)

> Replace this section with real screenshots or GIFs from your `src/views`.

---

## 🧪 Testing

Manual and unit testing not currently integrated. Add tests using [Vitest](https://vitest.dev/) or [Cypress](https://www.cypress.io/) for E2E.

---

## 📌 TODO

* [ ] Add role-based auth & route guards
* [ ] Integrate real backend
* [ ] Improve delivery filtering & search
* [ ] Analytics view for admin
* [ ] Progressive Web App (PWA) support

---

## 📄 License

MIT © 2025 [Saisrija07](https://github.com/saisrija07-msf-internship)

---

## 🙌 Acknowledgements

* Vite + Vue for fast development
* Tailwind UI inspiration
* Open Source Component Libraries

# Vue 3 + Vite
# 📒 Contact Book Web Application

**Name:** Khushi  
**Student ID:** 90541136043

## 📌 Overview

This project is a single-page contact book web application built using Vue 3, Vue Router 4, and Vite. It allows users to:
- Add new contacts
- View contact details
- Edit and delete contacts
- Search contacts by first or last name

All contact data is stored locally using `localStorage`.

---

## ✅ Requirements Checklist

| Requirement | Implemented In |
|-------------|----------------|
| 1. Single-page app using Vue 3, Vite & Vue Router | ✔️ Set up in `main.js`, `router/index.js` |
| 2. Contacts sorted alphabetically by last name | ✔️ `HomeView.vue` |
| 3. Filter by first and last name | ✔️ `HomeView.vue` (search bar logic) |
| 4. Contact details view | ✔️ `ContactDetails.vue` |
| 5. Add new contact with form | ✔️ `AddContact.vue` |
| 6. Edit existing contact | ✔️ `EditContact.vue` |
| 7. Delete contact with redirect | ✔️ `ContactDetails.vue` |
| 8. Visually appealing layout | ✔️ Custom CSS with palette: `#FF90BB`, `#FFC1DA`, `#F8F8E1`, `#8ACCD5` |

---

## 🎨 Color Palette

| Color        | Usage                        |
|--------------|------------------------------|
| `#FF90BB`    | Header, accents              |
| `#FFC1DA`    | Contact cards                |
| `#F8F8E1`    | Background                   |
| `#8ACCD5`    | Buttons and interactive elements |

---

## 🛠 Technologies Used

- **Vue 3**
- **Vue Router 4**
- **Vite**
- **LocalStorage**
- **Manual CSS (no Tailwind)**

---

## 📂 Project Structure

src/
├── assets/
├── components/
│ ├── AddContact.vue
│ ├── EditContact.vue
│ ├── ContactDetails.vue
│ └── Navbar.vue
├── views/
│ └── HomeView.vue
├── router/
│ └── index.js
├── App.vue
└── main.js

ow to Run

1. Clone the repo  
2. Run `npm install`  
3. Run `npm run dev`  
4. Visit `http://localhost:5173`

---

## 👩🏻‍💻 Developed By

**Khushi**  
Student ID: **90541136043**


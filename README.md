# 🍔 React Landing page

This project is a section of a burger landing page built with **React**, **Tailwind CSS**, and **Framer Motion**. It includes a modal to place an order and a confirmation message once the order is submitted.

---

## 📌 Main Features

### ✅ 1. Order Modal

- Opens when clicking the **"Order Now"** button.
- Contains a form with required fields:
  - Name
  - Address
  - Phone
  - Quantity
  - Special instructions (optional)
- When closing (via the `X` button), form inputs are reset and validation is not triggered.

### ✅ 2. Form Validation

- Required fields are marked with `required`.
- The `Submit` button triggers validation automatically.
- If fields are incomplete, the form cannot be submitted.

### ✅ 3. Prevent Default Form Behavior

- `e.preventDefault()` is used in the `handleSubmit` function to prevent page reload.

### ✅ 4. Confirmation Modal

- Appears after a successful form submission.
- Displays a message like: **"Order submitted successfully!"**
- Includes a close button to dismiss the message.

---

## ⚙️ React Logic Highlights

- `useState` is used to manage modal visibility (`order`) and the confirmation modal (`confirmation`).
- `useRef` is used to access the form DOM node and reset it.
- Form is cleared after closing or submitting.
- `AnimatePresence` and `motion.div` from **Framer Motion** are used to animate modal transitions.

---

## 🧠 What I Learned

- How to handle forms in React with validation.
- Proper use of `required`, `onSubmit`, and `preventDefault()`.
- Managing multiple modals and controlling their state.
- Adding smooth animations with Framer Motion.
- Structuring modals correctly in the DOM (confirmation modal goes outside the main modal).

---

## 🛠 Technologies Used

- React
- Tailwind CSS
- Framer Motion
- JSX + Hooks (`useState`, `useRef`)

---

## 💡 Notes

- The confirmation modal **should be placed outside** the main modal DOM structure.
- Preventing default form behavior is important to control custom submission logic.
- Resetting form fields is essential to avoid validation errors when closing the modal without submitting.

---

## 🚀 Future Ideas

- Add visual validation feedback (e.g., red borders for empty required fields).
- Connect the form to a backend service (like Firebase or a REST API).
- Add custom error or success messages.

---

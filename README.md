🍔 React Landing Page
This project is a section of a burger landing page built with React, Tailwind CSS, and Framer Motion. It includes a modal to place an order and a confirmation message once the order is submitted.

📌 Main Features
✅ 1. Order Modal
Opens when clicking the "Order Now" button.

Contains a form with required fields:

Name

Address

Phone

Quantity

Special instructions (optional)

When closing (via the X button), form inputs are reset and validation is not triggered.

✅ 2. Form Validation
Required fields are marked with required.

The Submit button triggers validation automatically.

If fields are incomplete, the form cannot be submitted.

✅ 3. Prevent Default Form Behavior
e.preventDefault() is used in the handleSubmit function to prevent page reload.

✅ 4. Confirmation Modal
Appears after a successful form submission.

Displays a message like: "Order submitted successfully!"

Includes a close button to dismiss the message.

⚙️ React Logic Highlights
useState is used to manage modal visibility (order) and the confirmation modal (confirmation).

useRef is used to access the form DOM node and reset it.

Form is cleared after closing or submitting.

AnimatePresence and motion.div from Framer Motion are used to animate modal transitions.

🧠 What I Learned
I had to refactor the entire Hero component, which originally contained the logic for displaying the form.

To solve that, I researched and learned about React Context, which I had no experience with before.

I created a context folder to store the shared state, and now multiple buttons across the landing page can open the order form using context.

I'm also experimenting with scroll-based animations using Framer Motion, especially useScroll, useTransform, and scrollYProgress.

I'm animating each component independently, because passing scroll progress as props from the App component is not practical (since scrollYProgress goes from 0 to 1 for the whole page).

I intentionally did not use scrollY because it applies to the global scroll, and I wanted localized scroll effects per section.

I'm still learning how to use the offset parameter correctly — it's challenging because each component needs different tuning.

🛠 Technologies Used
React

Tailwind CSS

Framer Motion

JSX + Hooks (useState, useRef, useContext)

💡 Notes
The confirmation modal should be placed outside the main modal DOM structure.

Preventing default form behavior is important to control custom submission logic.

Resetting form fields is essential to avoid validation errors when closing the modal without submitting.

Using React Context helped keep the modal logic clean and accessible across components.

🚀 Future Ideas
Add visual validation feedback (e.g., red borders for empty required fields).

Connect the form to a backend service (like Firebase or a REST API).

Add custom error or success messages.

Improve scroll animation performance and consistency across screen sizes.

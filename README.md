# E-commerce App

This is a shopping app built with React, Tailwind CSS, Redux, Firebase, Material ui and Framer Motion. It provides authentication and real-time storage of products in a Firebase database.

## Features

- **Authentication:**
  - Users can sign up and log in securely.
  - User sessions are managed using Firebase Authentication.

- **Product Management:**
  - Products are stored in a real-time database.
  - CRUD operations for managing products.
  - Notifications using react-toastify to notify you of your actions when you add or remove items from your cart.

- **User Interface:**
  - Responsive design using Tailwind CSS.
  - Animated transitions with Framer Motion.
  - Notifications using react-toastify.

## Technologies Used

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Redux](https://redux.js.org/)
- [Firebase](https://firebase.google.com/)
- [Framer Motion](https://www.framer.com/motion/)


## Getting Started

1. **Clone the Repository:**
   ```bash

   git clone https://github.com/your-username/E-commerce-app.git
   cd E-commerce-app
   ```

2. **Install Dependencies:**

```bash

  npm install react-redux @reduxjs/toolkit react-router-dom material-ui-core react-toastify firebase phosphor-react framer-motion
```

3. **Set Up Firebase:**

   Create a Firebase project and set up authentication and a real-time database.
   Update Firebase configuration in your app.
   
4. **Run the App:**

  ```bash

   npm run dev
```

5. **Open in Browser:**

Open http://localhost:3000 in your browser.

## Folder Structure
src/: Source code of the application.
components/: Reusable React components.
config/: Configuration files (Firebase config, etc.).
pages/: Top-level components representing pages.
store/: Redux store setup.

## Contributing
Contributions are welcome! If you find a bug or have a feature request, please open an issue. If you want to contribute, please fork the repository and create a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.








# App Component Documentation

## Overview

The `App.js` component is the main component of the **TextUtils** application. It manages the state and functionality for features like dark mode, light mode, and alert notifications. It renders key child components like `Navbar`, `TextForm`, and `Alert`.

### Key Functionalities:
1. **Dark Mode / Light Mode Toggle**: Allows users to switch between light and dark themes.
2. **Alert Notifications**: Displays success messages when dark mode or light mode is toggled.
3. **Text Form**: Provides an interface to enter text and perform text analysis (functionality handled in the `TextForm` component).

---

## Key Actions

### 1. State Management:
- **Mode (Theme Mode)**: The state is used to manage the current theme mode (light or dark). Initially, the light mode is enabled.
- **Alert Notification**: An alert state is used to store messages that are displayed to the user when certain actions occur, such as switching themes.

### 2. Functions:
- **showAlert**: A function used to display alert messages on the screen. It receives a message and type, which it then shows as an alert, disappearing after 1.5 seconds.
- **toggleMode**: This function switches between light and dark modes. When the theme is switched, it updates the background color and displays an alert message.

### 3. Rendering the UI:
- **Navbar**: Renders the app's navigation bar, displaying the title and a button for toggling between light and dark themes.
- **Alert**: Renders the alert message, if any, based on the state.
- **TextForm**: Renders the text input area where users can enter text for analysis (like word count, etc.).

### 4. Conditional Rendering:
- The app conditionally displays the alert notification after each mode toggle.
- The app applies different background colors depending on whether the light or dark theme is active.

### 5. Styling:
- The background color of the page changes dynamically based on the selected theme (light or dark mode), which is handled by the `toggleMode` function.

---

## Additional Features (Uncommented Code):
- The **About** component is currently commented out. If enabled, it would display information about the app and would accept the `mode` prop to adjust the styling according to the active theme.

---

## Conclusion

The `App.js` component is responsible for managing the core functionality of the **TextUtils** app, including theme management (light/dark mode), alert notifications, and rendering key components. The app is modular and can be easily extended with additional features in the future.

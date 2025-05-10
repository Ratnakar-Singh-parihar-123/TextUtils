# Navbar Component Documentation

## Overview

The `Navbar` component is a responsive navigation bar that adapts to both light and dark modes based on the `mode` prop. It utilizes Bootstrap's responsive features and dynamic class assignment to ensure the navbar is properly styled based on the current theme.

### Key Functionalities:
1. **Responsive Navbar**: The navbar adjusts its layout for different screen sizes.
2. **Dynamic Theme Switching**: The navbar's theme changes dynamically based on the current mode (light or dark).
3. **Dark Mode Toggle**: A toggle switch allows users to change between light and dark themes.

---

## Key Actions

### 1. Navbar Structure:

- The `Navbar` component is made responsive with the use of Bootstrap’s `navbar-expand-lg` class.
- The `navbar-${props.mode}` and `bg-${props.mode}` classes dynamically set the navbar's theme (light or dark) based on the value of the `mode` prop.
- The `form-check form-switch` class is used for the dark mode toggle, allowing the user to switch between themes.

### 2. Toggle for Dark Mode:
- The toggle switch (`form-check form-switch`) allows the user to toggle between light and dark modes.
- The `onClick` event of the toggle switch triggers the `toggleMode` function, which is passed down as a prop from the parent component.
- The label for the toggle changes its text color based on the current mode:
  - Dark text when the mode is light.
  - Light text when the mode is dark.

### 3. PropTypes:
The `Navbar` component uses `PropTypes` for validating the props passed to it. This ensures that the correct types of data are being passed into the component.

- **title**: A string representing the title displayed in the navbar.
- **toggleMode**: A function that is called when the checkbox is clicked to toggle between light and dark modes.
- **mode**: A string (`'light'` or `'dark'`) that determines the current theme mode.

In the corrected code, `Navbar.propTypes` is used correctly, replacing `Navbar.prototype`, and each prop is validated with its respective type, along with whether it is required.

### 4. Default Bootstrap Styling:
- The navbar utilizes default Bootstrap classes for layout and responsiveness (e.g., `navbar-expand-lg`, `navbar-nav`).
- The `navbar-toggler` is used to collapse the navbar on small screen devices, improving the mobile responsiveness of the app.

### Key Points to Remember:

- **Dynamic Class Assignment**: The `className` for the navbar changes dynamically based on the `mode` prop. Depending on the value of `mode`, it will be either `navbar-light` or `navbar-dark`, and `bg-light` or `bg-dark`.
- **Dark Mode Toggle**: The dark mode toggle is visually reflected in the navbar, and the `onClick` event fires the `toggleMode` function to switch between light and dark themes.

### 5. PropTypes Validation:
- **title**: A required string that represents the title of the navbar.
- **toggleMode**: A required function that will be called when the checkbox is clicked to toggle between modes.
- **mode**: A required string (`'light'` or `'dark'`) that determines the current mode of the website.

Using `PropTypes` ensures that the correct types of data are passed into the component, providing a clear structure and helping to catch potential issues early.

---

## Conclusion

The `Navbar` component is a crucial part of the TextUtils application, allowing for a responsive layout and dynamic theme switching. The use of `PropTypes` guarantees that the correct props are passed, and the navbar adjusts seamlessly between light and dark modes based on user interaction.

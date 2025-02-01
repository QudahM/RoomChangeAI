# RoomChangeAI

## Overview
RoomChangeAI is an AI-powered interior design application that enables users to visualize, customize, and optimize their room layouts. Users can enter details such as room dimensions, style preferences, and color palettes, and the system will generate design suggestions accordingly.

## Features
- **Room Layout Builder:** Drag-and-drop interface for defining room dimensions, adding doors, windows, and other architectural features.
- **Style Selection:** Choose from multiple design styles, including Modern, Traditional, and Bohemian.
- **3D and 2D Preview:** Interactive visualization of room designs.
- **Customization Options:** Adjust color palettes, materials, and layout to match user preferences.
- **Step-by-Step Wizard:** A guided workflow to help users finalize their design.
- **Download & Share:** Ability to export and share room designs.

---

## Installation
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Vite](https://vitejs.dev/)

### Clone the Repository
```sh
git clone https://github.com/yourusername/roomchangeai.git
cd roomchangeai
```

### Install Dependencies
```sh
npm install
```

### Start the Development Server
```sh
npm run dev
```
Vite will start a local server and provide a URL for preview.

---

## Components
### **PreviewPanel.tsx**
Displays a visual representation of the user's selected room design, with interactive tabs for 3D and 2D previews.
- Displays room dimensions, selected style, and color palette.
- Provides options to **View, Download, or Share** the design.
- Default configuration includes:
  - **Dimensions:** 12ft x 15ft x 8ft
  - **Style:** Modern
  - **Color Palette:** Light gray tones

### **RoomDesignWizard.tsx**
Guided step-by-step wizard for designing a room layout.
- **Steps:**
  1. Room Layout
  2. Style Preferences
  3. Review & Generate
- Tracks user progress with a visual **Progress Bar**.
- Integrates with **RoomLayoutBuilder** and **StyleSelector** components.

### **RoomLayoutBuilder.tsx**
Interactive drag-and-drop editor for adjusting room layout.
- Users can add **doors, windows, and architectural features**.
- Supports **manual input of dimensions**.
- Uses **Framer Motion** for smooth draggable elements.

### **StyleSelector.tsx**
Allows users to select a design style, color palette, and materials.
- Styles: **Modern, Traditional, Bohemian**
- Users can:
  - Pick a **design style** from available options.
  - Choose from a curated **color palette**.
  - Select **materials** (e.g., Wood, Steel, Marble).

---

## Styling
This project uses **Tailwind CSS** for styling. The `index.css` file defines custom color variables for light and dark themes.
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
### Theme Customization
- Light and dark mode styles are pre-configured using `:root` variables.
- Example:
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
}
```

---

## Deployment
To build for production:
```sh
npm run build
```
To preview the production build:
```sh
npm run preview
```
For deployment, upload the `/dist/` folder to **Vercel, Netlify, or Firebase Hosting**.

---

## Contributing
1. Fork the repository.
2. Create a new feature branch:
   ```sh
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```sh
   git commit -m "Added new feature"
   ```
4. Push to the branch:
   ```sh
   git push origin feature-name
   ```
5. Open a Pull Request.

---

## License
This project is licensed under the **MIT License**.



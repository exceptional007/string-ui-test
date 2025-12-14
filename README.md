# String UI Test - Product List Application

A modern React-based e-commerce product listing application built with Vite, featuring category-based filtering and a responsive product grid display.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Code Explanation](#code-explanation)
  - [Configuration Files](#configuration-files)
  - [Entry Point](#entry-point)
  - [Components](#components)
  - [Data](#data)
  - [Styling](#styling)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Technologies Used](#technologies-used)

---

## Overview

**String UI Test** is a product catalog application that displays items across multiple categories (Electronics, Clothing, Grocery, and Sports). Users can filter products by category and view detailed information including product images, names, and prices.

---

## Features

✅ **Category Filtering** - Filter products by category (All, Electronics, Clothing, Grocery, Sports)  
✅ **Responsive Grid Layout** - Products displayed in a flexible grid that adapts to screen size  
✅ **Product Cards** - Individual product cards with image, name, price, and call-to-action button  
✅ **Fast Development** - Built with Vite for rapid hot module reloading (HMR)  
✅ **Modern React** - Uses React 19 with functional components and hooks  
✅ **Linting Support** - ESLint configured for code quality

---

## Project Structure

```
string-ui-test/
├── index.html              # HTML entry point
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite build configuration
├── eslint.config.js        # ESLint rules configuration
├── README.md               # This file
├── public/                 # Static assets
└── src/
    ├── main.jsx            # React application entry point
    ├── App.jsx             # Root component
    ├── index.css           # Global styles
    ├── assets/             # Static assets folder
    ├── components/
    │   ├── ProductCard.jsx # Individual product card component
    │   └── ProductList.jsx # Product list with filtering
    └── data/
        └── products.js     # Product data array
```

---

## Code Explanation

### Configuration Files

#### **package.json**
Defines project metadata, dependencies, and npm scripts.

```json
{
  "name": "string-ui-test",
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",              // Start development server
    "build": "vite build",      // Build for production
    "lint": "eslint .",         // Run ESLint checks
    "preview": "vite preview"   // Preview production build
  },
  "dependencies": {
    "react": "^19.2.0",         // React library
    "react-dom": "^19.2.0"      // React DOM rendering
  }
}
```

**Key Dependencies:**
- **react**: Core React library for building user interfaces
- **react-dom**: Allows React to render components in the DOM

**Dev Dependencies:** Include Vite (build tool), ESLint (code linting), and React development tools.

#### **vite.config.js**
Configures Vite build tool and enables React plugin for JSX compilation.

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],  // Enables React JSX transformation
})
```

**Purpose:**
- `defineConfig()` - Provides type hints and configuration for Vite
- `react()` plugin - Enables JSX syntax transformation and Hot Module Replacement (HMR)

#### **index.html**
The main HTML template that serves the React application.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>string-ui-test</title>
  </head>
  <body>
    <div id="root"></div>  <!-- React app mounts here -->
    <script type="module" src="/src/main.jsx"></script>  <!-- Loads React app -->
  </body>
</html>
```

**What it does:**
- Sets up the HTML document structure
- Defines the `<div id="root">` - the mounting point for the React application
- Loads the React application from `src/main.jsx` using ES module syntax

---

### Entry Point

#### **src/main.jsx**
Initializes and renders the React application to the DOM.

```javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* StrictMode helps identify potential issues during development */}
    <App />
  </StrictMode>,
)
```

**Line-by-line breakdown:**
- `import { StrictMode }` - React development tool that highlights potential problems
- `import { createRoot }` - React 18+ API for rendering components
- `import './index.css'` - Loads global stylesheet
- `import App from './App.jsx'` - Imports the root component
- `createRoot(document.getElementById('root'))` - Gets the root DOM element and creates React root
- `.render()` - Renders the component tree into the DOM
- `<StrictMode>` - Wrapper that activates additional development checks

**What it does:**
- Sets up the React application
- Imports necessary modules and styles
- Finds the `#root` element in the HTML
- Renders the `App` component into the DOM with development checks enabled

---

### Components

#### **src/App.jsx**
The root component that serves as the main layout and entry point for the application.

```javascript
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="container">
      <h1>Product List</h1>
      <ProductList />
    </div>
  );
}

export default App;
```

**Detailed explanation:**
- **Import**: Imports the `ProductList` component from the components folder
- **Function Component**: Uses a functional component syntax (modern React standard)
- **JSX Return**: Returns JSX that defines the UI structure
- **Container div**: Wrapper with `container` class for styling and layout
- **Title**: Displays "Product List" as the page heading
- **ProductList Component**: Includes the product filtering and display component
- **Export**: Makes the component available for use in `main.jsx`

**What it does:**
- Provides the main layout with a header
- Wraps the product listing functionality
- Serves as the entry point for the component tree

---

#### **src/components/ProductList.jsx**
Manages the filtering logic and displays products based on selected category.

```javascript
import { useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductList() {
  // State to track the selected category filter
  const [category, setCategory] = useState("All");

  // Filter products based on selected category
  const filteredProducts =
    category === "All"
      ? products                    // Show all products
      : products.filter(product => product.category === category);  // Show only matching category

  return (
    <>
      {/* Category Filter Dropdown */}
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Grocery">Grocery</option>
        <option value="Sports">Sports</option>
      </select>

      {/* Product Grid */}
      <div className="grid">
        {/* Map through filtered products and render ProductCard for each */}
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </>
  );
}

export default ProductList;
```

**Detailed code breakdown:**

**Imports:**
- `useState` - React hook for managing component state
- `products` - Array of product objects from the data file
- `ProductCard` - Component that displays individual products

**State Management:**
```javascript
const [category, setCategory] = useState("All");
```
- Creates a state variable `category` with initial value "All"
- `setCategory` is the function to update this state
- When state changes, component re-renders automatically

**Filtering Logic:**
```javascript
const filteredProducts = category === "All" ? products : products.filter(...)
```
- If category is "All", show all products
- Otherwise, filter to show only products matching the selected category
- Uses array `filter()` method to create a new filtered array

**UI Elements:**

1. **Select Dropdown:**
   - `onChange={(e) => setCategory(e.target.value)}` - Updates state when user selects a category
   - `e.target.value` gets the selected option value
   - Options available: All, Electronics, Clothing, Grocery, Sports

2. **Product Grid:**
   - `<>` - React Fragment (invisible wrapper, avoids extra DOM element)
   - `.map()` - Iterates through filtered products
   - Creates a `ProductCard` component for each product
   - `key={index}` - Helps React identify which items have changed (could be improved with unique IDs)

**What it does:**
- Manages the category filter state
- Filters products based on selected category
- Renders a dropdown for category selection
- Displays matching products in a grid layout

---

#### **src/components/ProductCard.jsx**
Displays individual product information in a card format.

```javascript
function ProductCard({ product }) {
  return (
    <div className="card">
        {/* Product Image */}
        <img src={product.image} alt={product.name}/>
        
        {/* Product Name */}
        <h3>{product.name}</h3>
        
        {/* Product Price in Rupees */}
        <p>Rs. {product.price}</p>

        {/* Call-to-Action Button */}
        <button>Buy Now</button>
    </div>
  );
}

export default ProductCard;
```

**Detailed breakdown:**

**Function Parameter:**
```javascript
function ProductCard({ product })
```
- Uses **destructuring** to extract `product` prop
- `product` is an object containing: `name`, `category`, `price`, `image`
- Alternative syntax: `function ProductCard(props) { const product = props.product }`

**JSX Elements:**

1. **Image:**
   ```javascript
   <img src={product.image} alt={product.name}/>
   ```
   - Displays product image from URL
   - `alt` attribute provides text for accessibility and when image fails to load

2. **Product Name:**
   ```javascript
   <h3>{product.name}</h3>
   ```
   - Shows product name in a heading
   - `{product.name}` - Embeds JavaScript expression in JSX

3. **Price:**
   ```javascript
   <p>Rs. {product.price}</p>
   ```
   - Displays price with "Rs." currency prefix (Indian Rupees)
   - `{product.price}` - Inserts the numeric price value

4. **Button:**
   ```javascript
   <button>Buy Now</button>
   ```
   - Call-to-action button (functionality can be added)
   - Currently displays text without click handler

**What it does:**
- Receives product data as a prop
- Renders a card showing all product information
- Displays the product image, name, price, and action button
- Used by `ProductList` to display each filtered product

---

### Data

#### **src/data/products.js**
Contains the product data array used throughout the application.

```javascript
const products = [
  {
    name: "Laptop",
    category: "Electronics",
    price: 55000,
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wfGVufDB8fDB8fHww",
  },
  {
    name: "Shirt",
    category: "Clothing",
    price: 999,
    image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNoaXJ0fGVufDB8fDB8fHww",
  },
  {
    name: "Rice Bag",
    category: "Grocery",
    price: 799,
    image: "https://images.unsplash.com/photo-1625827626291-6fbd47a431ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmljZSUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Cricket Kit",
    category: "Sports",
    price: 15999,
    image: "https://plus.unsplash.com/premium_photo-1722351690086-b42310f14c14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JpY2tldCUyMGtpdHxlbnwwfHwwfHx8MA%3D%3D",
  }
];

export default products;
```

**Data Structure:**

Each product object contains:
```javascript
{
  name: string,        // Product name (e.g., "Laptop")
  category: string,    // Product category for filtering
  price: number,       // Price in Indian Rupees
  image: string        // URL to product image from Unsplash
}
```

**Products in the array:**

| Product | Category | Price | Purpose |
|---------|----------|-------|---------|
| Laptop | Electronics | 55,000 | High-value tech item |
| Shirt | Clothing | 999 | Affordable clothing |
| Rice Bag | Grocery | 799 | Budget-friendly food item |
| Cricket Kit | Sports | 15,999 | Sports equipment |

**Image Source:**
- All images are from **Unsplash** (free stock photo service)
- URLs include parameters for image sizing and optimization
- Images load from external CDN

**How it's used:**
- Imported in `ProductList.jsx` for filtering
- Each product is passed to `ProductCard` component as a prop
- Filter operations rely on the `category` property

---

### Styling

#### **src/index.css**
Global styles for the entire application.

```css
body {
  font-family: Arial, sans-serif;  /* Default font */
}

.container {
  padding: 20px;        /* Space inside container */
  text-align: center;   /* Center text alignment */
}

select {
  padding: 8px;         /* Space inside dropdown */
  margin-bottom: 20px;  /* Space below dropdown */
}

.grid {
  display: flex;                /* Flexbox layout for responsive design */
  gap: 20px;                   /* 20px space between items */
  justify-content: center;     /* Center items horizontally */
  flex-wrap: wrap;             /* Wrap items to next line on small screens */
}

.card {
  border: 1px solid #ccc;      /* Light gray border around card */
  padding: 15px;               /* Space inside card */
  width: 200px;                /* Fixed card width */
}

.card img {
  width: 100%;                 /* Image fills card width */
}

button {
  margin-top: 10px;            /* Space above button */
  padding: 6px 12px;           /* Button padding (height and width) */
}
```

**CSS Class Breakdown:**

**body:**
- Sets the default font for the entire application
- Uses Arial (sans-serif) for clean, readable text

**.container:**
- Main wrapper for the entire application
- `padding: 20px` - Creates space inside the container
- `text-align: center` - Centers the heading and other content

**select (Dropdown):**
- `padding: 8px` - Space inside the dropdown field
- `margin-bottom: 20px` - Space below dropdown before products appear
- Makes the filter control easily accessible

**.grid:**
- `display: flex` - Uses Flexbox for responsive layout
- `gap: 20px` - Creates 20px space between product cards
- `justify-content: center` - Centers items horizontally
- `flex-wrap: wrap` - Allows cards to wrap to next line on small screens

**.card:**
- `border: 1px solid #ccc` - Light gray border around each product
- `padding: 15px` - Space inside each card
- `width: 200px` - Fixed width for consistent card sizes
- Creates the visual container for each product

**.card img:**
- `width: 100%` - Image stretches to fill the card width
- Maintains responsive proportions

**button:**
- `margin-top: 10px` - Space above the button
- `padding: 6px 12px` - Adds padding for better click area

**Responsive Design:**
- Flexbox `flex-wrap` makes the layout adapt to smaller screens
- Cards will stack vertically on mobile devices
- Grid layout maintains centered alignment on all screen sizes

---

## Installation

### Prerequisites
- Node.js (v14 or higher) - [Download here](https://nodejs.org/)
- npm (comes with Node.js) or yarn

### Steps

1. **Navigate to the project directory:**
   ```bash
   cd "d:\Internship Test\string-ui-test"
   ```

2. **Install all dependencies:**
   ```bash
   npm install
   ```
   This command:
   - Reads `package.json`
   - Downloads and installs React, Vite, and all other dependencies
   - Creates `node_modules` folder with all packages

3. **Verify installation (optional):**
   ```bash
   npm list react react-dom
   ```
   This shows the installed versions of React and React DOM.

---

## Running the Application

### Development Mode (with Hot Reload)
```bash
npm run dev
```

**What happens:**
- Starts Vite development server
- Application available at `http://localhost:5173` (check terminal for exact URL)
- **Hot Module Replacement (HMR)** - Changes automatically reload in the browser without full page refresh
- Great for development and testing

### Build for Production
```bash
npm run build
```

**What happens:**
- Creates optimized production build
- Minifies JavaScript and CSS
- Bundles all assets
- Output folder: `dist/`
- Ready for deployment to hosting service

### Preview Production Build
```bash
npm run preview
```

**What happens:**
- Serves the production build locally
- Allows you to test the optimized version before deploying
- Simulates how the app will perform in production

### Linting (Code Quality Check)
```bash
npm run lint
```

**What happens:**
- Runs ESLint to check code quality
- Identifies potential issues and style problems
- Helps maintain consistent code standards
- Follows rules defined in `eslint.config.js`

---

## Technologies Used

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | ^19.2.0 | UI library for building interactive components |
| **React DOM** | ^19.2.0 | Renders React components in the browser DOM |
| **Vite** | ^7.2.4 | Fast build tool and development server with HMR |
| **ESLint** | ^9.39.1 | Code quality and style enforcement tool |
| **@vitejs/plugin-react** | ^5.1.1 | Vite plugin for React JSX and Fast Refresh support |

**Why these technologies?**
- **React**: Popular, component-based UI library with strong ecosystem
- **Vite**: Much faster than Webpack, provides excellent developer experience
- **ESLint**: Maintains code quality and catches errors early
- **@vitejs/plugin-react**: Enables React development with Hot Module Replacement

---

## How the Application Works - User Journey

### Step-by-step flow:

1. **Page Load**
   - Browser loads `index.html`
   - `index.html` loads `src/main.jsx` as a module script
   
2. **React Initialization** (`main.jsx`)
   - Creates React root on the `#root` element
   - Renders the `App` component
   
3. **App Component Renders**
   - Shows "Product List" heading
   - Renders `ProductList` component
   
4. **ProductList Initial Render**
   - State initialized with `category = "All"`
   - All products displayed in the grid
   - Dropdown shows default "All" option
   
5. **User Selects Category**
   - User clicks dropdown and selects a category (e.g., "Electronics")
   - `onChange` event fires
   - `setCategory()` updates state with new category
   
6. **Re-render**
   - Component re-renders with updated category
   - Filter logic runs: `products.filter(product => product.category === "Electronics")`
   - Only matching products display
   
7. **Display Updated Grid**
   - `.map()` creates `ProductCard` for each filtered product
   - Each card displays: image, name, price, button
   - User sees filtered results

---

## Future Enhancements

### Features that could be added:

- ✨ **Product Detail Page** - Click product to see more information
- 🛒 **Shopping Cart** - Add/remove products from cart
- ❤️ **Wishlist** - Save favorite products
- 🔍 **Search** - Search products by name or keyword
- ⭐ **Ratings** - Display and add product reviews
- 💳 **Checkout** - Complete purchase flow
- 👤 **User Accounts** - Login and order history
- 🎨 **Theme Switcher** - Dark/light mode toggle
- 📱 **Mobile App** - React Native version
- 🔔 **Notifications** - Order status updates

---

## Notes & Best Practices

### Current Implementation:
- Uses **array index** as React key - consider using unique product IDs for better performance
- "Buy Now" button is non-functional - can add click handlers for cart functionality
- Prices hardcoded in data - could be fetched from a backend API
- Product images from external CDN - could cache or optimize with next/image

### Potential Improvements:
- Add error handling for image load failures
- Implement lazy loading for better performance with many products
- Add loading states and skeleton screens
- Create custom hooks for filtering logic
- Use Context API or state management library for global state
- Add unit tests with Jest and React Testing Library
- Implement TypeScript for type safety

### Code Quality:
- Run ESLint regularly: `npm run lint`
- Follow React best practices and hooks rules
- Keep components small and focused on single responsibility
- Use descriptive variable and function names

---

## Troubleshooting

### Port already in use:
```bash
npm run dev -- --port 3000
```
Runs dev server on port 3000 instead of default 5173

### Clear cache and reinstall:
```bash
rm -r node_modules package-lock.json
npm install
```
(Use `rmdir /s node_modules` on Windows)

### Build errors:
- Check that all imports are correct
- Verify component names match file names (case-sensitive)
- Ensure all dependencies are installed

---

## Summary

This is a modern React e-commerce product listing application showcasing:
- **Component-based architecture** with reusable ProductCard component
- **State management** using React hooks (useState)
- **Dynamic filtering** based on user selection
- **Responsive design** with Flexbox
- **Modern build tooling** with Vite
- **Code quality** enforcement with ESLint

Perfect for learning React fundamentals, component composition, and state management!

# DigiTools 🚀

A modern digital marketplace built with React where users can browse, add to cart, and purchase premium AI tools and digital products.

## 🌐 Live Demo

[DigiTools Live](https://digitools-0.netlify.app/)

---

## ✨ Features

### 🛍️ Product & Cart Toggle
- Two tab buttons at the center of the page — **Products** and **Cart**
- By default, the **Products** section is visible
- Clicking **Cart** shows the cart section (empty state message if no items)

### 🛒 Cart Functionality
- Add products to cart with **Buy Now** button
- Button turns **green** after adding to cart
- Prevents duplicate items (shows error toast)
- Cart item count displayed live in the **Navbar**
- Each cart item shows:
  - Product icon
  - Product name
  - Price
  - Remove button
- **Total price** displayed at the bottom
- **Proceed to Checkout** clears the entire cart

### 🔔 Toast Notifications
- Success toast when item is added
- Error toast when duplicate item is added
- Success toast on checkout

### 📱 Responsive Design
- Fully responsive across mobile, tablet, and desktop
- Navbar is sticky — stays fixed on scroll
- Mobile-friendly banner, cards, and layout

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| React | Frontend framework |
| Tailwind CSS | Styling |
| DaisyUI | UI components |
| React Icons | Icons |
| React Toastify | Toast notifications |

---


## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- npm 

### Installation

```bash
# Clone the repository
git clone https://github.com/mdshihabshahriar/digitools.git

# Navigate to project directory
cd digitools

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## 👤 Author

**Your Name**
- GitHub: [@mdshihabshahriar](https://github.com/mdshihabshahriar)

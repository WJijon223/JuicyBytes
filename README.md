# Juicy Bytes

Juicy Bytes is a React + Vite web app for exploring fruits and their nutritional information. Search, browse, and calculate nutrition facts for dozens of fruits with a modern, responsive UI.

## Features

- 🔍 **Search**: Quickly find fruits by name or number.
- 🍎 **Fruit Details**: View genus, family, and order for each fruit.
- 🧮 **Nutrition Calculator**: Calculate calories, fat, sugar, and carbohydrates for any amount.
- ⚡ **Fast & Modern**: Built with React 19, Vite, and Tailwind CSS.
- 🖼️ **Fruit Images**: Visual gallery with fruit images.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/WJijon223/JuicyBytes.git
   cd JuicyBytes
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
  App.jsx           # Main app component
  App.css           # Global styles (Tailwind)
  main.jsx          # Entry point
  components/       # UI components (Header, SideBar, FruitCard, Modal)
  utils/            # Utility functions and fruit data
public/
  fruit/            # Fruit images (01.png, 02.png, ...)
  favcon.png        # Favicon
index.html          # HTML template
vite.config.js      # Vite configuration
```

## API

Fruit data is fetched from the [FruityVice API](https://www.fruityvice.com/), proxied via Vite for CORS support.

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build
- `npm run lint` – Run ESLint

## License

MIT

---

Made with 🍊 by William Jijon

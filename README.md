# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. This project showcases my skills, projects, and provides a way for potential clients or employers to get in touch.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- 🌙 Dark mode support
- ⚡ Fast performance
- 🎭 Smooth animations with Framer Motion
- 📝 Contact form with validation
- 🎯 SEO friendly

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- React Router
- Framer Motion
- Vite

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/personal-portfolio.git
cd personal-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Building for Production

```bash
npm run build
```

This will create an optimized production build in the `dist` directory.

## Project Structure

```
personal-portfolio/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/         # Page components
│   ├── layouts/       # Layout components
│   ├── assets/        # Static assets
│   ├── hooks/         # Custom React hooks
│   └── utils/         # Utility functions
├── public/            # Public assets
└── ...config files
```

## Customization

1. Update the personal information in each component
2. Replace the project images in the `public` directory
3. Modify the color scheme in `tailwind.config.js`
4. Update social media links in the Footer component

## Deployment

This project can be deployed to various platforms:

### GitHub Pages

1. Update the `base` in `vite.config.js`:
```js
export default defineConfig({
  base: '/personal-portfolio/',
  // ... other config
})
```

2. Deploy using GitHub Actions or manually:
```bash
npm run deploy
```

### Netlify/Vercel

1. Connect your GitHub repository to Netlify/Vercel
2. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).

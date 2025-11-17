# NexaView - LensQi Smart Glasses Website

A complete, responsive website for NexaView, a student startup showcasing LensQi Smart Glasses. Built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern UI Design**: Clean, futuristic interface with dark mode and neon accents
- 📱 **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Smooth Animations**: Engaging transitions and hover effects
- 🛍️ **Product Showcase**: Four product categories (Base, Premium, Pro, Pro+) with multiple variants
- 👥 **Team Page**: Showcase of team members
- 📋 **Features Page**: Detailed technology explanations
- 🔧 **How It Works**: Step-by-step guide with visual workflow
- 💼 **Support & Warranty**: Subscription plans and warranty information
- 📧 **Contact Form**: Simple contact form for inquiries

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server

## Project Structure

```
website/
├── public/
│   └── assets/
│       ├── products/     # Product placeholder images
│       └── team/         # Team member placeholder images
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── ProductCard.tsx
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── Products.tsx
│   │   ├── Features.tsx
│   │   ├── Team.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Support.tsx
│   │   └── Contact.tsx
│   ├── App.tsx          # Main app component with routing
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory. You can preview the production build with:

```bash
npm run preview
```

## Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  neon: {
    orange: '#ff6b35',
    blue: '#00d9ff',
  },
}
```

### Content

All content is editable directly in the component files:
- **Homepage**: `src/pages/Home.tsx`
- **Products**: `src/pages/Products.tsx` - Edit product data in the `products` object
- **Team**: `src/pages/Team.tsx` - Edit team member data in the `teamMembers` array
- **Features**: `src/pages/Features.tsx` - Edit feature descriptions in the `features` array
- **Support Plans**: `src/pages/Support.tsx` - Edit subscription plans in the `plans` array

### Images

Replace placeholder images in:
- `public/assets/products/` - Product images
- `public/assets/team/` - Team member photos

Current placeholders are SVG files. Replace them with actual JPG/PNG images for production use.

### Styling

- Global styles: `src/index.css`
- Component styles: Inline Tailwind classes in component files
- Custom animations: Defined in `tailwind.config.js`

## Pages

- **/** - Homepage with introduction and mission
- **/products** - Product catalog with category filtering
- **/features** - Detailed feature explanations
- **/team** - Team member showcase
- **/how-it-works** - Step-by-step usage guide
- **/support** - Support plans and warranty information
- **/contact** - Contact form and information

## Development

### Linting

```bash
npm run lint
```

### Type Checking

TypeScript will check types during build. For development, your IDE should provide real-time type checking.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for NexaView startup. All rights reserved.

## Support

For questions or issues, please contact the development team or open an issue in the repository.

---

Built with ❤️ for NexaView


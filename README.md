# 🛒 React Shopping Cart

A modern, fully-featured shopping cart application built with React, TypeScript, and Bootstrap. This project demonstrates advanced React patterns, state management, and professional development practices.

![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)
![React](https://img.shields.io/badge/React-18.3-61dafb)
![Vite](https://img.shields.io/badge/Vite-6.0-646cff)

## ✨ Features

- **🛍️ Shopping Cart Functionality**
  - Add/remove items from cart
  - Increase/decrease item quantities
  - Real-time cart total calculation
  - Cart badge with item count

- **💾 Persistent Storage**
  - Cart data persists across page refreshes using localStorage
  - Automatic synchronization

- **⚡ Performance Optimizations**
  - Memoized calculations with `useMemo`
  - Optimized re-renders
  - Efficient state updates

- **♿ Accessibility**
  - ARIA labels for screen readers
  - Semantic HTML
  - Keyboard navigation support
  - Alt text for all images

- **📱 Responsive Design**
  - Mobile-first approach
  - Bootstrap 5 grid system
  - Works on all devices

- **🎨 Modern UI/UX**
  - Clean, professional interface
  - Smooth transitions
  - Intuitive user experience

## 🛠️ Tech Stack

### Frontend
- **React 18.3** - UI library
- **TypeScript 5.7** - Type safety
- **React Router 6.30** - Client-side routing
- **React Bootstrap 2.10** - UI components
- **Bootstrap 5.3** - CSS framework

### Build Tools
- **Vite 6.0** - Fast build tool and dev server
- **pnpm** - Fast, disk space efficient package manager

### Code Quality
- **ESLint 8.57** - Linting
- **Prettier 3.6** - Code formatting
- **TypeScript ESLint** - TypeScript-specific linting

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (or npm/yarn)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/shopping-cart.git
cd shopping-cart
```

2. Install dependencies
```bash
pnpm install
```

3. Start the development server
```bash
pnpm dev
```

The application will open at [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Fix ESLint errors |
| `pnpm format` | Format code with Prettier |
| `pnpm type-check` | Check TypeScript types |

## 📁 Project Structure

```
shopping-cart/
├── src/
│   ├── components/        # React components
│   │   ├── Navbar.tsx
│   │   ├── StoreItem.tsx
│   │   ├── CartItem.tsx
│   │   └── ShoppingCart.tsx
│   ├── context/          # React Context for state management
│   │   └── ShoppingCartContext.tsx
│   ├── pages/            # Page components
│   │   ├── Home.tsx
│   │   ├── Store.tsx
│   │   └── About.tsx
│   ├── types/            # TypeScript type definitions
│   │   └── index.ts
│   ├── utilities/        # Helper functions
│   │   └── formatCurrency.ts
│   ├── data/             # Static data
│   │   └── items.json
│   ├── App.tsx           # Main App component
│   └── main.tsx          # Application entry point
├── public/               # Static assets
├── .eslintrc.cjs        # ESLint configuration
├── .prettierrc.json     # Prettier configuration
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies and scripts
```

## 🏗️ Architecture

### State Management
The application uses React Context API for global state management:
- `ShoppingCartContext` - Manages cart state and operations
- Custom hook `useShoppingCart()` - Provides access to cart functionality

### Key Patterns
- **Component Composition** - Reusable, modular components
- **Custom Hooks** - Encapsulated logic
- **TypeScript Interfaces** - Strong typing throughout
- **Memoization** - Performance optimization with `useMemo`
- **localStorage Integration** - Persistent cart data

## 🎯 Key Technical Highlights

1. **Type Safety** - Full TypeScript coverage with strict mode enabled
2. **Performance** - Optimized with React.memo and useMemo
3. **Code Quality** - ESLint and Prettier for consistent code style
4. **Accessibility** - WCAG compliant with ARIA labels
5. **Modern Practices** - Latest React 18 features and patterns
6. **Clean Code** - Well-organized, maintainable codebase

## 🔧 Configuration

### ESLint
The project uses ESLint with:
- TypeScript support
- React best practices
- React Hooks rules
- Prettier integration

### Prettier
Consistent code formatting with:
- Single quotes
- 2-space indentation
- Trailing commas
- Semicolons

## 📝 Development Notes

### Adding New Products
Edit `src/data/items.json`:
```json
{
  "id": 5,
  "name": "Product Name",
  "price": 29.99,
  "imgUrl": "/imgs/product.jpg"
}
```

### Customizing Currency
Edit `src/utilities/formatCurrency.ts`:
```typescript
const CURRENCY_FORMATTER = new Intl.NumberFormat('en-US', {
  currency: 'USD', // Change currency code
  style: 'currency',
});
```

## 🐛 Known Issues
None at this time. Please report issues on GitHub.

## 🚀 Future Enhancements
- [ ] User authentication
- [ ] Backend API integration
- [ ] Payment processing
- [ ] Order history
- [ ] Product search and filters
- [ ] Unit and integration tests
- [ ] Dark mode support

## 📄 License
MIT License - feel free to use this project for learning and portfolio purposes.

## 👤 Author
Your Name - [GitHub](https://github.com/yourusername) | [LinkedIn](https://linkedin.com/in/yourusername)

## 🙏 Acknowledgments
- React Bootstrap for UI components
- Vite for the amazing dev experience
- TypeScript for type safety

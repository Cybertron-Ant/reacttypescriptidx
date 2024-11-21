# Material-UI Form Implementation

A modern, responsive form implementation using Material-UI in a React TypeScript application. This project demonstrates best practices for form handling, responsive design, and component architecture.

## ✨ Key Features

- 🎨 Modern Material-UI Design
  - Custom theme configuration
  - Responsive layout
  - Mobile-first approach

- 📱 Responsive Navigation
  - Desktop: Full menu bar
  - Mobile: Hamburger menu with drawer
  - Smooth transitions

- 📝 Smart Form Handling
  - Real-time validation
  - Error handling
  - TypeScript type safety
  - Formik integration

- 🛠️ Developer Experience
  - Clean architecture
  - TypeScript support
  - Comprehensive documentation
  - Modular components

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## 📦 Dependencies

```json
{
  "@mui/material": "^5.x",
  "@emotion/react": "^11.x",
  "@emotion/styled": "^11.x",
  "@mui/icons-material": "^5.x",
  "formik": "^2.x",
  "yup": "^1.x"
}
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── forms/
│   │   └── ContactForm.tsx      # Form implementation
│   └── layout/
│       └── Navbar.tsx           # Responsive navigation
├── theme/
│   └── theme.ts                 # MUI theme customization
└── App.tsx                      # Main application
```

## 📱 Responsive Design

- Mobile-first approach
- Breakpoint system:
  - xs: 0px
  - sm: 600px
  - md: 900px
  - lg: 1200px
  - xl: 1536px

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage
```

## 📖 Documentation

- [Technical Documentation](./docs/technical.md)
- [Tutorial](./docs/tutorial.md)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

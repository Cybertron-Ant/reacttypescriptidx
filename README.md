# HR Management System

A modern HR Management System built with React and TypeScript, featuring advanced component enhancement through Higher Order Components (HOCs).

## 🚀 Features

- **Authentication System**: Secure user authentication with role-based access control
- **Permission Management**: Granular permission control at component level
- **Data Fetching**: Centralized data management with loading and error states
- **Type Safety**: Full TypeScript support throughout the application
- **Modern UI**: Clean and responsive interface using Tailwind CSS

## 📚 Documentation

- [HOC Guide](docs/HOC-GUIDE.md) - Comprehensive guide to using Higher Order Components
- [Architecture](docs/ARCHITECTURE.md) - System architecture and technical design
- [Technical Documentation](docs/TECHNICAL.md) - Detailed technical specifications
- [Tutorial](docs/TUTORIAL.md) - Step-by-step implementation guide

## 🛠 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- TypeScript 5+
- React 18+

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd reacttypescriptidx
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

## 🏗 Project Structure

```
src/
├── components/
│   ├── common/          # Shared components
│   ├── employees/       # Employee management components
│   └── auth/           # Authentication components
├── context/
│   └── AuthContext.tsx  # Authentication context
├── hoc/
│   ├── withAuthentication.tsx
│   ├── withDataFetching.tsx
│   └── withPermissions.tsx
└── types/              # TypeScript type definitions
```

## 🔒 Security

- Role-based access control
- Protected routes
- Secure authentication flow
- Permission-based feature access

## 🧪 Testing

Run the test suite:
```bash
npm test
# or
yarn test
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

For support, please open an issue in the repository or contact the development team.

## 🌟 Acknowledgments

- React team for the amazing framework
- TypeScript team for type safety
- All contributors who have helped shape this project

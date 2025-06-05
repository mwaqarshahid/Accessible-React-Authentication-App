# Accessible React Authentication App

A fully accessible, internationalized authentication application built with React, demonstrating WCAG compliance and modern web development practices.

## 🌟 Features

### Accessibility (WCAG 2.1 Compliance)

- ♿ Proper ARIA labels and roles
- 🎯 Focus management and keyboard navigation
- 📝 Form validation with descriptive error messages
- 🔍 Screen reader friendly content
- 🎨 High contrast text and visual elements
- ⌨️ Full keyboard accessibility
- 📱 Responsive design for all devices

### Internationalization

- 🌐 Multi-language support (English/Arabic)
- ↔️ RTL/LTR layout switching
- 🔄 Dynamic content direction
- 📝 Localized form validation messages
- 🎨 Culturally adaptive design

### Technical Features

- 🔐 Login and Signup forms
- 🎯 Form validation
- 🔄 Password visibility toggle
- 🎨 Modern UI with Tailwind CSS
- 📱 Responsive design
- 🏗️ Component-based architecture

## 🛠️ Technology Stack

- **React 18** - UI Library
- **Vite** - Build Tool
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Custom Hooks** - State Management

### Custom Hooks

- `useLang` - Language and RTL management
- `useLanguageContext` - Language context access

## 🎯 WCAG 2.1 Compliance

### Perceivable

- Text alternatives for non-text content
- Adaptable content presentation
- Distinguishable content with sufficient contrast
- Clear visual hierarchy

### Operable

- Full keyboard accessibility
- No keyboard traps
- Sufficient time for interactions
- No flashing content
- Clear navigation and structure

### Understandable

- Readable and predictable content
- Clear instructions and error handling
- Input assistance and validation

### Robust

- Compatible with assistive technologies
- Valid HTML and ARIA usage

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/accessible-react-app.git
cd accessible-react-app
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
```

5. Preview production build

```bash
npm run preview
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Environment Setup

The app will run on `http://localhost:5173` by default. You can configure the port by setting the `PORT` environment variable.

### Development Mode Features

- 🔥 Hot Module Replacement (HMR)
- 🎯 Instant feedback
- 🐛 Detailed error reporting
- 📱 Responsive design testing
- 🌐 Language switching testing

## 📁 Project Structure

```
src/
├── components/                  # Reusable components
│   ├── FormInput/              # Accessible form input component
│   │   └── index.tsx
│   └── LanguageSwitcher/       # Language toggle component
│       └── index.tsx
│
├── contexts/                   # React contexts
│   ├── types.ts               # Context type definitions
│   ├── LanguageContext.tsx    # Language context definition
│   └── LanguageProvider.tsx   # Language provider component
│
├── hooks/                     # Custom hooks
│   ├── useLang.ts            # Language and RTL utilities
│   └── useLanguageContext.ts # Language context hook
│
├── locales/                   # Translation files
│   ├── en.json               # English translations
│   └── ar.json               # Arabic translations
│
├── pages/                     # Page components
│   ├── Login.tsx             # Login page
│   └── Signup.tsx            # Signup page
│
├── App.tsx                    # Root component
└── main.tsx                  # Entry point
```

## 🌐 Internationalization

The app supports both English and Arabic languages with full RTL support:

- Dynamic text direction
- Culturally appropriate layouts
- Localized form validation
- RTL-aware component styling
- Automatic text alignment
- Bidirectional UI elements

## 🎨 Styling

- Tailwind CSS for utility-first styling
- RTL/LTR aware layouts
- Responsive design patterns
- Accessible color contrasts
- Focus styles for keyboard navigation
- Consistent spacing and typography

## 🔐 Authentication Forms

### Login Features

- Email validation
- Password visibility toggle
- Remember me option
- Forgot password link
- Error handling
- Loading states

### Signup Features

- Full name validation
- Email validation
- Password requirements
- Terms acceptance
- Error handling
- Success feedback

## 📱 Responsive Design

- Mobile-first approach
- Fluid typography
- Flexible layouts
- Touch-friendly targets
- Consistent spacing
- Breakpoint optimization

## 🧪 Best Practices

- TypeScript for type safety
- Component composition
- Custom hooks for reusability
- Context for state management
- Consistent code style
- Performance optimization
- Accessibility first
- Semantic HTML
- Modern React patterns

Made with ❤️ by Waqar Shahid from Pakistan.

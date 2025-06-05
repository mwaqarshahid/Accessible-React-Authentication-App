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

## 🚀 Getting Started

1. Clone the repository
   \`\`\`bash
   git clone [repository-url]
   \`\`\`

2. Install dependencies
   \`\`\`bash
   npm install
   \`\`\`

3. Start the development server
   \`\`\`bash
   npm run dev
   \`\`\`

## 📁 Project Structure

\`\`\`
src/
├── components/ # Reusable components
│ ├── FormInput # Accessible form input
│ └── LanguageSwitcher# Language toggle
├── contexts/ # React contexts
│ ├── types.ts # Context types
│ ├── LanguageContext# Language context
│ └── LanguageProvider# Language provider
├── hooks/ # Custom hooks
│ ├── useLang # Language utilities
│ └── useLanguageContext# Context hook
├── locales/ # Translation files
│ ├── en.json # English translations
│ └── ar.json # Arabic translations
└── pages/ # Page components
├── Login # Login page
└── Signup # Signup page
\`\`\`

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

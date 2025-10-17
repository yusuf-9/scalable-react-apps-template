# Scalable React Apps Template

A modern, scalable React application template built with Vite, TypeScript, and ESLint.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js**: Version 20 or higher
- **Yarn**: Package manager

### Installing Prerequisites

#### Node.js (v20+)
- Download and install from [nodejs.org](https://nodejs.org/)
- Or use a version manager like [nvm](https://github.com/nvm-sh/nvm):
  ```bash
  nvm install 20
  nvm use 20
  ```

#### Yarn
- Install globally via npm:
  ```bash
  npm install -g yarn
  ```
- Or install via package manager:
  ```bash
  # macOS (with Homebrew)
  brew install yarn
  
  # Ubuntu/Debian
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
  sudo apt update && sudo apt install yarn
  ```

## Project Setup

1. **Clone the repository** (if not already done):
   ```bash
   git clone <repository-url>
   cd scalable-react-apps-template
   ```

2. **Install dependencies**:
   ```bash
   yarn install
   ```

3. **Start the development server**:
   ```bash
   yarn dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## Available Scripts

- `yarn dev` - Start the development server
- `yarn build` - Build the project for production
- `yarn lint` - Run ESLint to check for code quality issues
- `yarn preview` - Preview the production build locally

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **ESLint** - Code linting
- **SWC** - Fast compilation

## Project Structure

```
src/
├── assets/          # Static assets
├── App.tsx         # Main application component
├── App.css         # Application styles
├── main.tsx        # Application entry point
└── index.css       # Global styles
```

## Development

The development server will automatically reload when you make changes to the source files. The application uses hot module replacement (HMR) for a smooth development experience.

## Building for Production

To create a production build:

```bash
yarn build
```

The built files will be in the `dist` directory.

## Contributing

1. Make your changes
2. Run `yarn lint` to check for any linting issues
3. Test your changes with `yarn dev`
4. Submit a pull request
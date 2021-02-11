# Motivated

`motivated` is a React Component library written by TypeScript, React hooks and styled-component.

## Installation

```
# using yarn
yarn add motivated

# using npm
npm install motivated
```

## Usage

```tsx
// App.tsx
import { ThemeProvider, theme } from "motivated";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme.light}>
      {
        // Children
      }
    </ThemeProvider>
  );
};
```

## Supporting Components

- Theme (Only default theme in this moment)
- Form
- Input
- Grid

## Run Storybook

1. Clone this project
2. Download dependencies
   ```
   yarn
   ```
3. Run storybook
   ```
   yarn storybook
   ```

## Contribute Step

<a href="https://github.com/mattia-lau/motivated/blob/master/CONTRIBUTING.md">Check the rules</a>.

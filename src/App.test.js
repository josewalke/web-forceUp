import { render, screen } from '@testing-library/react';
import App from './App';
import { LanguageProvider } from './context/LanguageContext';

test('renders Force Up! logo', () => {
  render(
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
  const forceElement = screen.getByText(/Force/i);
  const upElement = screen.getByText(/Up!/i);
  expect(forceElement).toBeInTheDocument();
  expect(upElement).toBeInTheDocument();
});

test('renders Formation & Events tagline', () => {
  render(
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
  const taglineElement = screen.getByText(/Formation & Events/i);
  expect(taglineElement).toBeInTheDocument();
});

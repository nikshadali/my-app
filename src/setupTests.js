import '@testing-library/jest-dom';

const originalWarn = console.warn;
console.warn = (...args) => {
  if (
    typeof args[0] === 'string' &&
    args[0].includes('React Router Future Flag Warning')
  ) {
    return; // suppress all React Router future flag warnings
  }
  originalWarn(...args);
};

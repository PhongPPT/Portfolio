import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './i18n.ts'

// Disable right-click and keyboard shortcuts globally
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();
  const isCtrlOrMeta = e.ctrlKey || e.metaKey; // Ctrl for Windows, Command for Mac

  // 1. Block Copy/Cut/Paste
  if (isCtrlOrMeta && ["c", "x", "v"].includes(key)) {
    e.preventDefault();
  }

  // 2. Block Ctrl+Shift+J (Console) and Ctrl+Shift+I (DevTools)
  if (isCtrlOrMeta && e.shiftKey && (key === "j" || key === "i")) {
    e.preventDefault();
  }

  // 3. Block Ctrl+U (View Source)
  if (isCtrlOrMeta && key === "u") {
    e.preventDefault();
  }

  // 4. Block F12 (DevTools)
  if (e.key === "F12") {
    e.preventDefault();
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

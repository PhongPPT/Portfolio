import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Disable right-click and keyboard shortcuts globally
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

document.addEventListener("keydown", (e) => {
  // Windows: Ctrl+C / Ctrl+X / Ctrl+V
  if (e.ctrlKey && ["c", "x", "v"].includes(e.key.toLowerCase())) {
    e.preventDefault();
  }

  // Mac: Command (Meta) + C / X / V
  if (e.metaKey && ["c", "x", "v"].includes(e.key.toLowerCase())) {
    e.preventDefault();
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

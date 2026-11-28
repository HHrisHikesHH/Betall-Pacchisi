import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/tiro-devanagari-hindi/400.css';
import '@fontsource/eczar/400.css';
import '@fontsource/kalam/400.css';
import '@fontsource/mukta/400.css';
import '@fontsource/rozha-one/400.css';
import '@fontsource/yatra-one/400.css';
import './styles.css';
import './pothi/pothi.css';
import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

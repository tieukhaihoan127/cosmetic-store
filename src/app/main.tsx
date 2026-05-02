import { createRoot } from 'react-dom/client';
import '../assets/styles/index.css';
import App from './App.tsx';
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from 'react';
import Providers from './Providers.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Providers>
  </StrictMode>
);

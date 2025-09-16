import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './app/App.tsx'
import { Provider } from 'react-redux'
import {store} from './app/store.tsx';
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from 'react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
)

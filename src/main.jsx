import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router';
import Rotas from './rotas.jsx';
import { ContextoProvider } from './context/contextoGobal.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContextoProvider>
      <Rotas />
    </ContextoProvider>
  </BrowserRouter>,
)

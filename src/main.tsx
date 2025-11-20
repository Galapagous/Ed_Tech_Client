import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: { zIndex: 9999, maxWidth: '380px', padding: '12px 20px', marginLeft: '10px' },
        }}
      />
      <App />
    </AuthProvider>
  </StrictMode>
);

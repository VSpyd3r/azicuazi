import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './AppRoutes.tsx'
import './index.css'
import './transitions.css'
import { AuthProvider } from './context/AuthContext.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  </StrictMode>,
)

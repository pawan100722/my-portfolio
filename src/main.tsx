import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MainComponent } from './Components/main-component'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainComponent/>
  </StrictMode>,
)

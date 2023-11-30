import LandingPage from './pages/LandingPage'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Providers from './providers'
import Home from './pages/Home'

const App = () => {
  return (
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Providers>
  )
}

export default App

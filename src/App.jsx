import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import QuickStart from './pages/QuickStart'
import Intermediate from './pages/Intermediate'
import Advanced from './pages/Advanced'
import Shopping from './pages/Shopping'
import AlertCodes from './pages/AlertCodes'
import PowerOutage from './pages/PowerOutage'
import Download from './pages/Download'
import About from './pages/About'
import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quick-start" element={<QuickStart />} />
          <Route path="intermediate" element={<Intermediate />} />
          <Route path="advanced" element={<Advanced />} />
          <Route path="shopping" element={<Shopping />} />
          <Route path="alert-codes" element={<AlertCodes />} />
          <Route path="power-outage" element={<PowerOutage />} />
          <Route path="download" element={<Download />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

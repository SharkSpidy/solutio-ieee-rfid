import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Guidelines from './pages/Guidelines'
import Register from './pages/Register'
import Payment from './pages/Payment'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/register" element={<Register />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

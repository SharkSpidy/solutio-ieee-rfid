import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Guidelines from './pages/Guidelines'
import Register from './pages/Register'
import Payment from './pages/Payment'
import Navbar from './components/Navbar'
import Success from './pages/success'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  )
}

export default App

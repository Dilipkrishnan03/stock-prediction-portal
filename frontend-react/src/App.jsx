import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import './assets/css/style.css'
import Register from './components/register'
import Main from './components/Main'
import Headers from './components/header'
import Footer from './components/Footer'
import Login from './components/Login'
function App() {
  return (
    <BrowserRouter>
    <Headers />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App

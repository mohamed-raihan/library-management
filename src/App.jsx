import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import FramerDemo1 from './components/FramerDemo1';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/framer-demo" element={<FramerDemo1 />} />
      </Routes>
    </>
  )
}

export default App

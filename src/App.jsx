import { Route, Routes } from 'react-router-dom'
import './App.css'
import CategoryManagement from './components/CategoryManagement';
import ProductManagement from './components/ProductManagement';
import DashBoardManagment from './components/DashBoardManagment';
import AdminAccount from './components/AdminAccount';
import Admin from './pages/Admin';

import Header from './components/Header'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
    <Header />
    <Admin/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/Category' element={ <CategoryManagement/>} />
      <Route path='/Product' element={ <ProductManagement/>} />
      <Route path='/Dashboard' element={ <DashBoardManagment/>} />
      <Route path='/Account' element={ <AdminAccount/>} />
    </Routes>
    </>
  )
}

export default App

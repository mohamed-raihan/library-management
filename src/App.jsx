import './App.css'
import { Route, Routes } from 'react-router-dom'
import CategoryManagement from './components/CategoryManagement';
import ProductManagement from './components/ProductManagement';
import DashBoardManagment from './components/DashBoardManagment';
import AdminAccount from './components/AdminAccount';
import Admin from './pages/Admin';


function App() {

  return (
    <>
    <Admin/>
     <Routes>
      <Route path='/Category' element={ <CategoryManagement/>} />
      <Route path='/Product' element={ <ProductManagement/>} />
      <Route path='/Dashboard' element={ <DashBoardManagment/>} />
      <Route path='/Account' element={ <AdminAccount/>} />
    </Routes>
    </>
  )
}

export default App

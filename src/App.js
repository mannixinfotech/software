

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SideBar from "./Componets/SideBar"
import Message from './Componets/Message';
import AllOrder from './Order/AllOrder';
import DashBoard from './Componets/DashBoard';
import Category from './CategorySetup/Category';
import Banner from './Componets/Banner';
import Coupon from './Componets/Coupon';
import Notification from './Componets/Notification';
import NewSale from './Pos/NewSale';
import Orders from './Pos/Orders';
import VerifyPayment from './Pos/VerifyPayment';






function App() {
  return (
    <div>
    
  
 

 <BrowserRouter>
      <Routes>
      <Route path='/' element={<DashBoard>< SideBar/></DashBoard>}/>
      
          <Route path='/message' element={<Message/>}/>
          <Route path='/allorder' element={<AllOrder/>}/>
          <Route  path='/category' element={<Category/>}/>
          <Route path='/banner' element={<Banner/>}/>
          <Route path='/coupon' element={<Coupon/>}/>
          <Route path='/notification' element={<Notification/>}/>

          <Route path='/new-sale' element={<NewSale/>}/>
          <Route path='/orders' element={<Orders/>}/>
         <Route path='/verifyPayment' element={<VerifyPayment/>}/>
      </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;

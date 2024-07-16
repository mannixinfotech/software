

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SideBar from "./Componets/SideBar"
import Message from './Componets/Message';
import AllOrder from './Order/AllOrder';
import DashBoard from './Componets/DashBoard';
import Category from './CategorySetup/Category';
import Banner from './Componets/Banner';





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
        
      </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;

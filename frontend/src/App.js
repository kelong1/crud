import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import { AddProduct } from './components/AddProduct';
import { UpdateProduct } from './components/UpdateProduct';
import { DeleteProduct } from './components/DeleteProduct';
import { ViewProducts } from './components/ViewProducts';

function App() {
  return (
    <Router>
    <div className="App">
    
     <Routes>
     <Route path="/a" element={<AddProduct/>}/>
     <Route path="/u" element={<UpdateProduct/>}/>
     <Route path="/d" element={<DeleteProduct/>}/>
     <Route path="/v" element={<ViewProducts/>}/>
     </Routes>
     
    </div>
    </Router>
  );
}

export default App;

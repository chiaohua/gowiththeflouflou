
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import Home from "./pages/home";
import Item from "./pages/item"; 
import Member from "./pages/member";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/item" element={<Item />} />
        <Route path="/member" element={<Member />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
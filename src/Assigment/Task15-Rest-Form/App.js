import React, { useState, useEffect } from "react";
import ListData from "./CRUD_REDUX/ListData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddData from "./CRUD_REDUX/AddData";
import Detail from "./CRUD_REDUX/Detail";
import EditData from './CRUD_REDUX/EditData';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListData />}/>
        <Route path="/add" element={<AddData />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/edit/:id" element={<EditData />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

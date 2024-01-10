import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateBook from "./components/CreateBook";
import DeleteBook from "./components/DeleteBook";
import EditBook from "./components/EditBook";
import ShowBook from "./components/ShowBook";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/books/create" element={<CreateBook></CreateBook>}></Route>
      <Route path="/books/details/:id" element={<ShowBook></ShowBook>}></Route>
      <Route path="/books/edit/:id" element={<EditBook></EditBook>}></Route>
      <Route path="/books/delete/:id" element={<DeleteBook></DeleteBook>}></Route>
    </Routes>
  );
};

export default App;

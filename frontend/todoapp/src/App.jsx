import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Footer from "./components/Footer/Footer";
import About from "./components/about/about";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logout from "./components/Logout/Logout";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import Todo from "./components/Todo/todo";




function App() {
 
 

  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/todo" element={<Todo></Todo>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/signin" element={<Signin></Signin>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route  path="/logout" element={<Logout></Logout>}></Route>
        
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
     

    </>
  );
}

export default App;

import React, { useEffect } from "react";
import Home from "./pages/Home/Home.jsx";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Player from "./pages/Player/Player.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("logged in");
        navigate("/netflix-clone/");
      } else {
        console.log("logged out");
        navigate("/netflix-clone/login");
      }
    });
  }, []);

  return (
    <div>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path="/netflix-clone/" element={<Home />} />
        <Route path="/netflix-clone/login" element={<Login />} />
        <Route path="/netflix-clone/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;

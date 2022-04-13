import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import { useState } from "react";

import Home from "./components/Home";
import AllCampsPage from "././pages/AllCampsPage";
import NewMessagePage from "././pages/NewMessagePage";
import UserMessagesPage from "././pages/UserMessagesPage";
import AllCampersPage from "././pages/AllCampersPage";
import Layout from "./components/layout/Layout";
import NewCamperPage from "././pages/NewCamperPage";
import NewCampPage from "././pages/NewCampPage";
import Cart from "./components/buyflow/Cart";
import Login from "./components/auth/Login";
import { AuthProvider } from "./contexts/AuthContext";
import Reset from "./components/auth/Reset";
import Dashboard from "./components/Dashboard";
import Register from "./components/auth/Register";

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>


          <Route exact path="/login" element={<Login />} />

          <Route exact path="/register" element={<Register />} /> 
          

          <Route exact path="/reset" element={<Reset />} />
          
          <Route exact path="/dashboard" element={<Dashboard />} />
          

          <Route path="/home" exact element={<Home />} />
          
          <Route path="/cart" exact element={<Cart />} />
          
          <Route path="/all-camps" exact element={<AllCampsPage />} />
          
          <Route path="/messages" exact element={<UserMessagesPage />} />
          
          <Route path="/new-message" exact element={<NewMessagePage />} />
          
          <Route path="/new-camper" exact element={<NewCamperPage />} />
          
          <Route path="/all-campers" exact element={<AllCampersPage />} />
          
          <Route path="/new-camp" exact element={<NewCampPage />} />
          
        </Routes>
      </Layout>
    </AuthProvider>
  );
}

export default App;

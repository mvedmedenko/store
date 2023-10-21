import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import New from "./pages/New/New";
import Men from "./pages/Men/Men";
import Women from "./pages/Women/Women";
import Kids from "./pages/Kids/Kids";
import Signup from "./pages/Auth/Signup";
import Signin from "./pages/Auth/Signin";
function App() {
  return (
      <BrowserRouter>
          <div>
              <div>
                  <Header/>
                  <Routes>
                      <Route path="/" element={<Home/>}/>
                      <Route path="/new" element={<New/>}/>
                      <Route path="/men" element={<Men/>}/>
                      <Route path="/women" element={<Women/>}/>
                      <Route path="/kids" element={<Kids/>}/>
                      <Route path="/signup" element={<Signup/>}/>
                      <Route path="/signin" element={<Signin/>}/>
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}
export default App;

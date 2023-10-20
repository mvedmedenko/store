import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import New from "./pages/New/New";
import Men from "./pages/Men/Men";
import Women from "./pages/Women/Women";
import Kids from "./pages/Kids/Kids";
function App() {
  return (
      <BrowserRouter>
          <div>
              <div>
                  <Header/>
                  <Routes>
                      <Route path="/home" element={<Home/>}/>
                      <Route path="/New" element={<New/>}/>
                      <Route path="/Men" element={<Men/>}/>
                      <Route path="/Women" element={<Women/>}/>
                      <Route path="/Kids" element={<Kids/>}/>
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;

import React from "react";
import { GlobalStyle } from "./globalStyle";

// Components
import Home from "./components/Home";
import TV from "./components/TVshow";
import Movies from "./components/Movies";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from './components/NotFound';
import Profile from "./components/profile";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <GlobalStyle/>
    </div>
    <Routes>
      <Route path='/' element={<Home/>} exact/>
      <Route path='/TVshow' element={<TV/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route component={NotFound}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

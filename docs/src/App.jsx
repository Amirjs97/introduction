// import { Outlet } from 'react-router-dom';
import './App.css';
import { darkmodecontext } from './contexts/darkmodecontext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Notfound, Navbar,Mainpage,Intro,Contactme,Edu} from './Components';
import { useState } from 'react';
// import { useContext } from 'react';
const App = () => {
  const [dark, setdark] = useState(false);
  return (
    <>
      <BrowserRouter basename='/'>
        <darkmodecontext.Provider value={{ dark, setdark }}>
          <Routes>
            <Route path='/' element={<Navbar />}>
              <Route path='/' element={<Mainpage/>}/>
              <Route path='/intro' element={<Intro/>} />
              <Route path='/education' element={<Edu/>} />
              <Route path='/contactme' element={<Contactme/>}/>
            </Route>
            <Route path='*' element={<Notfound />} />
          </Routes>
        </darkmodecontext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App;

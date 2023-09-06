// import { Outlet } from 'react-router-dom';
import '%PUBLIC_URL%/./App.css';
import { darkmodecontext } from '%PUBLIC_URL%/./contexts/darkmodecontext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Notfound, Navbar,Mainpage,Intro,Contactme,Edu} from '%PUBLIC_URL%/./Components';
import { useState } from 'react';
// import { useContext } from 'react';
const App = () => {
  const [dark, setdark] = useState(false);
  return (
    <>
      <BrowserRouter basename='vt'>
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

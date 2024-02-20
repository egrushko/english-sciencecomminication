import './App.css';
import {NavBar} from './components/NavBar'
import {Footer} from './components/Footer'
import {Home} from './components/Home'
import {Units} from './components/Units'
import {About} from './components/About'
import {FirstUnit} from './components/Units/FirstUnit.js'
import {SecondUnit} from './components/Units/SecondUnit.js'
import {ThirdUnit} from './components/Units/ThirdUnit.js'
import {FourthUnit} from './components/Units/FourthUnit.js'
import {Routes,Route, BrowserRouter} from 'react-router-dom'

import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'English for Science';
  }, []);
  return (
    <div className='App'>
      <NavBar/>
        <Routes>
          <Route exact path = '/' element={<Home/>}></Route>
          <Route path = '/units' element={<Units/>}></Route>
          <Route path = '/about' element={<About/>}></Route>
          <Route path = '/unit1' element={<FirstUnit/>}></Route>
          <Route path = '/unit2' element={<SecondUnit/>}></Route>
          <Route path = '/unit3' element={<ThirdUnit/>}></Route>
          <Route path = '/unit4' element={<FourthUnit/>}></Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;

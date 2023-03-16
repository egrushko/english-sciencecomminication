import './App.css';
import {NavBar} from './components/NavBar'
import {Footer} from './components/Footer'
import {Units} from './components/Units'
import {About} from './components/About'
import { CompareTextTask } from './components/CompareTextTask';
import {Routes,Route} from 'react-router-dom'
import {Unit} from './components/Unit'

function App() {

  return (
    <div className='App'>
      <NavBar/>
      <Routes>
        <Route path = 'engSfedu/' element={<Units/>}></Route>
        <Route path = 'engSfedu/about' element={<About/>}></Route>
        <Route path = '/unit2' element={<About/>}></Route>
        <Route path = '/unit3' element={<About/>}></Route>
        <Route path = '/unit4' element={<About/>}></Route>
        <Route path = '/unit5' element={<About/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

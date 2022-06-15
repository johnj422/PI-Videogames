import './App.css';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import VideogameDetail from './components/VideogameDeatil/VideogameDetail';
import { Route, Router, Routes } from 'react-router-dom';
import Form from './components/Form/Form';


function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/create' element={<Form/>} />
        <Route path='/detail/:id' element={<VideogameDetail/>} />
      </Routes>
    </>
  );
}

export default App;

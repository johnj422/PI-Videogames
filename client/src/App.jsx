import './App.css';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { Route, Router, Routes } from 'react-router-dom';
import Form from './components/Form/Form';


function App() {
  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/create' element={<Form/>} />
      </Routes>
   
    </>
  );
}

export default App;

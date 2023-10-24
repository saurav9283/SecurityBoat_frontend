import './App.css';
import { useState } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import AddProducts from './pages/AddProducts';
import Home from './pages/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  const [isChange, setIsChange] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home isChange={isChange} setIsChange={setIsChange}/>}/>
        <Route path='/add' element={<AddProducts isChange={isChange} setIsChange={setIsChange} />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

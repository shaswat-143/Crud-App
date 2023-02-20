import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import CodefromShaswat from './components/Code from Shaswat';
import Adduser from './components/AddUser';
import AddAdmin from './components/AllAdmin';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' element={<CodefromShaswat />} />
      <Route path='/all' element={<AddAdmin />} />
      <Route path='/add' element={<Adduser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

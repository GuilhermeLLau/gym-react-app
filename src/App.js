import './App.css';

import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Outlet />
      <Navbar />
    </div>
  );
}

export default App;

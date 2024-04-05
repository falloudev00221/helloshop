
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import { Home } from './Composant/home/home';
import {  Routes, Route } from "react-router-dom";
import { Button } from 'react-bootstrap';
import './App.css';

function App() {
  return (
      <div>
  
      <Routes>

      <Route  path="/" element={<Home></Home>}></Route>

      </Routes>

       
      </div>
  );
}

export default App;

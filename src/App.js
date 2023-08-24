import './App.css';
import Destination from './components/Destination';
import Home from './components/Home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route index element = {<Home />}></Route>
          <Route path = '/destination' element ={<Destination />} ></Route>
          <Route path = '/*'> INVALID PATH</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

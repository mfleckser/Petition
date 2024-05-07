import './App.css';
import NavBar from "./components/NavBar";
import Petition from './pages/petition/Petition';
import Read from './pages/read/Read';
import Motivation from './pages/motivation/Motivation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div id="nav"><NavBar /></div>
        <div id="content">
          <Routes>
            <Route path="/" element={<Petition />} />
            <Route path="/read" element={<Read />} />
            <Route path="/motivation" element={<Motivation />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

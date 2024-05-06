import './App.css';
import NavBar from "./components/NavBar";
import Petition from './pages/petition/Petition';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div id="nav"><NavBar /></div>
        <div id="content">
          <Routes>
            <Route path="/" element={<Petition />} />
            <Route path="/read" element={<></>} />
            <Route path="/motivation" element={<></>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="/read" element={<></>} />
            <Route path="/motivation" element={<></>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home';
import { AddPlayer } from './Components/AddPlayer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';
import { Player } from './Components/Player';
import { UpdatePlayer } from './Components/UpdatePlayer';
import { SearchPlayer } from './Components/SearchPlayer';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Player Web application</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/player">All Players</Link>     
              </li>
            <li className="nav-item">
              <Link className="nav-link" to="/addplayer">Add Players</Link> 
              </li>
            <li className="nav-item">
              <Link className="nav-link" to="/searchplayer/:role">Search Players</Link> 
              </li>
  
          </ul>
        </div>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/player" element={<Player/>}></Route>
      <Route path="/addplayer" element={<AddPlayer/>}></Route>
      <Route path="/update/:playerId" element={<UpdatePlayer/>}></Route>
      <Route path="/searchplayer/:role" element={<SearchPlayer/>}></Route>

      
    </Routes>
    </BrowserRouter>
  );
}

export default App;

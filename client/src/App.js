import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { GameState } from './context/gameState';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Game } from './components/Game';

import './App.css';

function App() {
  return (
    <GameState>
      <Router>
        <div className='App'>
          <Navbar />
          <div>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/game' element={<Game />} />
            </Routes>
          </div>
        </div>
      </Router>
    </GameState>
  );
}

export default App;

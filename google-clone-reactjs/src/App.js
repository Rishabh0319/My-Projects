import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import SearchReasult from './Components/SearchReasult';

import {AppContext} from './utils/Context.js';

function App() {
  return (
    <AppContext>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/:query/:startIndex' element={<SearchReasult />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppContext>
  );
}

export default App;

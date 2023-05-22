import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import SearchReasult from './Components/SearchReasult';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path='/' exact element={<Home/>}/>
           <Route path='/:query/:startIndex' element={<SearchReasult/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

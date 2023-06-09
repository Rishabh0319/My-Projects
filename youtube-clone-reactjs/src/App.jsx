import React from 'react';
import "./App.css";
//importing Components
import Header from "./Components/Header.jsx";
import Feed from "./Components/Feed.jsx";
import SearchResult from './Components/SearchResult.jsx';
import VideoDetailes from "./Components/VideoDetailes.jsx";

// React Routes (RRD)
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Context API
import { AppContext } from './Context/contextApi';



const App = () => {
    return (
        <AppContext>
            <BrowserRouter>
                <div className='flex flex-col h-full'>
                   <Header/>
                   <Routes>
                     <Route path='/' exact element={<Feed/>}/>
                     <Route path='/searchResult/:searchQuery' element={<SearchResult/>}/>
                     <Route path='/video/:id' element={<VideoDetailes/>}/>
                   </Routes>
                </div>
            </BrowserRouter>
        </AppContext>
    )
}

export default App;
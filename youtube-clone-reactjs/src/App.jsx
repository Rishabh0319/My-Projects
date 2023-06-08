import React from 'react';
import "./App.css";
import { AppContext } from './Context/contextApi';

const App = () => {
    return (
        <AppContext>
            <div className='text-3xl text-green-600'>App</div>
        </AppContext>
    )
}

export default App;
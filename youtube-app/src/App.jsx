import React from 'react';
import { AppContext } from './context/contextApi';

const App = () => {
    return (
        <AppContext>
            <div className='text-green-600'>App</div>
        </AppContext>
    )
}

export default App;
import { createContext, useState } from "react";

export const Context = createContext(null);
 
export const ContextProvider = (props) => {

    const [cartDataCollector, setCartDataCollector] = useState([]);

    return (
        <Context.Provider value={{cartDataCollector,setCartDataCollector}}>
            {props.children}
        </Context.Provider>
    )
}
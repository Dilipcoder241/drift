import React, { createContext, useState } from 'react';

export const captainDataContext = createContext();

function CaptainContext({children}) {
    const [captainData, setCaptainData] = useState("")
    return (
        <captainDataContext.Provider value={{captainData , setCaptainData}}>
            {children}
        </captainDataContext.Provider>
    )
}

export default CaptainContext
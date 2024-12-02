import React, { useState } from 'react'
import { createContext } from 'react'

function UserContext({ children }) {
    const userContext = createContext();
    const [UserData, setUserData] = useState("")
    return (
        <userContext.Provider value={{UserData , setUserData}}>
            {children}
        </userContext.Provider>
    )
}

export default UserContext;
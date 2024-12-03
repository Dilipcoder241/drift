import React, { useState } from 'react'
import { createContext } from 'react'

export const userDataContext = createContext();
function UserContext({ children }) {
    const [userData, setUserData] = useState("")
    return (
        <userDataContext.Provider value={{userData , setUserData}}>
            {children}
        </userDataContext.Provider>
    )
}

export default UserContext;
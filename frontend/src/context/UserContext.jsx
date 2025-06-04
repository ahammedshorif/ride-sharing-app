import React, { createContext, useState } from 'react'

export const UserDataContext = createContext()


export const UserContext = ({children}) => {

  const [user, setUser] = useState({
      email: "",
      fullName:{
        firstName: "",
        lastName:"",
      }
  })
  return (
    <div>
        <UserDataContext.Provider email={user.email} fullName={user.fullName} setUser={setUser}>
            {children}
        </UserDataContext.Provider>
    </div>
  )
}

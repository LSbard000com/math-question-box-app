import React, { createContext, useContext, useEffect, useState } from 'react'
import { AuthContextType } from '../interface/Interface'
import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from '../Firebase'

const AuthContext = createContext<AuthContextType>({currentUser: null})

export const useAuth = () => {
  const context = useContext(AuthContext)
  return context.currentUser
}

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null)

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
      });
      return () => unsubscribe()
    },[auth])

  return (
    <AuthContext.Provider value={{currentUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export default ContextProvider

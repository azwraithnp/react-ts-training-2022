import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface User {
  loggedIn: string;
  setLoggedIn: Dispatch<SetStateAction<string>>;
}

export const UserContext = createContext<User | undefined>(undefined)

interface Props {
  children?: ReactNode
}

export const UserProvider: React.FC<Props> = ({children}) => {

  const [loggedIn, setLoggedIn] = useState("abcd");

  return (
    <UserContext.Provider value={{loggedIn, setLoggedIn}}>{children}</UserContext.Provider>
  )
}

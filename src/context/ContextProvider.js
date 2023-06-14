import { createContext, useState } from "react";

export const Context = createContext();


const ContextProvider = ({children}) => {

    const [dlttask,setDlettask] = useState(false)

  return (
    <>
        <Context.Provider value={{dlttask,setDlettask}}>
            {children}
        </Context.Provider>
    </>
  )
}

export default ContextProvider
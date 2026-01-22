import { createContext, useState } from "react";



// 1st component: We call the createContext and add it to a variable
const DarkContext = createContext()

// 2nd component: We create the wrapper that will hold the states, variables, functions whatever you want. 

function DarkWrapper(props) {
    //Create the states, variables and functions you want
    const [isDarkMode, setIsDarkMode] = useState(false)

    //Get everything you want to pass as context to your application
    const passedContext = {
        isDarkMode,
        setIsDarkMode
    }

    //Return the DarkContext Element with the passedContext you want
    return (
        <DarkContext.Provider value={passedContext}>
            {props.children}
        </DarkContext.Provider>
    )
}

export {
    DarkContext,
    DarkWrapper
}
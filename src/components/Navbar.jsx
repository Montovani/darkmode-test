import { useContext } from "react"
import { Link } from "react-router"
import { DarkContext } from "../context/themedark.context"


const mainContainer = {
    border: "1px solid black",
    borderRadius: "10em",
    display: 'flex',
    justifyContent: 'center',
    margin: "0.4em auto",
    padding: "0.4em",
    gap: "1em"
}

function Navbar(props) {

    const {setIsDarkMode} = useContext(DarkContext)
    const changeToDark = () => {
        setIsDarkMode(true)
    }
    
    
    const changeToLight = () => {
        setIsDarkMode(false)
    }
  return (
   <div style={mainContainer}>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <div>
            <button onClick={changeToDark}>Dark</button>
            <button onClick={changeToLight}>Light</button>
        </div>
   </div>
  )
}

export default Navbar
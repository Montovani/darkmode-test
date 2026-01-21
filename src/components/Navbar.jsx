import { Link } from "react-router"

const mainContainer = {
    border: "1px solid black",
    borderRadius: "10em",
    display: 'flex',
    justifyContent: 'center',
    margin: "0.4em auto",
    padding: "0.4em",
    width: "100vw",
    gap: "1em"
}
function Navbar() {
  return (
   <div style={mainContainer}>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <div>
            <button>Dark</button>
            <button>Light</button>
        </div>
   </div>
  )
}

export default Navbar
import { Link } from "react-router-dom" 

const Header = () => {
  return (
    <header>
        <nav>
            <img src='' className='logo'></img>
            <ul>
                <Link to = {"/"}>Home</Link>
                <Link to = {"/barberos"}>Barberos</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Header
import { Link } from "react-router-dom"
import Search from "../Search/Search"
import "./Nav.scss"

const Nav = () => {
  return (
    <nav className='nav'>
      <div className='nav_logo'><Link to={'/'}>ThePics</Link></div>
      <div className='nav_menu'><Search /></div>
    </nav>
  )
}

export default Nav

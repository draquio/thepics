import { Link } from "react-router-dom"
import "./Footer.scss"

const Footer = () => {
  return (
    <Link className="footer_details" to={'https://draquioportfolio.vercel.app/'}>
      © Sergio Mercado (Draquio) | Fullstack Developer
    </Link>
  )
}

export default Footer

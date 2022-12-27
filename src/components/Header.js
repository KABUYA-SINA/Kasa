import { NavLink } from 'react-router-dom'
import Logo from '../assets/images/Logo.png'
import '../sass/layout/_header.scss'
import '../sass/base/_header_typography.scss'


function Header () {

    return (<header>
        <img  src={Logo} alt='Logo Kasa' />
        <nav>
            <ul>
                <NavLink href='../pages/Home.js' to="/">
                    <li className='first-child' >Accueil</li>
                </NavLink>
                <NavLink href='../pages/About.js' to="/about">
                    <li className='second-child' >A Propos</li>
                </NavLink>
            </ul>
        </nav>
    </header>)
}


export default Header
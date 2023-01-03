import { NavLink, Link } from 'react-router-dom'
import Logo from '../assets/images/Logo.png'
import '../sass/layout/_header.scss'
import '../sass/base/_header_typography.scss'


function Header () {

    return (
        <header>
            <Link to='/'>
                <img  src={Logo} alt='Logo Kasa' />
            </Link>

            <nav>
                <ul>
                    <NavLink href='../pages/Home.js' to="/" className={(nav)  => (nav.isActive ? 'nav-active' : '')}>
                        <li className='first-child' >Accueil</li>
                    </NavLink>
                    <NavLink href='../pages/About.js' to="/about" className={(nav)  => (nav.isActive ? 'nav-active' : '')}>
                        <li className='second-child' >A Propos</li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
}


export default Header
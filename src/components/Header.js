import { NavLink } from 'react-router-dom'
import Logo from '../assets/images/Logo.png'


function Header () {

    return (<div>
        <img  src={Logo} alt='Logo Kasa' />
        <nav>
            <ul>
                <NavLink to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about">
                    <li>A propos</li>
                </NavLink>
            </ul>
        </nav>
    </div>)
}


export default Header
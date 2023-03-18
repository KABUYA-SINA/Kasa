import Logo from '../assets/images/Logo_Footer.png'
import '../sass/layout/_footer.scss'


function Footer () {

    return (
        <footer>
            <img  src={Logo} alt='icon kasa footer' />
            <h1>©2022 Kasa. All rights reserved</h1>
        </footer>)
}


export default Footer
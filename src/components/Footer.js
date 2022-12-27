import Logo from '../assets/images/Logo_Footer.png'
import '../sass/layout/_footer.scss'


function Footer () {

    return (
        <footer>
               <img  src={Logo} alt='Logo Kasa' />
               <p>©2022 Kasa. All rights reserved</p>
        </footer>)
}


export default Footer
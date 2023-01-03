import Header from "../components/Header"
import AboutLogo from '../assets/images/about.png'
import Vector from '../assets/web-component/Vector.png'
import '../sass/pages/_about.scss'


import Banner from '../components/Banner'
import Footer from "../components/Footer"
import Collapse from "../components/Collapse";






function About () {

    return ( 
        <div className="all-content">
            <Header />
            <main>
                <Banner bannerLogo={ AboutLogo } title={''} />
                <Collapse collapseLogo={ Vector } title={'Fiabilié'}/>
                <Collapse collapseLogo={ Vector } title={'Respect'}/>
                <Collapse collapseLogo={ Vector } title={'Service'}/>
                <Collapse collapseLogo={ Vector } title={'Responsabilité'}/>


            </main>
            <Footer />
        </div>
    )
}

export default About



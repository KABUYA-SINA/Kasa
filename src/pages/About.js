import Header from "../components/Header";
import AboutLogo from '../assets/images/about.png';
import Vector from '../assets/web-component/Vector.png';
import '../sass/pages/_about.scss';
import Banner from '../components/Banner';
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";




function About () {

    return (
        <div>
            <div className="all-content">
                <Header />
                <main>
                    <Banner bannerLogo={ AboutLogo } title={''} />
                    <Collapse collapseLogo={ Vector } title={'Fiabilié'} text={'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'}/>
                    <Collapse collapseLogo={ Vector } title={'Respect'} text={'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'}/>
                    <Collapse collapseLogo={ Vector } title={'Service'} text={" Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}/>
                    <Collapse collapseLogo={ Vector } title={'Responsabilité'} text={" La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes. "}/>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default About



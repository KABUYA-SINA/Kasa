import data  from '../data/dataBase.json'

import Header from "../components/Header"
import Footer from "../components/Footer"
import Banner from '../components/Banner'
import Card from '../components/Card'
import BannerLogo from '../assets/images/Banner.png'
import '../sass/layout/_container.scss'
import '../sass/base/_base.scss'




function Home () {
    return ( <div className="container">
        <Header />
        <main>
            <Banner bannerLogo={ BannerLogo } title={ 'Chez vous, partout et ailleurs' } />

            <article>
                {data.map(({id, cover, title}) => (
                    <Card  key={id} id={id} cover={cover} title={title} />
                ))}
            </article>

        </main>
        <Footer />
    </div>)
}

export default Home
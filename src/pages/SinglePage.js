import { useParams } from "react-router-dom";
import { Suspense } from 'react'
import datas from '../data/dataBase.json';
import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";

import '../sass/pages/_singlepage.scss';
import Rating from "../components/Rating";
import Error from './Error'
import MainLoading from '../components/MainLoading';




const Slider = React.lazy(() => {
    return new Promise(resolve => setTimeout(resolve, 4 * 250))
    .then(() => import('../components/Slider')  )
})



export default function SinglePage(){
    const { id } = useParams()
    const apartment = datas.find(element => { return element.id === id })
    if (!apartment) return <Error />;

    return(

        <React.Fragment>
            <div className='single-page__content'>
                <Header />
                <main>
                    <Suspense fallback={<MainLoading />}>
                        <Slider pictures={apartment.pictures}/>
                    </Suspense>

                    <div className="apartment">
                        <div className="apartment-details">
                            <h1>{apartment.title}</h1>
                            <h2>{apartment.location}</h2>
                            {apartment.tags.map((tag) => (<span key={tag}>{tag}</span>))}
                        </div>
                        <div className="apartment-details__creator">
                            <div className="apartment-details__creator--identity">
                                <span className="host-name">{apartment.host.name}</span>
                                <span>
                                    <img src={apartment.host.picture} alt='logo profil' />
                                </span>
                            </div>
                            <Rating  ratingValue={apartment.rating} />
                        </div>
                    </div>
                    <div className="collapse-flex">
                        <Collapse  title={'Description'} text={apartment.description} />
                        <Collapse  title={'Equipements'} text={apartment.equipments.map((equipment) => (<ul key={equipment}><li>{equipment}</li></ul>))}  />
                    </div>
                </main>
            </div>
            <Footer />
        </React.Fragment>
    )

}



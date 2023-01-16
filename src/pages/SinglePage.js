import { useParams } from "react-router-dom";
import datas from '../data/dataBase.json';
import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";

import '../sass/pages/_singlepage.scss';

import Rating from "../components/Rating";
import Slider from "../components/Slider";



export default function SinglePage(){
    const { id } = useParams()
    const apartment = datas.find(element => { return element.id === id })

    return(

        <React.Fragment>
            <div className='single-page__content'>
                <Header />
                <main>
                    <Slider pictures={apartment.pictures}/>
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



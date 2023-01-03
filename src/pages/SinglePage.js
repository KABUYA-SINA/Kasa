import { useParams } from "react-router-dom"
import datas from '../data/dataBase.json'
//import { Link } from 'react-router-dom'

import Header from "../components/Header"
import Footer from "../components/Footer"

import Collapse from "../components/Collapse"

import VectorLeft from '../assets/web-component/Vector-left.png'
import VectorRight from '../assets/web-component/Vector-right.png'
import '../sass/pages/_singlepage.scss'


//import React, { useEffect, useState } from 'react';



export default function SinglePage(){
    const { id } = useParams()
   console.log(id)

//    const [ apartment, setApartment] = useState([])

//     useEffect(() =>{
//             const found = datas.find(element => { return element.id === id })
//             console.log(found)
//             setApartment(found)

//             }
//     )

    const apartment = datas.find(element => { return element.id === id })
    console.log(apartment)


    return(
        <div className='single-page__content'>
            <Header />
            <main>
                <div className="apartment-images">
                    <img  className='apartment-images__modifications left'   src={ VectorLeft} alt='left arrow' />
                        <img className='apartment-cover__image' src={apartment.cover} alt='One location' />
                    <img className='apartment-images__modifications right' src={ VectorRight} alt='right arrow' />
                </div>
                <div className="apartment">
                    <div className="apartment-details">
                        <h1>{apartment.title}</h1>
                        <h2>{apartment.location}</h2>
                        {apartment.tags.map((tag) => (<span key={tag}>{tag}</span>))}

                    </div>
                    <div className="apartment-details__creator">
                        <div className="apartment-details__creator--identity">
                            {/* {apartment.host.map((host) => (<span key={host.name}>{host.name}</span>))}  */}
                            <span>{apartment.host.name}</span> 
                            <span>
                                 <img src={apartment.host.picture} alt='Logo profil' />
                            </span>
                        </div>
                        <span><p>{apartment.rating}</p></span>
                    </div>
                </div>
                <Collapse title={'Description'} text={apartment.description} />
                <Collapse  title={'Equipements'}  />

            </main>
            <Footer />
        </div>
    )

}



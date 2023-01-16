import data  from '../data/dataBase.json';
import React from 'react'

import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from '../components/Banner';
import BannerLogo from '../assets/images/Banner.png';

import '../sass/layout/_container.scss';
import '../sass/base/_base.scss';

import MainLoading from '../components/MainLoading';
import  { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import  ErrorBoundaryData  from './ErrorBoundaryData';




const Card = React.lazy(() => {
    return new Promise(resolve => setTimeout(resolve, 7 * 250))
    .then(() => import('../components/Card')  )
})



function Home () {
    return (
        <React.Fragment>
            <div className='container'>
                <Header />
                <main>
                    <Banner bannerLogo={ BannerLogo } title={'Chez vous,'} nextText={'partout et ailleurs'}/>
                    <ErrorBoundary FallbackComponent={ErrorBoundaryData} onReset={() => {}}>
                        <Suspense fallback={<MainLoading />}>
                            <article>
                            {data.map(({id, cover, title}) => (
                                <Card key={id} id={id} cover={cover} alt={'picture of ' + title} title={title} />
                                ))}
                            </article>
                        </Suspense>
                    </ErrorBoundary>
                </main>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Home
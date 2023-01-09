import React from 'react';
import {useNavigate} from 'react-router-dom';

import '../sass/base/_base.scss';
import '../sass/pages/_error.scss';


const ErrorBoundary = () => {
      const navigate = useNavigate()

    const handleClick = () => {
    navigate.push('/')
   }
    return (
        <div className='content'>

            <main>
                <h1>500</h1>
                <p>
                    Oups! Error server.
                </p>
                <a href='/' onClick={handleClick}>
                    Retourner sur la page d’accueil
                </a>
            </main>
        </div>
    );
};

export default ErrorBoundary;
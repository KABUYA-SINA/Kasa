import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  { Suspense } from 'react';

import Error from './pages/Error';
import React from 'react';
import Loading from './components/Loading';

import './App.css';




const Home = React.lazy(() => {
    return new Promise(resolve => setTimeout(resolve, 5* 250))
    .then(() => import('./pages/Home')  )
})
const About = React.lazy(() => {
    return new Promise(resolve => setTimeout(resolve, 5 * 250))
    .then(() => import('./pages/About')  )
})
const SinglePage = React.lazy(() => {
    return new Promise(resolve => setTimeout(resolve, 5 * 250))
    .then(() => import('./pages/SinglePage'))
})



function App() {
  return (
      <BrowserRouter >
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path='/' element={ <Home /> } />
                    <Route path='/SinglePage/:id' element={ <SinglePage />} />
                    <Route path='/about' element={ <About /> } />
                    <Route path='*' element={ <Error /> } />
                </Routes>
            </Suspense>
      </BrowserRouter>
  )
}

export default App;

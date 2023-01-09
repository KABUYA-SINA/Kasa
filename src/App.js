//import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import Home from './pages/Home'
//import About from './pages/About'
import Error from './pages/Error'
//import SinglePage from './pages/SinglePage'

import React from 'react'






import Loading from './components/Loading'

import  { Suspense } from 'react'


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
    .then(() => import('./pages/SinglePage')  )
})

// const Home = lazy(() => import('./pages/Home'))
// const About = lazy (() => import('./pages/About'))
// const SinglePage = lazy(() => import(('./pages/SinglePage')))

//  <Suspense fallback={<Loading />}></Suspense>


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

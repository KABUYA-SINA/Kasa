import React, { useState } from "react";
import styled from "styled-components/";
//import styled from 'styled-components/native';
import Vector from '../assets/web-component/Vector.png'
import '../sass/pages/_collapse.scss'




const IconButtonWrapper = styled.img`
  transform: rotate(0deg);
  overflow: hidden;
  transition: all 0.3s ease-out;
  ${({ rotate }) => rotate && `transform: rotate(180deg)`};
`

export default function Collapse( { title, text} ) {

  //const [para, setpara] = useState(false)

  const [rotate, setRotate] = useState(false)
  const [textAppear, setAppear ] = useState(false)
  const handleClick = () => {
                  setRotate((prevState) => (!prevState ))
                  setAppear(true)};

  return (
        <div className="boxes">
            <section>
                <h1>{title}</h1>
                <IconButtonWrapper rotate={+rotate} onClick={handleClick} src={ Vector } alt='arrow' />
                {/* <p>{text}</p> */}


                {/* <IconButtonWrapper rotate={+rotate} onClick={handleClick}>
                  <img src={ collapseLogo } alt='arrow' />
                  <p>{text}</p>
                </IconButtonWrapper> */}
            </section>
              {textAppear }
            <p>{text}</p>

        </div>
  )
}
//Fiabilié
//Respect
//Service
//Responsabilité
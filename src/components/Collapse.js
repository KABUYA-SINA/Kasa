import React, { useState } from "react";

import styled from "styled-components/";
import Vector from '../assets/web-component/Vector.png';

import '../sass/pages/_collapse.scss';




const IconButtonWrapper = styled.img`
  transform: rotate(180deg);
  overflow: hidden;
  transition: all 0.3s ease-out;
  ${({ rotate }) => rotate && `transform: rotate(0deg)`};
`

export default function Collapse( { title, text} ) {

  const [rotate, setRotate] = useState(false)
  const [textAppear, setAppear ] = useState(true)

  const handleClick = () => {
                  setRotate((prevState) => (!prevState ))
                  setAppear((prevState) => (!prevState ))};

  return (
        <div className="boxes collapse-flex__childs boxes-collapse__modifications">
            <section>
                <h3>{title}</h3>
                <IconButtonWrapper rotate={+rotate} onClick={handleClick} src={ Vector } alt='arrow' />
            </section>
            {textAppear && <span className="boxes-childs">{text}</span>} 

        </div>
  ) 
}
//Fiabilié
//Respect
//Service
//Responsabilité
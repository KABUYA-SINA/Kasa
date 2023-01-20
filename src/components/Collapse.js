import React, { useState } from "react";

import styled from "styled-components/";
import Vector from '../assets/web-component/Vector.png';

import '../sass/pages/_collapse.scss';



export default function Collapse( { title, text} ) {

  const [rotate, setRotate] = useState(true)
  const [textAppear, setAppear ] = useState(false)

  const handleClick = () => {
                  setRotate((prevState) => (!prevState ))
                  setAppear((prevState) => (!prevState ))
  };

  return (
        <div className="boxes collapse-flex__childs boxes-collapse__modifications">
            <section>
                <h2>{title}</h2>
                <IconImageWrapper rotate={+rotate} onClick={handleClick} src={ Vector } alt={'arrow of ' + title} />
            </section>
            {textAppear && <span className="boxes-childs">{text}</span>}

        </div>
  )
}


  const IconImageWrapper = styled.img`
  transform: rotate(180deg);
  overflow: hidden;
  transition: all 0.3s ease-out;
  ${({ rotate }) => rotate && `transform: rotate(0deg)`};
  `
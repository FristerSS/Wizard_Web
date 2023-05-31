import React from 'react'
import { styled } from 'styled-components'
import { Outlet, Route, Routes } from 'react-router-dom'
import { motion } from 'framer-motion'

const HeaderStyle = styled(motion.header)`
    position: relative;

    width: 70%;
    max-width: 750px;
    height: clamp(80px, 140px, 180px);

    margin-top: 20px;
    margin-inline: auto;

    grid-column: 1/-1;
    font-family: 'Playfair Display', serif;
    letter-spacing: 1px;
    
    &::before
    {
      position: absolute;
      content: '';
      inset: 0;

      background-image: linear-gradient(to right, rgba(255, 0, 0, 0.10), rgba(255, 0, 255, 0.1), rgba(255, 0, 255, 0.12), rgba(255, 0, 255, 0.1), rgba(255, 0, 0, 0.10));
      border-radius: 4rem;

      filter: blur(1px);

      box-shadow: 0 0 5px 2px rgba(255, 0, 255, 0.5);
    

    }

    display: grid;
    place-items: center;
    color: gold;
    font-size: 2rem;

    @media screen and (max-width: 512px)
    {
        font-size: 1.4rem;
    }

`

function Header(props) {

  const variants = {
    hide: {
        opacity: 0,
        y: '-20%'
    },
    animate: {
        opacity: 1,
        y: 0,
        transition:{
            duration: 0.3
        }
    }
}

  return (
    <HeaderStyle variants={variants} initial='hide' animate='animate'>
        {props.children}
    </HeaderStyle>
  )
}

export default Header
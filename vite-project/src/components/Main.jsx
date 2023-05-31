import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { styled } from 'styled-components'

const MainStyle = styled(motion.main)`
    position: relative;

    width: 65vw;
    max-width: 1300px;
    height: clamp(400px, 70vh, fit-content);
    border-radius: 10rem 1rem 10rem 1rem;
    overflow: scroll-x;

    color: white;
    font-weight: 400;
    font-size: 1.5rem;
    padding: 15px;
    margin-inline: auto;

   

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.4rem;

    grid-column: 2;
    
    &::before
    {
        position: absolute;
        content: '';
        inset: 5px;

        background: rgba(250, 40, 200, 0.1);
        // opacity: 0.1;
         filter: blur(1px);
        box-shadow: 0 0 5px 2px rgba(255, 0, 255, 0.5);
        border-radius: 7rem 1rem 10rem 1rem;

        @media screen and (max-width: 512px)
        {
            border-radius: 2rem;
       
        }

    }

    @media screen and (max-width: 512px)
    {
        border-radius: 2rem;
        margin-right: 0;
    }

    @media screen and (min-width: 1600px)
    {
        margin-right: 30%;
    }



`


function Main(props) {


    const variants = {
        hide: {
            opacity: 0,
            x: '20%'
        },
        animate: {
            opacity: 1,
            x: 0,
            transition:{
                duration: 0.3
            }
        }
    }



    useEffect(() =>
    {
       

    }, [])


  return (
    <MainStyle variants={variants} initial='hide' animate='animate'>
       {props.children}
      
    </MainStyle>
  )
}

export default Main
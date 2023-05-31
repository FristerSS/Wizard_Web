import React, {useMemo} from 'react'
import { styled } from 'styled-components'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import { motion } from 'framer-motion'

import {nanoid} from 'nanoid'

const Container = styled.div`
  position: relative;

  max-width: 100vw;
  min-height: 100vh;
  height: fit-content;
  overflow: hidden;

  display: grid;
  grid-template-columns: 0.3fr 1.3fr;

  row-gap: 10vh;

  &::before
  {
    position: absolute;
    content: '';
    inset: 0;
    background-image: linear-gradient(to right, black, rgb(5, 5, 5), rgb(10, 10, 10),  rgb(16, 16, 16) ,rgb(10, 10, 10),rgb(5, 5, 5), black);
    //background-image: url('./src/img/bg2.jpg');
    background-size: 100% 100%;
    z-index: -1;
  }


  
`

const Hex = styled(motion.div)`
    position: absolute;
   // background-image: url('./src/img/hexagon.png');
   // background-size: 100% 100%;

    left: 0;
    top: 0;

    width: 25%;
    height: 25%;

    transition: 0.4;

    background: rgba(255, 0, 50, 1);
    clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
    filter: blur(1px);
    opacity: 0.01;


    &:hover
    {
       opacity: 0.04;
    }

    &::before
    {
      position: absolute;
      content: '';
      inset: 0;
    
      
    }



`


function Layout() {

  const NavigationBar = useMemo(() => (<Navigation/>), [])

  
  const variants = {
    hidden: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  }

  const Hexagons = []

  for(let i = 0; i < 4; i++)
  {
    for(let j = 0; j < 4; j++)
    {
      Hexagons.push(<Hex key={nanoid()} style={{top: 25 * i + '%', left:  25 * j + '%'}}
        variants={variants}
        initial="hidden"
        animate={{opacity: 0.04, transition:{duration: 0.2, delay: 0.05 * j + i/3}}}
        
      />)
    }
  
  }

  

  return (
    <Container>
        {Hexagons}
        {/* <Hex style={{left: 0}}/>
        <Hex style={{left: '25%'}}/>
        <Hex style={{left: '50%'}}/>
        <Hex style={{left: '75%'}}/>

        <Hex style={{top: '25%', left: 0}}/>
        <Hex style={{top: '25%', left: '25%'}}/>
        <Hex style={{top: '25%', left: '50%'}}/>
        <Hex style={{top: '25%', left: '75%'}}/>

        
        <Hex style={{top: '50%', left: 0}}/>
        <Hex style={{top: '50%', left: '25%'}}/>
        <Hex style={{top: '50%', left: '50%'}}/>
        <Hex style={{top: '50%', left: '75%'}}/>

        
        <Hex style={{top: '75%', left: 0}}/>
        <Hex style={{top: '75%', left: '25%'}}/>
        <Hex style={{top: '75%', left: '50%'}}/>
        <Hex style={{top: '75%', left: '75%'}}/> */}

        {NavigationBar}
        <Outlet/>
    </Container>
  )
}

export default Layout
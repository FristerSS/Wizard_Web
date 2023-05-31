import {useEffect, useRef} from 'react'
import { styled } from 'styled-components'

import { motion,  useAnimationControls, useInView } from 'framer-motion'

const FooterStyle = styled(motion.footer)`
    position: relative;
    width: 70%;
    max-width: 800px;
    height: clamp(60px, 5vh, 200px);

    margin: 15px;
    margin-inline: auto;

    grid-column: 1/-1;
    

    color: ivory;
    font-size: 2rem;
    font-family: 'Playfair Display', serif;


    display: flex;
    justify-content: center;
    align-items: center;

    &::before
    {
    position: absolute;
    content: '';
    inset: 0;

    background-image: linear-gradient(to right, rgba(255, 0, 0, 0.05), rgba(255, 0, 255, 0.1), rgba(255, 0, 255, 0.1), rgba(255, 0, 255, 0.05), rgba(255, 0, 0, 0.1));
    border-radius: 4rem;

    filter: blur(1px);

    box-shadow: 0 0 5px 2px rgba(255, 0, 255, 0.5);
        

    }

    @media screen and (max-width: 768px)
    {
        font-size: 1.1rem;
    }

    @media screen and (max-width: 512px)
    {
        font-size: 0.9rem;
    }

`

function Footer() {

    const ref = useRef(null)
    const isInView = useInView(ref)
    const controls = useAnimationControls()

    const variants = {
        hide: {
            opacity: 0,
            x: '-20%'
        },
        visible: {
            opacity: 1,
            x: 0,
            transition:{
                duration: .3
            }
        }
    }

    useEffect(() =>
    {
        if(isInView)
        {
           controls.start('visible')
        }
    }, [isInView, controls])

    
  return (

     <FooterStyle ref={ref} variants={variants} animate={controls} initial='hide'>
         Created By frister@wp.pl
     </FooterStyle>

   
  )
}

export default Footer
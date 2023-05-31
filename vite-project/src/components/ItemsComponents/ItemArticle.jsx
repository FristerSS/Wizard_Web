import React from 'react'
import { styled } from 'styled-components'
import {motion} from 'framer-motion'
import { NavLink } from 'react-router-dom'

const imgSizeDesktop = {
    width: 75,
    height: 75
}

const imgSizeMobile = {
  width: 35,
  height: 35
}



const Container = styled(motion.article)`
    width: 80%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 0.4rem;
    
`

const ItemName = styled.p`
        overflow: hidden;
    a{
        position: relative;
        color: white;
        text-shadow: 0 0 1px black;
        font-size: 1.5rem;
        font-weight: bolder;
     

        &::before
        {
            position: absolute;
            content: '';
            left: 0;
            bottom: 0;
            width: 100%;
            height: 3%;
            background-color: white;
            box-shadow: 0 0 8px 1px rgba(255, 255, 255, 0.2);
            border-radius: 4rem;
     
    
            transition: 0.2s;
        }
    
        &:hover::before
        {
           transform: translateX(-80%);
        }

        @media screen and (max-width: 768px)
        {
            font-size: 1.3rem;
        }
    
        @media screen and (max-width: 400px)
        {
            font-size: 1.1rem;
        }
    }

    
   
`


const ItemText = styled.section`
    width: 100%;

    border-top: 1px solid purple;
    padding: 40px;
    border-radius: 4rem;
      
    background: rgba(200, 100, 255, 0.1);
    border: 1px solid rgb(200, 100, 255);
    
    color: white;
    text-shadow: 0 0 5px black;
    font-size: 1.2rem;
    font-weight: 300;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    
    @media screen and (max-width: 768px)
    {
        padding: 20px;
        font-size: 1rem;
    }

    @media screen and (max-width: 512px)
    {

        font-size: 0.7rem;
    }
  

`

const ItemImg = styled.div`
        
    margin-inline: 10px;

        img
        {

            width: ${imgSizeDesktop.width}px;
            height: ${imgSizeDesktop.height}px;

            border-radius: 1rem;
            box-shadow: 0 0 8px 1px rgba(200, 20, 255, 0.4),  0 0 8px 1px rgba(150, 70, 255, 0.4);

            @media screen and (max-width: 768px)
            {
                width: ${imgSizeMobile.width}px;
                height: ${imgSizeMobile.height}px;
            }
        }
`



function ItemArticle({name, img, content, attributes}) {
  const variants = {
    hidden: {
        opacity: 0,
        scale: 0,
        x: '-50%',
    },
    animate: {
        opacity: 1,
        scale: 1,
        x: '0',
        transition: {
            duration: 0.4
        }
    }
}
    const atributesList =  Array.isArray(attributes) ?
                            attributes.map(atribute =>
                                {
                                    return <p key={atribute?.name}>{atribute?.name}: {atribute?.value}</p>
                                })
                            : null


return (
<Container variants={variants} initial='hidden' animate='animate'>
    <ItemName>
       <NavLink to={`/items/${name}`}> {name}</NavLink>
    </ItemName>
    <ItemText>
        <ItemImg>
        {img && <img src={img}></img>}
        </ItemImg>
        {content}
        {atributesList}
    </ItemText>
</Container>
)
}

export default ItemArticle
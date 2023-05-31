import React from 'react'
import { styled } from 'styled-components'
import {motion} from 'framer-motion'
import {NavLink, Link } from 'react-router-dom'

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

const EnemyName = styled.p`
        overflow: hidden;
    a{
        position: relative;
        color: ${props => props.color};
        text-shadow: 0 0 1px black;
        font-size: 1.8rem;
        font-weight: bolder;
        

        &::before
        {
            position: absolute;
            content: '';
            left: 0;
            bottom: 0;
            width: 100%;
            height: 3%;
            background-color: ${props => props.color};
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


const EnemyText = styled.section`
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

const EnemyImg = styled.div`
        
    margin-inline: 10px;

        img
        {
            position: relative;
            width: ${imgSizeDesktop.width}px;
            height: ${imgSizeDesktop.height}px;


            border-radius: 1px;
           // box-shadow: 0 0 5px 1px ${props => props.color};

            @media screen and (max-width: 768px)
            {
                width: ${imgSizeMobile.width}px;
                height: ${imgSizeMobile.height}px;
            }
        }
`


const ItemsDrop = styled.div`
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 0.5rem;
        width: 90%;

        border-top: 1px solid rgb(200, 100, 255);
        
        img
        {
            position: relative;
            width: 40px;
            height: 40px;
            padding: 5px;
            margin-top: 15px;

            border-radius: 1px;
            box-shadow: 0 0 2px 1px rgb(200, 100, 255);

            @media screen and (max-width: 768px)
            {
                width: 22px;
                height:  22px;
            }

            transition: .2s;
            &:hover
            {
              scale: 1.2;
            }
        }
`



function EnemyArticle({name, health, speed, gold, score, damage, img, content, color, items}) {
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


return (
<Container variants={variants} initial='hidden' animate='animate'>
    <EnemyName color={color}>
       <NavLink to={`/enemies/${name}`}> {name}</NavLink>
    </EnemyName>
    <EnemyText>
        <EnemyImg color={color}>
        {img && <img src={img}></img>}
        </EnemyImg>
        <p style={{color: 'orange', textShadow: '0 0 10px black'}}>Health: {health}</p>
        <p style={{color: 'grey', textShadow: '0 0 10px black'}}>Speed: {speed}</p>
        <p style={{color: 'black', textShadow: '0 0 10px white'}}>Damage: {damage}</p>
        <p style={{color: 'yellow'}}>Gold: {gold}</p>
        <p style={{color: 'white'}}>Score: {score}</p>
         {content}
         <h3>Items:</h3>
         <ItemsDrop>

            {items.map(item =>
                {
                   return <Link key={item.name} to={`/items/${item.name}`}> <img src={item.src} alt={`Image ${item.name}`}></img> </Link> 
                })
            }
         </ItemsDrop>
    </EnemyText>
</Container>
)
}

export default EnemyArticle
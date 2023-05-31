import { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { NavLink, Link } from 'react-router-dom'

import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'

import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'


const imgSizeDesktop = {
    width: 75,
    height: 75
}

const imgSizeMobile = {
  width: 35,
  height: 35
}

const EnemyMain = styled(motion.div)`
  width: 80%;
  min-height: 40vh;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  
  background: rgba(200, 100, 255, 0.1);
  padding: 20px;

  border: 1px solid rgb(200, 100, 255);
  border-radius: 4rem;


  a{
    position: relative;
    color: white;
    overflow: hidden;
    letter-spacing: 2px;

    &::before
    {
        position: absolute;
        content: '';
        left: 0;
        bottom: 0;
        width: 100%;
        height: 10%;
        background-color: white;
        box-shadow: 0 0 8px 1px rgba(255, 255, 255, 0.2);
        border-radius: 4rem;
 

        transition: 0.2s;
    }

    &:hover::before
    {
       transform: translateX(-80%);
    }
  }

  img{
    border-radius: 50%;
    box-shadow: 0 0 8px 2px ${props => props.color};

    width: ${imgSizeDesktop.width}px;
    height: ${imgSizeDesktop.height}px;
    
    @media screen and (max-width: 768px)
    {
        width: ${imgSizeMobile.width}px;
        height: ${imgSizeMobile.height}px;
    }
  }

  
  @media screen and (max-width: 768px)
  {
      font-size: 1rem;
  }
  
` 

const EnemyStats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
   
  @media screen and (max-width: 768px)
  {
      gap: 0.5rem;
      font-size: 1rem;
  }

  @media screen and (max-width: 512px)
  {

      font-size: 0.7rem;
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
            box-shadow: none;

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

        a
        {
       
          
          &::before
          { 
            content: none;
          }
        }

`


function Enemy() {

  let {id} = useParams()
  const [enemy, setEnemy] = useState(null)

  const enemies = useSelector(state => state.gameInfo.enemies)

  useEffect(() =>
  {
    setEnemy(enemies.find(enemy => enemy.name === id))

  }, [])

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
   <>
      <Header>
          {enemy?.name}
      </Header>

      <Main>
      {enemy ?
        <EnemyMain color={enemy?.nameColor} variants={variants} initial='hidden' animate='animate'>
           
            <img src={'../'+enemy?.img}></img>
            <p>{enemy?.content}</p>
            <EnemyStats>
              {
                enemy ? 
                <>
                <p style={{color: 'orange', textShadow: '0 0 10px black'}}>Health: {enemy.health}</p>
                <p style={{color: 'grey', textShadow: '0 0 10px black'}}>Speed: {enemy.speed}</p>
                <p style={{color: 'black', textShadow: '0 0 10px white'}}>Damage: {enemy.damage}</p>
                <p style={{color: 'yellow'}}>Gold: {enemy.gold}</p>
                <p style={{color: 'white'}}>Score: {enemy.score}</p>
                <ItemsDrop>

                  {enemy.items.map(item =>
                      {
                        return <Link key={item.name} to={`/items/${item.name}`}> <img src={`../${item.src}`} alt={`Image ${item.name}`}></img> </Link> 
                      })
                  }
              </ItemsDrop>
                </>
                : null
              }
            </EnemyStats>
            <NavLink to={'/enemies'}>Back</NavLink>
        </EnemyMain>
        : 'Item not found !'}
      </Main>
      <Footer>
      </Footer>
  </>
  )
}

export default Enemy

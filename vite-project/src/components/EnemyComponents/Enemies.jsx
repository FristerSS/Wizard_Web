import { useState, useEffect} from 'react'
import { styled } from 'styled-components'

import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'
import EnemyArticle from './EnemyArticle'

import { useSelector } from 'react-redux'



const InputContainer = styled.div`
  width: 20%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  input[type='radio']
  {
    scale: 0.5;
    background-color: black;
    border: 2px solid blue;
  }

  @media screen and (max-width: 768px)
  {
      font-size: 1.3rem;
  }

  @media screen and (max-width: 400px)
  {
      font-size: 1.1rem;
  }

`


function Enemies() {
  const [enemy, setEnemy] = useState([])
  const [type, setType] = useState('all')
  const enemyStore = useSelector(state => state.gameInfo.enemies)
  let content = []

    useEffect(() =>
    {
        setEnemy( enemyStore )
       
    }, [])

    
    if(enemy)
    {
        content = enemy.map(enemy =>
            {
                if(enemy.type === type || type === 'all')
                return <EnemyArticle key={enemy.name} name={enemy.name} health={enemy.health} speed={enemy.speed} gold={enemy.gold} score={enemy.score} damage={enemy.damage} img={enemy.img} content={enemy.content} color={enemy.color} items={enemy.items}/>
              
               
            })
    }


  return (
   <>
      <Header>
          Enemies
      </Header>

      <Main>
        <>
        {content}
        </>
      </Main>
      <Footer>

      </Footer>
  </>
  )
}

export default Enemies

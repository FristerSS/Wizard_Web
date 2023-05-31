import { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'

import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'

import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

import { ButtonPrimary } from '../ButtonsInputs'

const imgSizeDesktop = {
  width: 75,
  height: 75
}

const imgSizeMobile = {
width: 35,
height: 35
}



const ItemMain = styled(motion.div)`
  width: 80%;
  min-height: 40vh;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  
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
      padding: 5px;
      gap: 1rem;
      font-size: 1rem;
  }

  @media screen and (max-width: 512px)
  {
      font-size: 0.7rem;
  }

  
  
` 


function Item() {

  let {id} = useParams()
  const [item, setItem] = useState(null)
  const navigate = useNavigate()

  const items = useSelector(state => state.gameInfo.items)
  const attributes = item?.attributes

  console.log(attributes);

  useEffect(() =>
  {
    setItem(items.find(item => item.name === id))

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

const handleBack = () =>
{
  navigate(-1)
}

const atributesList =  Array.isArray(attributes) ?
attributes.map(atribute =>
    {
        return <p key={atribute?.name}>{atribute?.name}: {atribute?.value}</p>
    })
: null
  

  return (
   <>
      <Header>
          {item?.name}
      </Header>

      <Main>
      {item ?
        <ItemMain color={item?.nameColor} variants={variants} initial='hidden' animate='animate'>
           
            <img src={'../'+item?.img}></img>
            <p>{item?.content}</p>
            {atributesList}
            <ButtonPrimary onClick={handleBack}>Back</ButtonPrimary>
        </ItemMain>
        : 'Item not found !'}
      </Main>
      <Footer>
      </Footer>
  </>
  )
}

export default Item

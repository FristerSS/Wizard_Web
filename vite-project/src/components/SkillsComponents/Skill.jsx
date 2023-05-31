import { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'

import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'

import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

const SkillMain = styled(motion.div)`
  width: 80%;
  min-height: 40vh;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
    
  background: rgba(200, 100, 255, 0.1);

  padding: 10px;

  border-top: 1px solid ${props => props.color};
  border-bottom: 1px solid ${props => props.color};
  border-radius: 4rem;

  a{
    position: relative;
    color: white;
    overflow: hidden;

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
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 0 0 8px 2px ${props => props.color};

    
    @media screen and (max-width: 768px)
    {
        width: 50px;
        height: 50px;
    }
  }

  
  @media screen and (max-width: 768px)
  {
      font-size: 1rem;
  }
` 


function Skill() {

  let {id} = useParams()
  const [skill, setSkill] = useState(null)

  const skills = useSelector(state => state.gameInfo.skills)


  useEffect(() =>
  {
    setSkill(skills.find(skill => skill.name === id))

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
          {skill?.name}
      </Header>

      <Main>
      {skill ?
        <SkillMain color={skill?.nameColor} variants={variants} initial='hidden' animate='animate'>
           
            <img src={'../'+skill?.img}></img>
            <p>{skill?.content}</p>
            <NavLink to={'/skills'}>Back</NavLink>
        </SkillMain>
        : 'Skill not found !'}
      </Main>
      <Footer>
      </Footer>
  </>
  )
}

export default Skill

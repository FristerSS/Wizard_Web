import { styled } from 'styled-components'
import { motion} from 'framer-motion'
import { NavLink } from 'react-router-dom'

const Container = styled(motion.article)`
    width: 80%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 0.6rem;
    
`

const SkillName = styled.p`
        overflow: hidden;
    a{
        position: relative;
        color: ${props => props.color};
        text-shadow: 0 0 1px black;
        font-size: 1.8rem;
        font-weight: bolder;

        letter-spacing: 2px;
     

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
    
        @media screen and (max-width: 512px)
        {
            font-size: 1.1rem;
        }
    }

    
   
`


const SkillText = styled.section`
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

    display: grid;
    grid-template-columns: 0.3fr 1fr;

    
    @media screen and (max-width: 768px)
    {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;

        padding: 20px;

        font-size: 1rem;
    }

    @media screen and (max-width: 512px)
    {
        font-size: 0.7rem;
    }
    
  

`

const SkillImg = styled.div`
        
    margin-inline: 10px;

        img
        {

            width: 100px;
            height: 100px;

            border-radius: 1px;
            box-shadow: 0 0 5px 1px ${props => props.color};

            @media screen and (max-width: 768px)
            {
                width: 50px;
                height: 50px;
            }
        }
`




function SkillArticle({name, nameColor, content, img}) {

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
        <SkillName color={nameColor}>
           <NavLink to={`/skills/${name}`}> {name}</NavLink>
        </SkillName>
        <SkillText>
            <SkillImg color={nameColor}>
            {img && <img src={img}></img>}
            </SkillImg>
            {content}
        </SkillText>
    </Container>
  )
}

export default SkillArticle
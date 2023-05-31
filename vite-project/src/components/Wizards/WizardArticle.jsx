
import { styled } from 'styled-components'
import {motion} from 'framer-motion'

const imgSizeDesktop = {
    width: 100,
    height: 100
}

const imgSizeMobile = {
  width: 50,
  height: 50
}



const Container = styled(motion.article)`
    width: 80%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    gap: 2rem;

    @media screen and (max-width: 768px)
    {
        gap: 1rem;
    }
    
`

const WizardName = styled.p`
  
        position: relative;
        color: ${props => props.color};
        text-shadow: 0 0 1px black;
        font-size: 1.8rem;
        font-weight: bolder;

        letter-spacing: 2px;
     

        @media screen and (max-width: 768px)
        {
            font-size: 1.3rem;
        }
    
        @media screen and (max-width: 512px)
        {
            font-size: 1rem;
        }
    

    
   
`


const WizardText = styled.section`

    width: 75%;
    border-top: 1px solid purple;
    padding: 40px;
    border-radius: 4rem;
    background: rgba(200, 100, 255, 0.1);   
    border: 1px solid rgb(200, 100, 255); 

    color: white;
    text-shadow: 0 0 5px black;
    font-size: 1.1rem;
    font-weight: 300;

    display: flex; 
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    
    @media screen and (max-width: 768px)
    {
        padding: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;

        font-size: 0.9rem;
    }
    
    @media screen and (max-width: 512px)
    {
        font-size: 0.7rem;
    }

`

const WizardImg = styled.div`
        
    margin-inline: 10px;

        img
        {
            width: ${imgSizeDesktop.width}px;
            height: ${imgSizeDesktop.height}px;

            border-radius: 1rem;
            box-shadow: 0 0 10px 1px ${props => props.color};

            background: rgba(220, 120, 255, 0.2);
            
            transition: .2s;
           
            &:hover
            {
                scale: 1.1;
            }

            @media screen and (max-width: 768px)
            {
                width: ${imgSizeMobile.width}px;
                height: ${imgSizeMobile.height}px;
            }
        }
`


const WizardLevelUpContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5px;

        background: rgba(200, 120, 255, 0.2);
        border: 1px solid rgb(200, 100, 255); 
        border-radius: 1rem;

        p
        {
            display: flex;
            justify-content: center;
        }

        @media screen and (max-width: 512px)
        {
            font-size: 0.7rem;
        }

`   




function WizardArticle({name, color, content, img, levelUp}) {

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

    const LevelUpUpgrades = Array.isArray(levelUp) ?
           
                            levelUp.map(level =>
                                {
                                    return <p key={level.name}>{level.name}: {level.value}</p>
                                })

                            :
                            null
                            


  return (
    <Container variants={variants} initial='hidden' animate='animate'>
        <WizardName color={color}>
          {name}
        </WizardName>
        <WizardText>
            <WizardImg color={color}>
            {img && <img src={img}></img>}
            </WizardImg>
            {content}
            <p>Level up: </p>
            <WizardLevelUpContainer>
                {LevelUpUpgrades}
            </WizardLevelUpContainer>
        </WizardText>
    </Container>
  )
}

export default WizardArticle
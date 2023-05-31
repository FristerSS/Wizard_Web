import { styled } from 'styled-components'
import { motion} from 'framer-motion'

const imgSizeDesktop = {
    width: 50,
    height: 50
}

const imgSizeMobile = {
  width: 35,
  height: 35
}



const Container = styled(motion.article)`
    width: 80%;
    height: fit-content;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    gap: 2rem;

    @media screen and (max-width: 768px)
    {
        flex-direction: column;
        gap: 1.5rem;
    }
    
`

const HelperName = styled.p`
  
        position: relative;
        color: ${props => props.color};
        text-shadow: 0 0 1px black;
        font-size: 1.8rem;
        font-weight: bolder;
        letter-spacing: 2px;

        @media screen and (max-width: 768px)
        {
            font-size: 1.2rem;
        }
    
        @media screen and (max-width: 400px)
        {
            font-size: 1rem;
        }
    

    
   
`


const HelperText = styled.section`

    width: 75%;
    border-top: 1px solid purple;
    padding: 40px;
    border-radius: 1rem;
    background: rgba(200, 100, 255, 0.1);   
    border: 1px solid rgb(200, 100, 255); 

    color: white;
    text-shadow: 0 0 5px black;
    font-size: 1.1rem;
    font-weight: 300;

    display: grid;
    grid-template-columns: 0.3fr 1fr;

    
    @media screen and (max-width: 768px)
    {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;

        font-size: 0.9rem;
        padding: 20px;
    }

    @media screen and (max-width: 512px)
    {
        font-size: 0.7rem;
    }
    
  

`

const HelperImg = styled.div`
        
    margin-inline: 10px;

        img
        {
            width: ${imgSizeDesktop.width}px;
            height: ${imgSizeDesktop.height}px;

            border-radius: 1rem;
            box-shadow: 0 0 10px 1px ${props => props.color};

            background: rgba(220, 120, 255, 0.2);

            @media screen and (max-width: 768px)
            {
                width: ${imgSizeMobile.width}px;
                height: ${imgSizeMobile.height}px;
            }
        }
`




function HelperArticle({name, color, content, img}) {

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
        <HelperName color={color}>
          {name}
        </HelperName>
        <HelperText>
            <HelperImg color={color}>
            {img && <img src={img}></img>}
            </HelperImg>
            {content}
        </HelperText>
    </Container>
  )
}

export default HelperArticle
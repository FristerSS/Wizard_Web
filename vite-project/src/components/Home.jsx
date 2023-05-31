import { useState} from 'react'


import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { styled } from 'styled-components'


const ArticleHome = styled.article`
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 40px;

      width: 100%;
      min-height: 50vh;
      height: fit-content;

      color: gold;
      letter-spacing: 2px;
      font-family: 'Playfair Display', serif;



      @media screen and (max-width: 768px)
      {
        gap: 1rem;
        padding: 20px;
        font-size: 1.2rem;
      }

      @media screen and (max-width: 512px)
      {
        padding: 10px;
        font-size: 0.9rem;
      }
`




function Home() {
  
  return (
   <>
      <Header>
          Home
      </Header>

      <Main>
        <ArticleHome>
         <p> Welcome to the fascinating world of Magic Forest: Return of the Dinosaurs! Get ready for an unforgettable adventure where three male wizards face off against an army of dinosaurs in a fight to save both the world of magic and these amazing creatures.</p>

          <p>Playing the role of one of the three heroes, you will have the opportunity to experience extraordinary challenges, solve puzzles and lead epic battles filled with magic and danger. Your goal is to stop the mighty Morvagor, the personification of darkness, from gaining complete control of the world.</p>
         </ArticleHome>
      </Main>
      <Footer>

      </Footer>
  </>
  )
}

export default Home

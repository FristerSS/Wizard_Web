import { useState } from 'react'


import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Navigation from '../layouts/Navigation'

import { styled } from 'styled-components'

const ArticleAbout = styled.article`
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 40px;

      width: 100%;
      min-height: 50vh;
      height: fit-content;

      color: gold;

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







function About() {

  return (
   <>
      <Header>
          About
      </Header>

      <Main>
        <ArticleAbout>
            <p>The Magic Forest: Return of the Dinosaurs is an exciting 2D game that will transport you to a world full of magic and danger. In this game, you will play as one of three male wizards who face an army of dinosaurs to save the world of magic and restore balance</p>
        </ArticleAbout>
      </Main>
      <Footer>

      </Footer>
  </>
  )
}

export default About

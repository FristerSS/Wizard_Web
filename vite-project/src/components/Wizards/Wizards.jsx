import { useEffect, useState } from 'react'


import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'

import { useSelector } from 'react-redux'
import WizardArticle from './WizardArticle'




function Wizards() {
  const [wizards, setWizards] = useState([])
  const wizardsStore = useSelector(state => state.gameInfo.wizards)
  let content = []

    useEffect(() =>
    {
        setWizards( wizardsStore )

    }, [])

    
    if(wizards)
    {
        content = wizards.map(wizard =>
            {
                return <WizardArticle key={wizard.name} name={wizard.name} color={wizard.color} content={wizard.content} img={wizard.img} levelUp={wizard.levelUp}/>
            })
    }
    


  return (
   <>
      <Header>
         Wizards
      </Header>

      <Main>
            {content}
      </Main>
      <Footer>

      </Footer>
  </>
  )
}

export default Wizards

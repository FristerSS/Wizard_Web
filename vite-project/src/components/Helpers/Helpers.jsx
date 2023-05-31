import { useEffect, useState } from 'react'


import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'
import Navigation from '../../layouts/Navigation'

import { gameInfoActions } from '../../store/gameInfoSlice'
import { useDispatch, useSelector } from 'react-redux'
import HelperArticle from './HelperArticle'




function Helpers() {
  const [helpers, setHelpers] = useState([])
  const helpersStore = useSelector(state => state.gameInfo.helpers)
  let content = []

  const reduxDispatch = useDispatch()

    useEffect(() =>
    {
        setHelpers( helpersStore )
        console.log(helpers);

    }, [])

    
    if(helpers)
    {
        content = helpers.map(helper =>
            {
                return <HelperArticle key={helper.name} name={helper.name} color={helper.color} content={helper.content} img={helper.img}/>
            })
    }
    


  return (
   <>
      <Header>
          Helpers
      </Header>

      <Main>
            {content}
      </Main>
      <Footer>

      </Footer>
  </>
  )
}

export default Helpers

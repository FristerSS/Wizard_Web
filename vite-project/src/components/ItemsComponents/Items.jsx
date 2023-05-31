import { useState, useEffect} from 'react'
import { styled } from 'styled-components'

import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'
import ItemArticle from './ItemArticle'

import { useSelector } from 'react-redux'
//import { getItems } from '../../store/gameInfoSlice'


const SearchItems = styled.section`
    width: 80%;

    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 1.5rem;

    p
    {
      margin-bottom: 2rem;
      color: gold;
    }

    @media screen and (max-width: 768px)
    {
      font-size: 1.3rem;
    }

    @media screen and (max-width: 512px)
    {
      font-size: 1rem;
    }

`

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
      font-size: 1.1rem;
  }

  @media screen and (max-width: 400px)
  {
      font-size: 0.9rem;
  }

`


function Items() {
  const [items, setItems] = useState([])
  const [type, setType] = useState('all')
  const itemsStore = useSelector(state => state.gameInfo.items)
  let content = []


    useEffect(() =>
    {
        setItems( itemsStore )

    }, [])

    
    if(items)
    {
        content = items.map(item =>
            {
                if(item.type === type || type === 'all')
                return <ItemArticle key={item.name} name={item.name} img={item.img} content={item.content} attributes={item.attributes}/>
              
               
            })
    }

    const handlerCheck = (e) =>
    {
      setType(e.target.value)
    }

  return (
   <>
      <Header>
          Items
      </Header>

      <Main>
        <>
        <SearchItems>
        <p>Search items:</p>

        <InputContainer>
        <label htmlFor='all'>All</label>
        <input type='radio' id='all' name='item' value='all' onChange={handlerCheck}/>
        </InputContainer>

        <InputContainer>
        <label htmlFor='hat'>Hat</label>
        <input type='radio' id='hat' name='item' value='hat' onChange={handlerCheck}/>
        </InputContainer>

        <InputContainer>
        <label htmlFor='armor'>Armor</label>
        <input type='radio' id='armor' name='item' value='armor' onChange={handlerCheck}/>
        </InputContainer>
        <InputContainer>

        <label htmlFor='boots'>Boots</label>
        <input type='radio' id='boots' name='item' value='boots' onChange={handlerCheck}/>
        </InputContainer>

        <InputContainer>

        <label htmlFor='weapon'>Weapon</label>
        <input type='radio' id='weapon' name='item' value='weapon' onChange={handlerCheck}/>
        </InputContainer>
                
        <InputContainer>

        <label htmlFor='candy'>Candy</label>
        <input type='radio' id='candy' name='item' value='candy' onChange={handlerCheck}/>
        </InputContainer>

        <InputContainer>

        <label htmlFor='gem'>Gem</label>
        <input type='radio' id='gem' name='item' value='gem' onChange={handlerCheck}/>
        </InputContainer>
        
    
      
        </SearchItems>
        {content}
        </>
      </Main>
      <Footer>

      </Footer>
  </>
  )
}

export default Items

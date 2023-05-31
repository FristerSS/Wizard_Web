import { useEffect, useState } from 'react'


import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'
import SkillArticle from './SkillArticle'

import { useSelector } from 'react-redux'




function Skills() {
  const [skills, setSkills] = useState([])
  const skillsStore = useSelector(state => state.gameInfo.skills)
  let content = []


    useEffect(() =>
    {
        setSkills( skillsStore )
        console.log(skills);

    }, [])

    
    if(skills)
    {
        content = skills.map(skill =>
            {
                return <SkillArticle key={skill.name} name={skill.name} nameColor={skill.nameColor} content={skill.content} img={skill.img}/>
            })
    }
    


  return (
   <>
      <Header>
          Skills
      </Header>

      <Main>
            {content}
      </Main>
      <Footer>

      </Footer>
  </>
  )
}

export default Skills

import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

import { useNavigate } from 'react-router-dom'

const ErrorStyle = styled.section`
  position: absolute;
  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);

  color: rgb(60, 60, 60);
  text-shadow: 0 0 5px black;
  letter-spacing: 0.5rem;
  font-weight: bolder;

  display: grid;
  place-items: center;

  font-size: 2rem;
`



function Error() {
  const navigate = useNavigate()

  useEffect(() =>
  {
      navigate('/')
  })

  return (
    <ErrorStyle>
        <p>Error</p>
        <div>Back to home:
            <NavLink to="/">Home</NavLink>
        </div>
    </ErrorStyle>
  )
}

export default Error
import React from 'react'
import {styled} from 'styled-components'
import { NavLink, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { motion} from 'framer-motion'

import { loginActions } from '../store/loginSlice'

import { ButtonPrimary } from '../components/ButtonsInputs'

const NavigationStyle = styled(motion.nav)`
    position: fixed;
    top: 30%;

    color: white;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding: 15px;
    

    height: 50vh;
    width: clamp(130px, 10vw, 150px);
    overflow: x-scroll;

    grid-column: 1;
    grid-row: 2;

    row-gap: 0.5rem;
    margin-left: 10px;

    gap: 1rem;


    z-index: 1;

    &::before
    {
        position: absolute;
        content: '';
        inset: 5px;

        background: rgba(255, 0, 255, 0.1);
   
        filter: blur(1px);
        border-radius: 2rem;
        box-shadow: 0 0 2px 2px rgba(255, 0, 0, 0.2);
       
        z-index: -1;
    }

    & > a
    {
        position: relative;
        color: white;
        text-decoration: none;
        overflow: hidden;

        text-shadow: 1px 1px 1px black, -1px -1px 1px black;

        &::before
        {
            position: absolute;
            content: '';
            left: 0;
            bottom: 0;
            width: 100%;
            height: 10%;
            background-color: white;
            box-shadow: 0 0 8px 1px rgba(255, 255, 255, 0.2);
            border-radius: 4rem;
     

            transition: 0.2s;
        }

        &:hover::before
        {
           transform: translateX(-80%);
        }


    }

    & > a.active
    {
        color: gold;

        &::before
        {
            position: absolute;
            content: '';
            left: 0;
            bottom: 0;
            width: 100%;
            height: 10%;
            background-color: gold;
            box-shadow: 0 0 8px 1px rgba(255, 255, 255, 0.2);
            border-radius: 4rem;
     

            transition: 0.2s;
        }
    }

    @media screen and (max-width: 512px)
    {
        font-size: 0.8rem;
        width: 20%;
        left: 0;
    }


`

function Navigation() {

   
    const user = useSelector(state => state.login.stateLogin)

    const reduxDispatch = useDispatch()
    const navigate = useNavigate()


    const variants = {
        hide: {
            opacity: 0,
            x: '-20%'
        },
        animate: {
            opacity: 1,
            x: 0,
            transition:{
                duration: 1
            }
        }
    }
    

    const handlerLogout = () =>
    {
        reduxDispatch(loginActions.logout())
        navigate('/', {replace: true})
    }

  return (
    <NavigationStyle variants={variants} initial='hide' animate='animate'>
        {!user.logged ? 
        <>
        <NavLink to='/register'>Register</NavLink>
        <NavLink to='/login'>Login</NavLink>
        </>
        :
        <>
        <p style={{margin: '4px', letterSpacing: '1px', wordBreak: 'break', fontSize: '0.9rem'}}>Welcome!</p>
        <ButtonPrimary onClick={handlerLogout}>Logout</ButtonPrimary>
        </> 
        }
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/items'>Items</NavLink>
        <NavLink to='/skills'>Skills</NavLink>
        <NavLink to='/enemies'>Enemy</NavLink>
        <NavLink to='/helpers'>Helper</NavLink>
        <NavLink to='/wizards'>Wizards</NavLink>
        <NavLink to='/about'>About</NavLink>
        
        {user.role === 'admin' ? 
        <NavLink to='/admin'>AdminPanel</NavLink>
        :
        null
        }
        
    </NavigationStyle>
  )
}

export default Navigation
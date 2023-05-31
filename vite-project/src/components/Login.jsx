import { useEffect, useState} from 'react'
import { styled } from 'styled-components'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import { loginActions, login } from '../store/loginSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'

import { Snackbar, Alert } from '@mui/material'

import { ButtonPrimary, InputPrimary } from './ButtonsInputs'


const LoginContainer = styled.section`
    width: 80%;
    min-height: 80%;
    height: fit-content;
    border: 1px solid rgb(200, 100, 255);
    background: rgba(200, 100, 255, 0.1);
    border-radius: 4rem;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 4rem;

    @media screen and (max-width: 768px)
    {
       gap: 1rem;
       width: 90%;
       font-size: 1.1rem;
    }

    @media screen and (max-width: 512px)
    {
       font-size: 0.8rem;
    }
    


`

const EmailContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    gap: 0.4rem;

    @media screen and (max-width: 768px)
    {
        gap: 0.1rem;
        font-size: 1.1rem;

    }
    
    @media screen and (max-width: 512px)
    {
        font-size: 0.9rem;

    }

    input
    {
      @media screen and (max-width: 512px)
      {
          font-size: 0.6rem;
  
      }
    }
`


const PasswordContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    gap: 0.4rem;

    @media screen and (max-width: 768px)
    {
        gap: 0.1rem;
        font-size: 1.1rem;

    }

    @media screen and (max-width: 512px)
    {
        font-size: 0.9rem;

    }
`

const ButtonsContainer = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;

    margin-bottom: 1rem;
`

const WelcomeContainer = styled.section`
    display: grid;
    place-items: center;

    width: 100%;
    height: 80%;

    @media screen and (max-width: 768px)
    {
      font-size: 1.4rem;
    }

    @media screen and (max-width: 512px)
    {
      font-size: 1.2rem;
    }

`



function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [open, setOpen] = useState(false)
  const [messageSnackbar, setMessageSnackbar] = useState('')
  const [statusSnackbar, setStatusSnackbar] = useState('success')

  const user = useSelector(state => state.login.stateLogin)

  const reduxDispatch = useDispatch()
  const navigate = useNavigate()

  const emailValid = (email) =>
  {

    if(email.includes('@') && email.length > 3)
    {
        console.log('valid');
        return true
    }else
    {
        setStatusSnackbar('error')
        setMessageSnackbar('Email is not valid !')
        setOpen(true)
        console.log('email is not valid');
        return false
    }


  }

  const passwordValid = (password) =>
  {
    if(password.length < 6)
    {
        setStatusSnackbar('error')
        setMessageSnackbar('Password is not valid !')
        setOpen(true)
        console.log('password is not valid');
        return false
    }
    console.log('valid');
    return true
  }


  const handlerLogin = () =>
  {

    if(!email || !password)
    {
      setStatusSnackbar('error')
      setMessageSnackbar('Fields cannot be empty !')
      setOpen(true)
      return
    }

    if(!emailValid(email) || !passwordValid(password))
    return
    
    reduxDispatch(login({email, password}))

    // if(!user.logged)
    // {
    //   setStatusSnackbar('error')
    //   setMessageSnackbar('Login or password is invalid!')
    //   setOpen(true)
    // }   


    setEmail('')
    setPassword('')
  }

  useEffect(() =>
  {
    if(user.logged)
    {   
        setStatusSnackbar('success')
        setMessageSnackbar('Success !')
        setOpen(true)
    }
     

  }, [user])

  const handleClose = (e, reason) =>
  {
    if(reason === 'clickway')
        return

    setOpen(false)
  }

  const handleNavigateRegister = () =>
  {
    navigate('/register', {replace: true})
  }
 
  return (
   <>
      <Header>
          Login
      </Header>

      <Main>
           {user.logged ? 
           <WelcomeContainer>
           <p>Welcome </p>
           <p>{user.user}</p>
           </WelcomeContainer> 
            :
            <LoginContainer>
                 <h2>Login</h2>
                <EmailContainer>
                    <label htmlFor='email'>Email</label>
                    <InputPrimary type='text' email='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)}></InputPrimary>
                </EmailContainer>
                <PasswordContainer>
                    <label htmlFor='password'>Password</label>
                    <InputPrimary type='password' name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}></InputPrimary>
                </PasswordContainer>
            <ButtonPrimary onClick={handlerLogin}>Login</ButtonPrimary>
            <ButtonsContainer>
                <p>Need Account?</p>
              <ButtonPrimary onClick={handleNavigateRegister}> Register</ButtonPrimary> 
            </ButtonsContainer>
            </LoginContainer>
            }
      </Main>
      <Footer>

      </Footer>


      <Snackbar
        autoHideDuration={2000}
        open={open}
       >
            <Alert onClose={handleClose} severity={statusSnackbar} sx={{ width: '100%' }}>
                 {messageSnackbar}
            </Alert>
        </Snackbar>

                
       
  </>
  )
}

export default Login

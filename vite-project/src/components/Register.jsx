import { useEffect, useState} from 'react'
import { styled } from 'styled-components'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Alert, Snackbar } from '@mui/material'

import { ButtonPrimary, InputPrimary } from './ButtonsInputs'

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase'


const RegisterContainer = styled.section`
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
        padding: 10px;
        gap: 0.5rem;
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
        font-size: 1.3rem;

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



function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [open, setOpen] = useState(false)
  const [messageSnackbar, setMessageSnackbar] = useState('')
  const [statusSnackbar, setStatusSnackbar] = useState('success')

  const user = useSelector(state => state.login.stateLogin)

  const navigate = useNavigate()

  
  const emailValid = (email) =>
  {
    if(email.includes('@') && email.length > 3)
    {
        console.log('valid');
        return true
    }else
    {
        console.log('email is not valid');
        setStatusSnackbar('error')
        setOpen(true)
        setMessageSnackbar('Invalid Email !')
    }


  }

  const passwordValid = (password) =>
  {
    if(password.length < 6)
    {
        setStatusSnackbar('error')
        setOpen(true)
        setMessageSnackbar('Invalid password !')
        return false
    }
    console.log('valid');
    return true
  }

  const handlerRegister = () =>
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

    createUserWithEmailAndPassword(auth, email, password)
    .then(user =>
        {
            setStatusSnackbar('success')
            setOpen(true)
            setMessageSnackbar('Success !')
            localStorage.setItem('email', user.user.email)
            localStorage.setItem('password', password)

            setTimeout(() =>
            {
                navigate('/login', {replace: true})
            }, 1200)

        })
    .catch((err) =>
    {
        console.log(err.code);

        if(err.code === 'auth/email-already-in-use')
        {
            setStatusSnackbar('error')
            setOpen(true)
            setMessageSnackbar('Email is alreade in use !')
        }

    })
    
    

    

    console.log('register');

    

    setEmail('')
    setPassword('')
  }

  useEffect(() =>
  {
    if(user.logged)
        navigate('/', {replace: true})

  }, [user])

  const handleClose = (e, reason) =>
  {
        if(reason === 'clickway')
            return

        setOpen(false)
  }

  const handleNavigateLogin = () =>
  {
    navigate('/login', {replace: true})
  }
 
  return (
   <>
    <Alert variant='outlined' severity='success' style={{position: 'absolute', left: '-50%', top: '0'}}>
                    Test
    </Alert>
      <Header>
          Register
      </Header>

      <Main>
            <RegisterContainer>
                <h2>Register</h2>
                <EmailContainer>
                    <label htmlFor='email'>Email</label>
                    <InputPrimary type='text' name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)}></InputPrimary>
                </EmailContainer>
                <PasswordContainer>
                    <label htmlFor='password'>Password</label>
                    <InputPrimary type='password' name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}></InputPrimary>
                </PasswordContainer>
            <ButtonPrimary onClick={handlerRegister}>Register</ButtonPrimary>
            <ButtonsContainer>
                <p>Have account ? </p>
              <ButtonPrimary onClick={handleNavigateLogin}> Login</ButtonPrimary> 
            </ButtonsContainer>
            </RegisterContainer>
            
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

export default Register

import { useState } from 'react'
import { useSelector } from 'react-redux'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'






function AdminPanel() {
  const user = useSelector(user => user.login.stateLogin)

  return (
   <>
      <Header>
          AdminPanel
      </Header>

      <Main>
            {user.role === 'admin' ? 
                'This is admin panel'
                :
                'You arent admin'
            }
         
      </Main>
      <Footer>

      </Footer>
  </>
  )
}

export default AdminPanel

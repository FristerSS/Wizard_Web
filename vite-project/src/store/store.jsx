import {configureStore} from '@reduxjs/toolkit'
import gameInfoReducer from './gameInfoSlice'
import loginReducer from './loginSlice'

const store = configureStore({
    reducer:{
        gameInfo: gameInfoReducer,
        login: loginReducer
    }
})

export default store
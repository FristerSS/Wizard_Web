import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase'

const login = createAsyncThunk('login/fetchLogin', async ({email, password}) =>
{
     let response = await signInWithEmailAndPassword(auth, email, password)
    .then(user =>
        {

           return {email: user.user.email, password}
        })
    .catch((err) =>
    {
        console.log(err);
    })

    return response

})


const initialState = {
    stateLogin: {
        user: null,
        role: null,
        logged: false
    }
}



const loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers:{
        logout: (state, actions) =>
        {
            let resoponse = signOut(auth)
            .then(() =>
            {
                return true
            })
            .catch((err) =>
            {
                console.log(err);
                return false
            })

            if(!resoponse)
            return

            state.stateLogin = {
                user: null,
                role: null,
                logged: false
            }

            return state
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) =>
        {

            if(!action.payload?.email || !action.payload?.password)
                return
               
           state.stateLogin = {
                    user: action.payload.email,
                    role: 'user',
                    logged: true
                }
    

            console.log(action.payload);
        })
        .addCase(login.rejected, (err) =>
        {
            console.log('rejected');
        })
    }
})


export default loginSlice.reducer

const loginActions = loginSlice.actions

export {loginActions, login}
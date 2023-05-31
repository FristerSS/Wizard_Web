import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import Home from './components/Home.jsx'
import Error from './components/Error.jsx'
import Layout from './layouts/Layout.jsx'
import About from './components/About.jsx'
import Items from './components/ItemsComponents/Items.jsx'
import Item from './components/ItemsComponents/Item.jsx'
import Skills from './components/SkillsComponents/Skills.jsx'
import Skill from './components/SkillsComponents/Skill.jsx'
import Enemies from './components/EnemyComponents/Enemies.jsx'
import Enemy from './components/EnemyComponents/Enemy.jsx'
import Helpers from './components/Helpers/Helpers'
import Wizards from './components/Wizards/Wizards'
import Login from './components/Login.jsx'
import Register from './components/Register'

import {Provider} from 'react-redux'
import store from './store/store.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useSelector } from 'react-redux'

import AdminPanel from './components/AdminPanel.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Home/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='items' element={<Items/>}/>
            <Route path='items/:id' element={<Item/>}/>
            <Route path='skills' element={<Skills/>}/>
            <Route path='skills/:id' element={<Skill/>}/>
            <Route path='enemies' element={<Enemies/>}/>
            <Route path='enemies/:id' element={<Enemy/>}/>
            <Route path='helpers' element={<Helpers/>}/>
            <Route path='wizards' element={<Wizards/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='admin' element={<AdminPanel/>}/>
            
            <Route path='/*' element={<Error />}/>
        </Route>

    </Routes>
    </BrowserRouter>
    </Provider>

)

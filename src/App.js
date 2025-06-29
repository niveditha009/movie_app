import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import "./App.css"
import { acttion, comedy, horror, romance } from './urls'
import { originals } from './urls'

import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
function App() {
  return (
    <div className='App'>
    <NavBar/>
    <Banner/>
    <RowPost title="Netflix Originals" url={originals}/>
    <RowPost title="Action" isSmall url={acttion}/>
    <RowPost title="Comedy" isSmall url={comedy}/>
    <RowPost title="Horror" isSmall url={horror}/>
    <RowPost title="Romance" isSmall url={romance}/>
    </div>
  )
}

export default App

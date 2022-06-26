import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import {Container, Nav} from 'react-bootstrap'
import About from './pages/About'
import Store from './pages/Store'
import Home from './pages/Home'
import { Navbar } from './pages/Navbar'
import { ShoppingCartProvider } from './context/shoppingCartContext'

function App() {

  return ( 
  <ShoppingCartProvider>
    <Navbar/>
      <Container className='nb-4'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/store' element={<Store/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
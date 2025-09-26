import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { useState } from 'react'
import './App.css'

import Home from './componentes/home'
import Informativo from './componentes/informativo'
import Favorito from './componentes/favorito'
import Original from './componentes/original'
import Detalle from './componentes/detalles'

function App() {
  //Con Router creamos nuestras ventanas
  //En Routes veremos la informacion de cada componente.
  //Path: Lo que va despues de la URL
  return (
    <>
      <Router>
        <nav className="c-menu">
          <Link to="/">Home</Link>
          <Link to="/informativo">Informativo</Link>
          <Link to="/original">Original</Link>
          <Link to="/favorito">Favorito</Link>
          <Link to="/detalles">Detalle</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/informativo" element={<Informativo /> } />
          <Route path="/original" element={<Original /> } />
          <Route path="/favorito" element={<Favorito /> } />
          <Route path="/detalles/:depto/:municipio" element={<Detalle /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App

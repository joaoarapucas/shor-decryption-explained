import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LandingPage } from './paginas/LandingPage/landing'
import { Explorar } from './paginas/Explorar/explorar'

import {BrowserRouter, Routes, Route} from "react-router-dom"

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/shor-decryption-explained/" element={<LandingPage />} />
          {/* explorar é onde todas as páginas básicas vão. a ideia é que a explicação
          geral de fisica e computacao quantica esteja aqui, mas que os topicos especificos
          (pretendo tratar outros temas no futuro) sejam em URLs separadas. (a url depende doq vem dps da /) */}
          <Route path="/explorar" element={<Explorar />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

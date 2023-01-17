import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Reclamacoes from './Pages/Reclamações/Reclamacoes';
import SobreNos from './Pages/SobreNos/SobreNos';
import Noticias from './Pages/Noticias/Noticias';
import {BrowserRouter, Routes, Route} from "react-router-dom"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/sobre-nos' element={<SobreNos/>}/>
        <Route path='/noticias' element={<Noticias/>}/>
        <Route path='/reclamacoes' element={<Reclamacoes/>}/>
        <Route path='*' element={<App/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


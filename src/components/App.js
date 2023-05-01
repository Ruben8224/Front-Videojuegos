import React from 'react';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import {Informacion, Imagen, Alumno} from './Inicio';
import CreateJuegos from './CreateJuego';
import JuegosList from './JuegosList';


const App = () => {
  return (
    <div >
      <Header />
      <Imagen />
      <Informacion/> 
        <Routes>
          <Route path="/" element = { <Alumno />}/>
          <Route path="/List" element={<JuegosList/>} />
          <Route path="/create" element={<CreateJuegos/>}
          />
        </Routes>
      </div>
  );
};
export default App;
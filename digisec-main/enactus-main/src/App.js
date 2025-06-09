import React from 'react';
import './App.css';
import Menu from './component/Navbar/Menuu';
import Form from './component/Formulaire/Form';
import Footer from './component/Footer/Footer';
import Evenement from './component/Membres/Evenement';
import Accueil from './component/Home/Accueil';
import Apropos from './component/Apropos/Apropos';
import Project_list from './component/Projet/Projet_list';
import EventTab from './component/Evenement/EventTb';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename='/enactus'>
      <Menu />
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='/Event' element={<EventTab />} />
        <Route path='/Evenement' element={<Evenement />} />
        <Route path='/Apropos' element={<Apropos />} />
        <Route path='/Project_list' element={<Project_list />} />
        <Route path='/Form' element={<Form />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

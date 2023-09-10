import React from 'react';
import{Route, Routes, useLocation} from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import DetailPage from './pages/detailPage/DetailPage';
import HomePage from './pages/homePage/HomePage';
import FormPage from './pages/formPage/FormPage';
import './App.css';
import NavBar from './components/navBar/NavBar';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <h1 className='apptitle'>PI Pokemons</h1>
      {location.pathname !== "/" && <NavBar />}
      
      <Routes>
        <Route path='/' element={<LandingPage />} />;
        <Route path='/home' element={<HomePage />} />;
        <Route path='/detail/:id' element={<DetailPage />} />;
        <Route path='/create' element={<FormPage />} />;
      </Routes>
    </div>
  );
}

export default App;

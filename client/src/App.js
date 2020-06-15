import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import RecipeApp from './components/pages/recipe-homepage/RecipeApp';




function App () {
    return (
    <div>
      <Navbar />
      <RecipeApp />
      <Footer />
    </div>
  
  )
}


export default App;

import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { Router, Route, Link } from 'react-router'
import RecipeResult from './components/pages/recipe-result/RecipeResult';
import ShoppingList from './components/pages/shopping-list/ShoppingList';






function App () {
    return (
  <Router>
    <div>
      <Navbar />
     
      <Footer />
    </div>
    <Route path="/reciperesult" component= { RecipeResult } />
    <Route path="/shoppinglist" component= { ShoppingList } />
  </Router>
  )
}


export default App;

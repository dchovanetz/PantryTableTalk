import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import RecipeResultApp from './components/pages/recipe-result/RecipeResultApp';
import ShoppingList from './components/pages/shopping-list/ShoppingList';
import RecipeHomepage from './components/pages/recipe-homepage/RecipeApp';







function App () {
    return (
  <Router>
    <div>
      <Navbar />
      <Switch>
      <Route exact path="/" component= { RecipeHomepage } />
      <Route path="/reciperesult" component= { RecipeResultApp } />
      <Route path="/shoppinglist" component= { ShoppingList } />
      </Switch>
      <Footer />
    </div>
  </Router>
  )
}


export default App;

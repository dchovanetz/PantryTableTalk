import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import ShoppingList from './components/pages/shopping-list/ShoppingList';
import RecipeHomepage from "./components/pages/recipe-homepage/RecipeHomepage";







function App () {
    return (
      <Router>
      <div>
        <Navbar />
        <Switch>
          <Redirect exact from="/" to="/recipes" />
          <Route path="/recipes" component={RecipeHomepage} />
          <Route path="/shoppinglist" component={ShoppingList} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}


export default App;

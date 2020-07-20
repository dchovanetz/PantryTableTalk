import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import ShoppingList from './components/pages/shopping-list/ShoppingList';
import RecipeHomepage from './components/pages/recipe-homepage/RecipeHomepage';


function App () {
    return (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Redirect exact from="/" to="/recipes"></Redirect>
      <Route path="/recipes" component= { RecipeHomepage } />
    
      <Route path="/shoppinglist" component= { ShoppingList } />
      </Switch>
      <Footer />
    </div>
  </Router>
  )
}


export default App;

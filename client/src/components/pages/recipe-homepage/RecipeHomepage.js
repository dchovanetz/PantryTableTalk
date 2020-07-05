import React, {useState, useEffect} from 'react';
import axios from 'axios';
import RecipeSearch from './RecipeSearch';
import RecipeSearchResults from './RecipeSearchResults.js';
import RecipeCard from './RecipeCard';
import RecipeMaker from './RecipeMaker';
import RecipeResultsApp from '../recipe-result/RecipeResultApp';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import SageCard from './SageCard';

class RecipeHomepage extends React.Component {
	state = {
		recipes: [
			{
				title: 'Mac and Cheese',
				image:
					'https://www.cookingclassy.com/wp-content/uploads/2018/07/stovetop-macaroni-cheese-1.jpg',
				id: 122,
      },
      {
        title: 'Pizza',
        image:
          'https://www.cookingclassy.com/wp-content/uploads/2018/07/stovetop-macaroni-cheese-1.jpg',
        id: 155,
      },
    ],
    uniqueRecipe: [],
    ingredientsAdded: [],
    UniqueRecipeClicked: false 
	};

	// getCardData = () => {
	//   axios.get('http://localhost:5000/demo')
	//     .then(data => {
	//       return setRecipeData(data.data)
	//     })
	//     .catch(err => console.log(err))
  // }
  
  getIndividualRecipe = id => {
    console.log('clicked individual Recipe')
    axios.post('/getUniqueRecipe', id)
      .then(data => {
        console.log(data.data)
        this.setState({uniqueRecipe: data.data})
		this.setState({uniqueRecipeClicked: true})
      })
      .catch(err => console.log(err))
  }

  addIngredient = ing => {
	  this.setState({ingredientsAdded: [...ing]})
  }
	render() {
		let original = (
			<div>
				{/* Recipe Search stays on top of recipe page so user can easily search for something else */}
				<RecipeSearch />
				{/* Switches between the search results and the individual recipe result */}
				<Switch>
					<Route exact path='/recipes' component={RecipeCard} />
					<Route
						exact
						path='/recipes/recipe-result'
						component={RecipeResultsApp}
					/>
					<Route exact path='/recipes/recipe-maker' component={RecipeMaker} />
				</Switch>

				{/* { console.log(recipeData) } */}

				{this.state.recipes.map((recipe) => {
					
          return ( 
            <SageCard
			
						title={recipe.title}
						image={recipe.image}
            key={recipe.id}
            recipeId={recipe.id}
            recipeHandler={this.getIndividualRecipe}
             />
          );
				})}
			</div>	
		) 

		let uniqueComp = (
			<div>
				<h1>{this.state.uniqueRecipe.title}</h1>
				<span>{this.state.uniqueRecipe.cook}</span>
				<div onClick={}></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		)
		return <div>{this.state.uniqueRecipeClicked ? uniqueComp : original}</div>;
	}
}

export default RecipeHomepage;

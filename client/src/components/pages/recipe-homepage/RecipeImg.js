import React from 'react';
import RecipeResult from "../recipe-result/RecipeResult";
import { BrowserRouter as Router, Route, Link, useRouteMatch } from 'react-router-dom'

//Title, img
function RecipeImg () {    
        //placeholders until we can get data through props & scraper
        const img = "https://www.centraltexasfoodbank.org/sites/default/files/Creamy%20Tomato%20Soup_0.jpg"
        const title = "Creamy Tomato Soup"
        let match = useRouteMatch(); 

        // const {title, img } = this.props
        return (
            <div className="recipe-image-card"> 
              <Link className="recipe-title" to ="recipes/recipe-result">{title}</Link>
              <Link className="recipe-title" to ="recipes/recipe-result"><img className="recipe-img" src={img} alt={title} /></Link>

            </div>


     
        )

}

export default RecipeImg;











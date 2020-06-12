import React, { Component } from 'react';
import './Recipe.css'
import RecipeImg from './RecipeImg'


//Title, img, nutrition facts, topic tag, ingredients, serving size, video
class RecipeResult extends Component {
    render(){
        const {topicTag, servingSize, nutritionFacts, ingredients, videoUrl} = this.props;//assuming that we can get this from consuming APIs
        //do we need to map out the ingredients
        return (
            <div className="recipe-card">    
               <RecipeImg />
               <span className="topic-tag">{topicTag}</span>
                <div className="recipe-card-content">
                    <span className="serving-size">{servingSize}</span>
                    <h4>Ingredients:</h4>
                    <p className="ingredients">{ingredients}</p>
                    <h4>Instructions:</h4>
                    <p>{instructions}</p>
                </div>
                <div>
                    <img className="nutrition-facts" src={nutritionFacts} alt="Nutrition Facts"/>
                </div>
                <div>
                    <video className="cooking-video" src={videoUrl}></video>
                </div>
            </div>
            )    
    }
}

export default RecipeResult;
import React, { Component } from 'react';
// import './Recipe.css'
// import RecipeImg from './RecipeImg'


//Title, img, nutrition facts, topic tag, ingredients, serving size, video
class RecipeResult extends Component {
    render(){
<<<<<<< HEAD
        const {topicTag, servingSize, nutritionFacts, ingredients, instructions, videoUrl} = this.props;//assuming that we can get this from consuming APIs
=======
        // const {topicTag, servingSize, nutritionFacts, ingredients, videoUrl} = this.props;//assuming that we can get this from consuming APIs
>>>>>>> 1d6c04bbb2658b3e0b12124eb6695815a5add67e
        //do we need to map out the ingredients
        return (
            <div className="recipe-card">    
               <img src="https://images.app.goo.gl/692aAhikAkKPhTsd8"></img>
               <span className="topic-tag">Category</span>
                <div className="recipe-card-content">
                    <span className="serving-size">serving size</span>
                    <h4>Ingredients:</h4>
                    <p className="ingredients">Ingredients</p>
                    <h4>Instructions:</h4>
                    <p>Step 1</p>
                    <p>Step 2</p>
                    <p>Step 3</p>
                </div>
                <div>
                    <img className="nutrition-facts" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fda.gov%2Ffood%2Fnew-nutrition-facts-label%2Fcalories-new-nutrition-facts-label&psig=AOvVaw1RFVOQmaAww6qxmbXiABkx&ust=1592584823583000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjUlPjmi-oCFQAAAAAdAAAAABAD" alt="Nutrition Facts"/>
                </div>
            </div>
            )    
    }
}

export default RecipeResult;

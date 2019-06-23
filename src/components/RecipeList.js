import React, { Component } from 'react';
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';

export default class RecipeList extends Component {
    render() {
        const {recipes, handleDetails, value, handleSubmit, handleChange, handleTitle, error} = this.props;
        
        return (
            <React.Fragment>
                <RecipeSearch value={value} handleChange={handleChange} handleSubmit={handleSubmit} />
                <div className="container my-5">
                    {/**Title */}
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 text-center mb-3">
                            <h1 className="text-slanted recipe-list">Recipes</h1>
                        </div>
                    </div>
                    {/**end of Title */}
                    <div className="row">
                    {
                        error? 
                        <h1 className="text-danger text-slanted mx-auto">{error}</h1> 
                        :
                        recipes.map(recipe => {
                            return <Recipe 
                                        key={recipe.recipe_id}
                                        recipe={recipe}   
                                        handleDetails={handleDetails}
                                        handleTitle={handleTitle}
                                    />;                           
                        })
                    }
                    
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

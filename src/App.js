import React, {Component} from 'react';
import './App.css';
import Recipe from './components/Recipe';
import {recipes} from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import RecipeNotVegan from './components/RecipeNotVegan';

export default class App extends Component {

  state = {
    recipes: recipes,
    url: `https://www.food2fork.com/api/search?key=9331b45d553ded7ce4af2b558d62d025`,
    base_url: `https://www.food2fork.com/api/search?key=9331b45d553ded7ce4af2b558d62d025`,
    details_id: 35382,
    pageIndex: 1,
    search: '',
    query: '&q=',
    error: ''
  };

  displayPage = index => {
    switch(index) {
      default:
      case 2:
        return (<RecipeNotVegan />)
      case 1:
        return (<RecipeList 
          recipes={this.state.recipes} 
          handleDetails={this.handleDetails}
          value={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleTitle={this.handleTitle}
          error={this.state.error}
        />)
      case 0: 
      return (<RecipeDetails 
        id={this.state.details_id}
        handleIndex={this.handleIndex}  
      />)
    }
  }

  handleIndex = index => {
    this.setState({
      pageIndex: index
    })
  };

  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      details_id: id
    })
  };

  handleChange = e => {
    this.setState({
      search: e.target.value
    },
      () => console.log(this.state.search)
    )
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const {base_url, search, query} = this.state;

    search === 'chicken' ? 
      this.setState({pageIndex: 2})
      :
      this.setState(() => {
        return {url: `${base_url}${query}${search}`, search: ""};
      }, () => {
        this.getRecipes();
      })
  };

  handleTitle = (string) => {
    if (string.length > 30) {
      return (`${string.slice(0,27)}...`);
    }
    else {
      return string;
    }
  }

  getRecipes = async () => {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();

      if(jsonData.recipes.length === 0) {
        this.setState(() => {
          return {error: "Sorry, your search didn't return any results" };
        })
      }
      else {
        this.setState(() => {
          return {recipes: jsonData.recipes};
        })
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
  this.getRecipes();
  }; 

  render(){
    //console.log(this.state.recipes);

    return (
      <React.Fragment>
        {this.displayPage(this.state.pageIndex)}
      </React.Fragment>
      
    );
  }
}
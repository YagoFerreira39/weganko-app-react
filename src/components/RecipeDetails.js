import React, { Component } from 'react';
import { recipe } from '../tempDetails';


export default class RecipeDetails extends Component {
    /*constructor(props) {
        super(props);

        this.state = {
            recipe: recipe,
            url: `https://www.food2fork.com/api/get?key=dbc3c01e0cd5e56283a4d4599c5bf70f&rId=${
                this.props.id
            }`
        }
    };
    
    async componentDidMount() {
        try {
            const data = await fetch(this.state.url);
            const jsonData = await data.json();
            console.log(jsonData.recipe);
      
            this.setState({
              recipe: jsonData.recipe
            });
          }
          catch (error) {
            console.log(error);
          }
    }*/

    state = {
        recipe: recipe
    };

    async componentDidMount() {
        const id = this.props.id;
        const url = `https://www.food2fork.com/api/get?key=9331b45d553ded7ce4af2b558d62d025&rId=${id}`;

        try {
            const data = await fetch(url);
            const jsonData = await data.json();
            this.setState((state, props) => {
                return {
                    recipe: jsonData.recipe
                }
            }, () => {})
        } catch (error) {
            console.log(error);
        }
    };
   
    render() {

        const {
            image_url,
            publisher, 
            publisher_url,
            source_url,
            title,
            ingredients,
        } = this.state.recipe;

        const {handleIndex} = this.props;

        return (
            <React.Fragment>
                <div className="container">
                <div className="row">
                    <div className="col-10 my-3 mx-auto col-md-6">
                        <a  
                            href="#" 
                            className="weganko text-capitalize text-slanted text-search mb-5 display-4"
                            onClick={() => handleIndex(1)}
                        >
                            Weganko
                        </a>
                        
                        <img src={image_url} alt="recipe" className="d-block w-100 rounded mt-5" />
                    </div>

                    <div className="col-10 my-3 mx-auto col-md-6">
                        <h6 className="text-uppercase">{title}</h6>
                        <h6 className="text-danger text-capitalize text-slanted">provided by {publisher}</h6>
                        <a href={publisher_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btndetails mt-2 text-capitalize"
                        >Publisher</a>
                        <a href={source_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-success btnsrc mt-2 ml-3 text-capitalize"
                        >source_url</a>
                        <ul className="list-group t-4">
                            <h2 className=" mt-3 mb-4">Ingredients</h2>
                            {
                                ingredients.map((item, index) => {
                                    return (
                                        <li key={index} className="list-group-item text-slanted">
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}

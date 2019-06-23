import React, { Component } from 'react'

export default class RecipeSearch extends Component {
    render() {
        const {value, handleSubmit, handleChange} = this.props;
        return (
            <React.Fragment>
                <div className="container">
                <div className="row">
                        <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                            <h1 className="text-capitalize text-slanted text-search">
                            <strong className="weganko"> Weganko</strong>
                            </h1>  

                            <form className="mt-4" onSubmit={handleSubmit}>
                                <label htmlFor="search" className="text-capitalize">
                                    type recipe separated by comma
                                </label>
                                <div className="input-group">
                                    <input type="text" name="search" 
                                        placeholder="potato, carrot, onions"
                                        className="form-control shadow-none"
                                        value={value}
                                        onChange={handleChange}
                                    />
                                    <div className="input-group-append">
                                        <button 
                                            type="submit" 
                                            className="input-group-text text-white search-icon"   
                                        >
                                            <i className="fas fa-search" />
                                        </button>
                                    </div>
                                </div>
                            </form>

                        </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}

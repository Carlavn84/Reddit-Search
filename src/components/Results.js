import React, { Component } from 'react';
import './Results.css';

class Results extends Component {
    render() {
        let{searchResults} = this.props;
        
    return searchResults ? (
            <div>
                {searchResults.map((result, key) =>{
                  return (
                    <div key = {key} className="">
                        <div key = {key} className = "result-input">
                            <p className = "result-part" >
                                <a href = {result.data.url}> {result.data.title}</a>
                                <br/><br/>
                            Promoted by {result.data.author}
                            </p>
                        </div>
                    </div>
                  )  
                })}
            </div>
        ): (
            <h3>Loading</h3>
        )
     
    }
}

export default Results;

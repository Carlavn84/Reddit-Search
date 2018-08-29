import React, { Component } from 'react';
import './Results.css';
import './reddit.jpg'


class Search extends Component {
    render() {
        return (
            <div>
                <form onSubmit = {this.props.getInfo}>
                    <input className ="input-box" type = "text" name="search" placeholder="search in reddit what" />
                </form>
            </div>
        );
    }
}

export default Search;

import React from 'react';
import { BiSearchAlt } from "react-icons/bi"
import "./search_bar.scss";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {query: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let query = this.state.query;
        this.props.clearVideos();
        this.props.search(query);
        this.props.history.push('/search');
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input
                        placeholder="Search by video Title or Description"
                        className='search-bar'
                        type="search"
                        value={this.state.query}
                        onChange={this.update("query")}
                    />
                    <span>
                        <BiSearchAlt
                            className='search-button'
                            onClick={this.handleSubmit}
                        />
                    </span>
                </label>
            </form>
        );
    }
}

export default SearchBar;
import React, {Component} from 'react';

import IconComponent from '../IconComponent';

export default class NavbarComponent extends Component {

    constructor(props){
        super(props);

        this.handleClickIcon = this.handleClickIcon.bind(this);
        this.handleKeyUpSearch = this.handleKeyUpSearch.bind(this);
    }

    handleClickIcon() {}
    handleKeyUpSearch() {}
    
    render() {

    return (
        <div className="Search">
            <input
                name="search-component"
                type="search"
                placeholder="Entry Value To Search"
                onKeyUp={this.handleKeyUpSearch}
            />

            <button 
                className="Search-icon"
                onClick={this.handleClickIcon}

                >
                <IconComponent icon="search" />
            </button>
        </div>
    );
   }
};

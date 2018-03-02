import React, {Component} from 'react';

export default class NavbarComponent extends Component  {

    render() {

    	const {icon = '', size = 'x1'} = this.props;

    return (
        <div className="Icon">
        	<i className={`fa fa-${this.props.icon} fa-${size}`} />
        </div>
    );
   }
};

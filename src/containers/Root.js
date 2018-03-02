import React, {Component} from 'react';
import HomeContainer from './Home';

// import Router from '../navbar/NavbarComponent';
// import RouterItem from '../navbar/NavbarComponent';

export default class RootContainer extends Component {

  render() {

    const {icon = '', size = 'x1'} = this.props;

    const routerItems = [
      {
        path: '/',
        exact: false,
        render: () => function () {}
      }
    ];

    return (
      <div className="Root">

        <div className="Root-content">
          <HomeContainer />
        </div>
      </div>
    );
  }
};


/*

//     <Router>
//         <RouterItem path="/" exact={true} render={HomeComponent} />
//         routerItems.map(({render, path, exact}, key) => {
// return <RouterItem path="path" exact={exact} render={render} />
//         });
//     </Router>
*/

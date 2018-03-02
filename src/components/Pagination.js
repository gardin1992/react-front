import React, {Component} from 'react';

class Pagination extends Component {

  render() {

    const {items = []} = this.props;

    return (
      <div className="Pagination">
      <nav>
      <ul>
      <li>Prev</li>
      <li>Next</li>
      </ul>
      </nav>

      </div>
    );
  }
}

export default Pagination;

import React, {Component} from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import PaginationItem from './Item';

const _createList = ({amountPages, currentPage, onClick} = {}) => {

  const list = [];

  for(let x = 0; x < amountPages; x++) {

    const numPage = x + 1;
    const isActive = numPage === currentPage;

    list.push({
      isActive,
      numPage,
      onClick
    });
  }

  return list;
};

class Pagination extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hasNext: false,
      hasPrevious: false,
    };
  }

  handleClick() {

    return e => {
      e.preventDefault();
      console.log(e);
    };
  }

  render() {
    const {
      amountPages = 1,
      currentPage = 1,
      hasNext = false,
      hasPrevious = false,
      handleNext,
      handlePrevious
    } = this.props;

    const list = _createList({
      onClick: this.handleClick(),
      amountPages,
      currentPage
    });

    const prev = (
      <li
        className={`Pagination-iterator ${hasPrevious ? 'active' : ''}`}
        onClick={handlePrevious}
        >
        <FontAwesomeIcon icon={["fas", "angle-left"]} />
      </li>
    );

    const next = (
      <li
        className={`Pagination-iterator ${hasNext ? 'active' : ''}`}
        onClick={handlePrevious}
        >
        <FontAwesomeIcon icon={["fas", "angle-right"]} />
      </li>
    );

    return (
      <div className="Pagination">
        <ul>
          {prev}
          {list.map(PaginationItem)}
          {next}
        </ul>
      </div>
    );
  }
}

export default Pagination;

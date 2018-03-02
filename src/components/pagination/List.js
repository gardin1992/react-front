import React, {Component} from 'react';
import PaginationItem from './Item';

const _createList = (len = 0) => {

  const list = [];

  for(let x = 0; x < len; x++) {

    const numPage = x + 1;
    const isActive = numPage === currentPage;

    list.push(PaginationItem({
      isActive,
      numPage,
      key: x,
      onClick: this.handleClick()
    }));
  }

  return list;
}

const List = ({
  onClick,
  isActive,
  numPage = 0,
  key = 0
} = {}) => {



  return (
    <li
      key={key}
      onClick={onClick}
      className={`Pagination-item ${isActive ? 'active' : ''}`}
      >
      <a href="#">{numPage}</a>
    </li>
  );
}

export default Item;

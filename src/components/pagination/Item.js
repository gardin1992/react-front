import React, {Component} from 'react';

const Item = ({
  onClick,
  isActive,
  numPage = 0,
} = {}, key) => {

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

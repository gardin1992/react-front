import React, {Component} from 'react';
import Pagination from '../components/pagination/Pagination';

class FeedPagination extends Component {

  constructor(props) {
    super(props);

    this._currentItems = [];
    this._perPage = 10;
    this._current = 1;

    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }

  componentWillMount() {

    this.handlePagination(this.props);
  }

  componentWillUpdate(nextProps) {

    this.handlePagination(nextProps);
  }

  handlePagination(props = {}) {

    if (props && typeof props.items !== 'undefined')
    this.currentItems = props.items;
  }

  handleNext(e) {
    e.preventDefault();

    if (this.hasNext)
      this._current++;
  }

  get hasNext() {
    return this._current < this.amountPages;
  }

  get hasPrevious() {
    return this._current > 1;
  }

  handlePrevious(e) {
    e.preventDefault();

    if (this.hasPrevious)
      this._current--;
  }

  // handleForward() {}
  // handleBackward() {}

  render() {
    const {
      FeedComponent,
      items = {},
      itemsIds = []
    } = this.props;

    return (
      <div className="Feed-pagination">
        <h3>FeedPagination</h3>

        <FeedComponent
          items={this.currentItems}
          />
        <Pagination
          currentPage={this._current}
          amountPages={this.amountPages}

          hasNext={this.hasNext}
          hasPrevious={this.hasPrevious}

          handleNext={this.handleNext}
          handlePrevious={this.handlePrevious}
          />
      </div>
    )
  }

  get amountPages() {

    return this.amount && this.amount > this._perPage ?
      this.amount / this._perPage : 1
  }

  get amount() {
    return this._currentItems.length;
  }

  get init() {
    return Math.abs(this._step - this._perPage);
  }

  get step() {
    return this._current * this._perPage;
  }

  get currentItems() {
    const {
      init,
      step
    } = this;

    return this._currentItems.splice(init, step);
  }

  set currentItems(items = {}) {
    this._currentItems = Object.values(items);
    return this;
  }

  set currentPage(nextPage) {
    this._currentPage = nextPage;
    return this;
  }
}

export default FeedPagination

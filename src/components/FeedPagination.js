import React, {Component} from 'react';

class FeedPagination extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentItems: [],
    }
  }

  componentWillMount() {
    this.handlePagination(this.props.items);
  }

  componentWillUpdate(nextProps = {}, nextState = {}) {
    this.handlePagination(nextProps.items);
  }

  handleCurrentItems() {}

  handlePagination(items) {

    const {
      perPage,
      currentPage
    } = this.state;

    const currentItems = Object.values(items);
    const amount = currentItems.length;

    console.log(amount, currentItems);
  }

  render() {

    const {
      currentItems = [],
    } = this.state;

    const {
      FeedComponent,
      PaginationComponent,
      items = {},
      itemsIds = []
    } = this.props;

    console.log(this);

    return (
      <div className="Feed-pagination">
     

        <FeedComponent items={currentItems}/>
        <PaginationComponent
          items={items}
          itemsIds={itemsIds}
          handleCurrentItems={this.handleCurrentItems}
        />
      </div>
    )
  }
}

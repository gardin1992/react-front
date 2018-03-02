import React, {Component} from 'react';
import {callApi} from '../middlewares/Api';
import PostListItem from '../components/posts/ListItem';
import FeedPagination from './FeedPagination';

class Feed extends Component {

  render() {

    const {items, itemsIds} = this.props;

    return (
      <div className="Post-feed">
        Feed
      </div>
    );
  }
}

class Pagination extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentItems: [],
      next: 0,
      prev: 0,
      perPage: 10,
      currentPage: 1,
      amount: 0
    };

    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }


  nextPage() {}

  prevPage() {}

  render() {

    const items = [];
    // const Feed =

    return (
      <div className="Pagination">
        <ul>
          <li>Prev</li>
          <li>Prev</li>
          <li>Prev</li>
          <li>Next</li>
        </ul>
      </div>

    );
  }
}

export default class HomeContainer extends Component {

  constructor(props) {
    super(props);

    this._pagination = {
      next: '',
      prev: '',
      current: 1,
      perPage: 10,
      amount: 0,
      items: {}
    }

    this.state = {
      posts: {
        items: {},
        itemsIds: [],
      },
      currentItems: []
    }
  }

  handleFetchPosts(json) {

    const posts = {
      items: {},
      itemsIds: []
    };

    if (Array.isArray(json)) {

      posts.itemsIds = json.map((post, index) => {

        const {id} = post;

        posts.items[id] = post;

        return id;
      });
    }

    this.setState(Object.assign({}, this.state, {posts: posts}));
  }

  handlePagination(posts = {}) {
    const {itemsIds = []} = posts;
    this._pagination.amount = itemsIds.length;
  }

  componentWillUpdate(nextProps, nextState) {
    this.handlePagination(nextState.posts);
  }

  componentWillMount() {

    callApi('posts').then(this.handleFetchPosts.bind(this));
  }

  render() {

    console.log('adas');
    return (
      <div className="HomeContainer">
        Home

        <FeedPagination
          {...this.state.posts}

          FeedComponent={Feed}
          PaginationComponent={Pagination}
          />

      </div>
    );
  }
};

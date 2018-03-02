import React, {Component} from 'react';
import {callApi} from '../middlewares/Api';
import PostsFeed from '../components/posts/Feed';
import FeedPagination from './FeedPagination';

export default class HomeContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: {
        items: {},
        itemsIds: [],
      }
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

  componentWillMount() {
    callApi('posts').then(this.handleFetchPosts.bind(this));
  }

  render() {

    const {posts = []} = this.state;

    return (
      <div className="HomeContainer">
        Home

        <FeedPagination
          {...posts}
          FeedComponent={PostsFeed}
          />

      </div>
    );
  }
};

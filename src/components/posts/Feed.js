import React, {Component} from 'react';

class Feed extends Component {

  render() {

    const {items = []} = this.props;

    return (
      <div className="Post-feed">

        {items.map((item, i) => {

          return <div>{i}</div>
        })}

      </div>
    );
  }
}

export default Feed;

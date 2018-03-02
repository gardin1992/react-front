import React, {Component} from 'react';

class Feed extends Component {

  render() {

    console.log(this);

    const {items} = this.props;

    return (
      <div className="Post-feed">
          <h4>Post Feed</h4>

          <section>
            {items.map((item, key) => {

              const article = (
                <article key={key}>
                    {item.title};
                </article>
              );

              return (
                <div>
                  {article}
                  <hr />
                </div>
              );
            })}
          </section>
      </div>
    );
  }
}

export default Feed;

import React, {Component} from 'react';

const _resource = 'posts';

class PostList extends Component {

    render() {

    	const {items = {}} = this.props;

        return (
            <div className="Posts-list-items">

            	{Object.keys(items).map((id, index) => {
            		const item = items[id];
            		return <PostListItem key={index} {...item} />
            	})}
            	
            </div>
        );
   }
}

export default PostList;
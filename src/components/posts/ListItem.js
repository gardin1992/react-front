import React, {Component} from 'react';

const _resource = 'posts';

class PostListItem extends Component {

	render() {

		const {
			title, 
			body,
			id
		} = this.props;

		const href = _resource + '/' + id;

		return (
			<a 
				href={href || '#'} 
				className="Post-list-item">
				{title}
			</a>
		)
	}
}

export default PostListItem;

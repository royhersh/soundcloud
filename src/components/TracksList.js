import React from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import classNames from 'classnames';

class TracksList extends React.Component  {
	
	
	componentDidUpdate() {
		console.log('component did update', this.props)
		// Handling fly effect
		if (!this.props.flyEffect) return;
		var imageContainer = $('.container .image');
		const offset = imageContainer.offset();
		const left = imageContainer.width() / 2 + offset.left; 
		const top = imageContainer.height() / 2 + offset.top; 

		$('.flyEffect').on('click', function () {
			const clone = $(this).clone();
			clone
				.appendTo($('body'))
				.css({
					opacity: '1',
					position: 'absolute',
					top: $(this).offset().top,
					left: $(this).offset().lef
				})
				.animate({
					top: top,
					left: left,
					opacity:0
				}, ()=>$(clone).detach());
			
		});
	}

	render() {
		const { items, handleChooseTrack, flyEffect } = this.props;
		const itemClass = classNames({
			trackItem: true,
			flyEffect: flyEffect
		});
		const renderItems = items.map((item) => (
			<li className={itemClass} key={item.id} onClick={() => handleChooseTrack(item)}><a href="#">{item.title}</a></li>
		));
		return (
			<ul className="tracksList">
				{renderItems}
			</ul>
		);
	}
}

export default connect(null,null)(TracksList);

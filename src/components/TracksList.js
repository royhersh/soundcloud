import React from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import classNames from 'classnames';

class TracksList extends React.Component {


	componentDidUpdate() {
		// Handling fly effect
		if (!this.props.flyEffect) return;
		var imageContainer = $('.container .image img');
		const offset = imageContainer.offset();
		const left = imageContainer.width() / 2 + offset.left;
		const top = imageContainer.height() / 2 + offset.top;

		$('.flyEffect').on('click', function () {
			const clone = $(this).clone();
			clone
				.appendTo($('body'))
				.css({
					opacity: '1',
					position: 'fixed',
					top: $(this).offset().top,
					left: $(this).offset().left,
					width: $(this).width(),
					height: $(this).height()
				})
				.animate({
					top: top,
					left: left,
					opacity: 0
				}, () => $(clone).detach());

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
		
		if (this.props.showTiles === true) {
			const renderImages = items.map((item) => {
				const cover = item.artwork_url || item.user.avatar_url;
				return <img src={cover} className={itemClass} key={item.id} onClick={() => handleChooseTrack(item)} />;
			});
			return (
				<div className="tiles">
					{renderImages}
				</div>
			);
		}
		return (
			<ul className="tracksList">
				{renderItems}
			</ul>
		);
	}
}

export default connect(null, null)(TracksList);

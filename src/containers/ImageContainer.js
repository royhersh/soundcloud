import React from 'react';
import { showPlayer } from '../actions/index';
import { connect } from 'react-redux';
import $ from 'jquery';

class ImageContainer extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			showPlayer: false
		};
	}
	
	componentDidUpdate() {
		$('.image.container img').animate({ opacity: 1 }, 1000, 'linear');
	}

	componentWillReceiveProps() {
		$('.image.container img').css({ opacity: 0 });
	}

	render() {
		const { currentTrack, showPlayer } = this.props;
		let cover = null;
		let title = null;
		if (currentTrack) {
			title = currentTrack.title;
			cover = currentTrack.artwork_url || currentTrack.user.avatar_url;
		}
		return (
			<div className="image container">
				<h3 key='header'>{title}</h3>
				<img key='image' onClick={()=>showPlayer()} src={cover} />
				{currentTrack && currentTrack.showPlayer && <div key='player' className="playerFrame" dangerouslySetInnerHTML={{ __html: currentTrack.embeddedPlayer }} />}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	currentTrack: state.currentTrack.track
});

export default connect(mapStateToProps, { showPlayer })(ImageContainer);

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
		let track = null;
		if (currentTrack) {
			const cover = currentTrack.artwork_url || currentTrack.user.avatar_url;
			track = [
				<h3 key='header'>{currentTrack.title}</h3>,
				<img key='image' onClick={()=>showPlayer()} src={cover} />,
				currentTrack.showPlayer && <div key='player' className="playerFrame" dangerouslySetInnerHTML={{ __html: currentTrack.embeddedPlayer }} />
			];
		}
		return (
			<div className="image container">
				{track}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	currentTrack: state.currentTrack.track
});

export default connect(mapStateToProps, { showPlayer })(ImageContainer);

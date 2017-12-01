import React from 'react';
import { showPlayer } from '../actions/index';
import { connect } from 'react-redux';


class ImageContainer extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			showPlayer: false
		};
	}
	
	render() {
		const { currentTrack, showPlayer } = this.props;
		console.log ('imageCotainerm show player', showPlayer);
		if (!currentTrack) return null;
		const cover = currentTrack.artwork_url || currentTrack.user.avatar_url;
		return (
			<div className="image container">
				<h3>{currentTrack.title}</h3>
				<img onClick={()=>showPlayer()} src={cover} />
				{currentTrack.showPlayer && <div className="playerFrame" dangerouslySetInnerHTML={{ __html: currentTrack.embeddedPlayer }} />}

			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	currentTrack: state.currentTrack.track
});

export default connect(mapStateToProps, { showPlayer })(ImageContainer);

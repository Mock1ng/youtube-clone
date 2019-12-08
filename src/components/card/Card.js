import React from 'react';
import './card.css';
import thumb from '../../imgs/youtube-thumb.jpg'
import channelLogo from '../../imgs/channel-logo.jpg'

const Card = ({ title, channelName, view, time, duration }) => {

    return (
        <div className="card-wrapper">
            <div className="thumbnail-wrapper">
                <img src={thumb} alt="Thumbnail" />
                <div className="duration">{duration}</div>
            </div>
            <div className="card-info">
                <div className="channel-logo">
                    <img src={channelLogo} alt="Channel Logo" />
                </div>
                <div className="desc">
                    <h4 className="title">{title}</h4>
                    <h6 className="channel-name">{channelName}</h6>
                    <div className='view-time'><span className='span-view'>{view} views </span><span> {time} ago</span></div>
                </div>
            </div>
        </div>
    )
}

Card.defaultProps = {
    title: 'Video Title',
    channelName: 'Channel Name',
    view: 'x',
    time: 'y',
    duration: '00:00'
}

export default Card;
import React from 'react';
import { Paper, RaisedButton, FontIcon } from 'material-ui';
import ActionAndroid from 'material-ui/svg-icons/action/android';

const style = {
  margin: 2,
};


const ProfileHeader = () => {

  return (
    <div className="profile-header-container">
    <div className="profile-container ">
    <div className="profile-pic-container">
    <div className="profile-pic"></div>
    </div>
    <div className="profile-info">
    <h1>Max Sturges:</h1>
    <p>Max Sturges is primarily a full-stack JavaScript developer as well as an adaptor
    of technologies. He is an entrepreneur at heart and currently is working as
    a freelancer. When Max isn't coding, he enjoys rock climbing, skiing, and gaming.</p>
    </div>  
    </div>
    <div className="btn-container">

    <RaisedButton
    href='https://github.com/msturges'
    className='social-media-button'
    label="Git-Hub"
    style={style}
    icon={<FontIcon className="fa fa-github socialButtonIcon" />}
    />

    <RaisedButton
    href='https://www.linkedin.com/in/max-r-sturges'
    className='social-media-button'
    label="linked-In"
    style={style}
    icon={<FontIcon className="fa fa-linkedin socialButtonIcon" />}
    />

    <RaisedButton
    href='mailto:max.r.sturges@gmail.com'
    label='max.r.sturges@gmail.com'
    className='social-media-button'
    style={style}
    icon={<FontIcon className="fa fa-envelope socialButtonIcon" />}
    />

    <RaisedButton
    href='#'
    label='(914) 582-0029'
    className='social-media-button'
    style={style}
    icon={<FontIcon className="fa fa-phone socialButtonIcon" />}
    />

    </div>
    </div>
  );
}

export default ProfileHeader;

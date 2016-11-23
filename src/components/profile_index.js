import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProfileHeader from './profile/header';
import ProfileProjects from './profile/profile_projects';


class ProfileIndex extends Component {

  render() {

    return (
      <div>
        <ProfileHeader/>
        <ProfileProjects/>
      </div>
    );

  }
}

export default ProfileIndex;

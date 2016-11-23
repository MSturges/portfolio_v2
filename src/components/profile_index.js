import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProfileHeader from './profile/header';


class ProfileIndex extends Component {

  render() {

    return (
      <div>
        <ProfileHeader/>
      </div>
    );

  }
}
// <ProfileProjects/>

export default ProfileIndex;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileHeader from './profile_header';
import ProfileProjects from './profile_projects';


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

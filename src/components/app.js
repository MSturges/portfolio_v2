import React, { Component } from 'react';
import NavBar from './nav-footer/navigation';
import ProfileHeader from './profile/header';
import Footer from './nav-footer/footer';

export default class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
      <ProfileHeader/>
      {this.props.children}
      <Footer/>
      </div>
    );
  }
}

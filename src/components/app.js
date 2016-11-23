import React, { Component } from 'react';
import NavBar from './nav-footer/navigation';
import Footer from './nav-footer/footer';
import ProfileIndex from './profile_index';

export default class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
      <ProfileIndex/>
      {this.props.children}
      <Footer/>
      </div>
    );
  }
}

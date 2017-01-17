import React, { Component } from 'react';
import NavBar from './nav-footer/navigation';
import ProfileHeader from './profile/header_section';
import SkillsSection from './skills/skills_section';
import Footer from './nav-footer/footer';

export default class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
      <ProfileHeader/>
      {this.props.children}
      <SkillsSection/>
      <Footer/>
      </div>
    );
  }
}

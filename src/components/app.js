import React, { Component } from 'react';
import NavBar from './components_navbar/navigation';
import Footer from './components_footer/footer';

export default class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
      {this.props.children}
      <Footer/>
      </div>
    );
  }
}

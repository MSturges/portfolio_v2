import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import {Tabs, Tab, AppBar} from 'material-ui';
import * as actions from '../actions';
import { browserHistory } from 'react-router';
import { determineTab } from '../helpers/determineTab';

class NavBar extends Component {

  constructor(props) {
    super(props)
    // console.log(this.props.location.pathname);
  }

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    browserHistory.listen((location) => {
    })
  }

  toggleSideNav() {
    this.props.toggleSideNav(!this.props.showSideNav)
  }

  switchComponent(link) {
    this.context.router.push(link)
    this.toggleSideNav()
  }

  handleTabChange(tabValue) {
    this.props.setCurrentTab(tabValue)
  }

  render() {

    const underLineStyle = {
      backgroundColor: 'black',
      height: '3px'
    }


    return (

      <AppBar
      className="nav-bar"
      iconElementLeft={<img src='images/logo.jpg' className='nav-logo'/>}
      children={ [
        <Tabs
        key={0}
        inkBarStyle={underLineStyle}
        value={this.props.currentTab}
        className='nav-tabs-container'
        onChange={this.handleTabChange.bind(this)}
        >
        <Tab
        label='Profile'
        value={1}
        className='nav-tabs'
        onActive={() => this.switchComponent('/')}
        />
        <Tab
        label='Slide'
        value={2}
        className='nav-tabs'
        onActive={() => this.switchComponent('/slide')}
        />
        <Tab
        label='contact'
        value={3}
        className='nav-tabs'
        onActive={() => this.switchComponent('/contact')}
        />
        </Tabs> ] }/>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      showTabs: state.material_ui.showTabs,
      showSideNav: state.material_ui.showSideNav,
      currentTab: state.material_ui.currentTab
    }
  }

  export default connect(mapStateToProps, actions)(NavBar)

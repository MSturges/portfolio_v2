import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {Tabs, Tab, AppBar} from 'material-ui';
import * as actions from '../../actions';
import { browserHistory } from 'react-router';
import { determineTab } from '../../helpers/determinetab';

class NavBar extends Component {

  constructor(props) {
    super(props)
    browserHistory.listen((location) => {
      this.props.setCurrentTab(determineTab(location.pathname))
    })
  }

  switchComponent(link) {
    browserHistory.push(link);
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
      iconElementLeft={<img src='images/logomain.jpg' className='nav-logo'/>}
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
        value={2}
        label='RESUME'
        className='nav-tabs-resume'
        id='resumeTab'
        href='/images/resume.pdf'
        target='_blank'
        onActive={() => this.switchComponent('/')}
        />
        </Tabs> ] }/>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      currentTab: state.material_ui.currentTab
    }
  }

  export default connect(mapStateToProps, actions)(NavBar)

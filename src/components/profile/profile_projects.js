import React, { Component }from 'react';
import ProjectPaperCreator from './projects_list';
import { connect } from 'react-redux';

class ProfileProjects extends Component {
  render() {
    return (
      <div className="projects-main-container">
      <div className="projects-break"></div>
      <div className="projects-container">
      <h2><span className="fa fa-terminal animated flash infinite"></span>Portfolio</h2>
      <ProjectPaperCreator projects={this.props.projects} clsssName="project-list"/>
      </div>
      </div>
    );

  }
}

function mapStateToProps(state) {
  return {
    projects: state.project.projectData

  }
}

export default connect(mapStateToProps)(ProfileProjects);

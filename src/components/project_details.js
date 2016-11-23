import React, { Component } from 'react'
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';




class ProjectDetails extends Component {

  componentWillMount() {
    var id;
    browserHistory.listen((location) => {
      return id = location.pathname.slice(9, 10);
    })

    const findProject = this.props.projects.filter((p) => {
      if (p.id == id) {
        return p;
      }
    })

    const project = findProject[0];

    this.props.setCurrentProject(project)
  }


  render() {

    var {project} = this.props;

    if (project) {
      return (
        <div className="project-detail-container">
        <div className="project-break"></div>
        <h2><span className="fa fa-terminal animated flash infinite"></span>{project.title}</h2>

        
        <Link to="/">Back</Link>
        </div>
      );
    } else {
      return(
        <div>loading</div>
      )

    }

  }
}

function mapStateToProps(state) {
  return {
    projects: state.project.projectData,
    project: state.project.project
  }
}

export default connect(mapStateToProps, actions)(ProjectDetails);

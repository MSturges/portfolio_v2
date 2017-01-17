import React, { Component } from 'react'
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../../../actions';




class WebProjectDetails extends Component {

  componentWillMount() {
    var id;
    browserHistory.listen((location) => {
      return id = location.pathname.slice(5, 6);
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

        <div className="btn-containerr">
          <Link className="back-btn"to="/"><i className="fa fa-long-arrow-left"></i> Back</Link>
        </div>

        <div className="details-container">

          <div className="img-container animated slideInLeft">
            <img className="project-image" src={project.image}/>
          </div>

          <div className="info-container animated slideInRight">
            <a className="live-site"href={project.url}><span className="devicons devicons-chrome"></span> Live Site</a>
            <br/>
            {project.web ? <a className="live-site"href={project.web}><span className="devicons devicons-github_badge"></span>View web files</a> : null}
            <br/>
            {project.server ?  <a className="live-site"href={project.server}><span className="devicons devicons-github_badge"></span>View server files</a> : null}
            <br/>
            {project.mobile ?  <a className="live-site"href={project.mobile}><span className="devicons devicons-github_badge"></span>View mobile files</a> : null}
            <br/>
            <p>{project.details}</p>
          </div>
        </div>
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

export default connect(mapStateToProps, actions)(WebProjectDetails);

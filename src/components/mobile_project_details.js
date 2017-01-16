import React, { Component } from 'react'
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';


class MobileProjectDetails extends Component {

  componentWillMount() {
    var id;
    browserHistory.listen((location) => {
      return id = location.pathname.slice(8, 9);
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
        <div className="project-mobile-detail-container">
        <div className="project-break"></div>
        <h2><span className="fa fa-terminal animated flash infinite"></span>{project.title}</h2>

        <div className="btn-containerr">
          <Link className="back-btn"to="/"><i className="fa fa-long-arrow-left"></i> Back</Link>
        </div>

        <div className="details-container">

          <div className="img-container animated slideInLeft">
            <img className="project-image" src={project.image1}/>
            <img className="project-image" src={project.image2}/>
            <img className="project-image" src={project.image3}/>
            <img className="project-image" src={project.image4}/>
          </div>

          <div className="info-container animated slideInRight">
            <p>To view, download the Ionic View app for ios or android. Then use the app id Cd2056be.</p>
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

export default connect(mapStateToProps, actions)(MobileProjectDetails);

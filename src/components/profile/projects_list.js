import React from 'react';
import { Paper } from 'material-ui';
import { Link } from 'react-router';

const ProjectPaperCreator = (props) => {
  const ProjectPaperItems = props.projects.map((project) => {

    const style = {
      height: 250,
      width: 400,
      margin: 15,
      textAlign: 'center',
      display: 'inline-block',
      background: 'url(' + `${project.images}` + ')',
    };

    return (
      <a key={project.id} href={project.github.web}>
      <Paper
      className="animated fadeInDownBig project-paper"
      style={style}
      zDepth={5}
      >
      <h2 className="project-title">{project.title}</h2>
      <h2 className="project-footer">{project.footer}</h2>
      </Paper></a>
    );
  });

  return (
    <div className="projects-container">
    {ProjectPaperItems}
    </div>
  );
};





export default ProjectPaperCreator;

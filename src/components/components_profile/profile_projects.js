import React from 'react';
import ProjectPaperCreator from './profile_projects_paper';

const ProfileProjects = () => {

  const projectData = [
    {
      id: 1,
      title: 'Angular.js CrushRoutes',
      images: '/images/crush_routes_main.png',
      url: 'http://www.crushroutes.com/',
      github: {
        web: 'https://github.com/MSturges/crushRoutesWeb',
        server: 'https://github.com/MSturges/crushRoutesAPI',
        mobile: 'https://github.com/MSturges/crushRoutesMobile',
      }
    },
    {
      id: 2,
      title: 'React Redux.js Comedy',
      images: '/images/comedyCellar.png',
      url: 'https://comedy-cellar.herokuapp.com/',
      github: {
        web: 'https://github.com/MSturges/redux-react-jokes-CRUD',
      }
    },
    {
      id: 3,
      title: 'React Redux.js Weather',
      images: '/images/weather.png',
      url: 'http://reduxreactapp.s3-website-us-west-2.amazonaws.com/',
      github: {
        web: 'https://github.com/MSturges/reduxWeatherApp',
      }
    },
    {
      id: 4,
      title: 'React Redux.js Portfolio',
      images: '/images/portfolio.png',
      url: '#',
      github: {
        web: 'https://github.com/MSturges/portfolio_v2',
      }
    },
    {
      id:5,
      title: 'Angular.js DropZio',
      images: '/images/dropzio1.png',
      url: '#',
      github: {
        web: 'https://github.com/MSturges/dropzioApp2',
        server: 'https://github.com/MSturges/dropzio_server',
      }
    },
    { id:6,
      title: 'Angular.js Yodle',
      images: '/images/yodel1.png',
      url: '#',
      github: {
        web: 'https://github.com/MSturges/YodelApp',
        server: 'https://github.com/MSturges/yodel',
      }
    },
  ];



  return (
    <div className="projects-main-container">
    <h3 className="projects-header"> Web Development Projects</h3>
    <div className="projects-container">
    <ProjectPaperCreator projects={projectData}/>
    </div>
    </div>
  );
}

export default ProfileProjects;

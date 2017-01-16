import { CURRENT_PROJECT } from '../actions/types';

const initialState = {
  projectData: [

    {
      id: 5,
      title: 'Seed Code',
      image: '/images/seedcode.png',
      url: 'https://www.seedcode.com/filemaker-calendar/',
      details: 'I’ve been working remote as a contracted software developer for SeedCode.  My contracts have been recurring and consist of working synchronously with their team of developers for both front-end and back-end live applications. I work heavily in Angular.Js, JavaScript, BootStrap and, Node/Express.  My work consist of charming up the UI, creating additional features to improve UX, and building Node/Express proxy servers that parse calendar data.'
    },
    {
      id: 1,
      title: 'Crush Routes',
      image: '/images/crush_routes_main.png',
      url: 'http://www.crushroutes.com/',
      web: 'https://github.com/MSturges/crushRoutesWeb',
      server: 'https://github.com/MSturges/crushRoutesAPI',
      details: 'Crush Routes is a software designed for climbers of all sorts to share and find climbing spots.  The database of routes can be queried by type of climb (rock, ice, boulder) and by minimum and maximum difficulty.  Crush Routes was created in Angular.js and includes material-ui, leaflet and google maps.  The backend was created with node/express and uses a postgreSQL database.'
    },
    {
      id:2,
      title: 'Dropzio',
      image1: '/images/dropzio1.png',
      image2: '/images/dropzio2.png',
      image3: '/images/dropzio3.png',
      image4: '/images/dropzio4.png',
      web: 'https://github.com/MSturges/dropzioApp2',
      server: 'https://github.com/MSturges/dropzio_server',
      details: 'Dropzio is a geolocation mobile app that allows users to post images and messages to their current location. The posts then become visible to other users in the vicinity. Dropzio was created with Cordova and Ionic and was written in AngularJS. The back end was created using Ruby on Rails and manages users, posts, and geographic data through CRUD operations.'

    },
    {
      id:3,
      title: 'Reddit Clone',
      image: '/images/reddit-clone.png',
      url: 'https://redux-reddit-clone.herokuapp.com/',
      web: 'https://github.com/MSturges/reddit-clone',
      details: 'I was inspired to create a reddit clone while wasting so much time viewing links on reddit. Currently, this app is still in the early stages of development.  But it allows users to post videos from youtube to be commented on and down voted into the oblivion.  The front end was created in React & Redux while the backend was created in node/express and postgreSQL.'

    },
    {
      id: 4,
      title: '5-day Weather',
      image: '/images/weather.png',
      url: 'http://reduxreactapp.s3-website-us-west-2.amazonaws.com/',
      web: 'https://github.com/MSturges/reduxWeatherApp',
      details: '5-day weather allows users to get a 5-day forecast of the weather in any city in the US. 5-day weather uses the open weather API for data and google maps.  The front end was created in React & Redux while being served up on a node/express content server.'
    }
  ]
}

export default function(state = initialState, action) {
  switch (action.type) {

    case CURRENT_PROJECT:
    return { ...state, project: action.payload }
    break

    default:
    return state;
  }
}

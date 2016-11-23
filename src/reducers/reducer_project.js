import { CURRENT_PROJECT } from '../actions/types';

const initialState = {
  projectData: [
    {
      id: 1,
      title: 'Crush Routes',
      header: 'Angular.js',
      footer: 'Node/Express & psql',
      image: '/images/crush_routes_main.png',
      url: 'http://www.crushroutes.com/',
      web: 'https://github.com/MSturges/crushRoutesWeb',
      server: 'https://github.com/MSturges/crushRoutesAPI',
      mobile: 'https://github.com/MSturges/crushRoutesMobile',
      details: 'Crush Routes is a software designed for climbers of all sorts to share and find climbing spots.  The database of routes can be queried by type of climb (rock, ice, boulder) and by minimum and maximum difficulty.  Crush Routes was created in Angular.js and includes material-ui, leaflet and google maps.  The backend was created with node/express and uses a postgreSQL database.'
    },
    {
      id:2,
      title: 'Dropzio',
      header: 'Angular.js & Ionic/Cordova',
      footer: 'Ruby on rails & psql',
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
      header: 'React & Redux',
      footer: 'Node/Express & psql',
      image: '/images/reddit-clone.png',
      url: 'https://redux-reddit-clone.herokuapp.com/',
      web: 'https://github.com/MSturges/reddit-clone',
      details: 'I was inspired to create a reddit clone while wasting so much time viewing links on reddit. Currently, this app is still in the early stages of development.  But it allows users to post videos from youtube to be commented on and down voted into the oblivion.  The front end was created in React & Redux while the backend was created in node/express and postgreSQL.'

    },
    {
      id: 4,
      title: '5-day Weather',
      header: 'React & Redux',
      footer: 'Node/Express',
      image: '/images/weather.png',
      url: 'http://reduxreactapp.s3-website-us-west-2.amazonaws.com/',
      web: 'https://github.com/MSturges/reduxWeatherApp',
      details: '5-day weather allows users to get a 5-day forecast of the weather in any city in the US. 5-day weather uses the open weather API for data and google maps.  The front end was created in React & Redux while being served up on a node/express content server.'
    },
    {
      id: 5,
      title: 'Comedy Cellar',
      header: 'React & Redux',
      footer: 'Node/Express & psql',
      image: '/images/comedyCellar.png',
      url: 'https://comedy-cellar.herokuapp.com/',
      web: 'https://github.com/MSturges/redux-react-jokes-CRUD',
      details: 'Comedy Cellar allows users to create and share jokes with the community. Comedy Cellar is a CRUD application. The front end was created in React & Redux while being served up on a node/express content server.'
    },
    { id:6,
      title: 'Yodel',
      header: 'Angular.js & Ionic/Cordova',
      footer: 'Node/Express & psql',
      image1: '/images/yodel1.png',
      image2: '/images/yodel2.png',
      image3: '/images/yodel3.png',
      image4: '/images/yodel4.png',
      web: 'https://github.com/MSturges/YodelApp',
      server: 'https://github.com/MSturges/yodel',
      details: 'Yodel is a social geolocation mobile app designed to promote meeting new people and face to face interaction. The app allows users to see others within a custom range and send those users messages. It was created in Ionic and Cordova and written in AngularJS. It has a CRUD back end in Express and Knex to manage users and their location data.'

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

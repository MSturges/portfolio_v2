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
      details: 'hi'
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
      details: ''
    },
    {
      id:3,
      title: 'Reddit Clone',
      header: 'React & Redux',
      footer: 'Node/Express & psql',
      image: '/images/reddit-clone.png',
      url: 'https://redux-reddit-clone.herokuapp.com/',
      web: 'https://github.com/MSturges/reddit-clone',
      details: ''

    },
    {
      id: 4,
      title: '5-day Weather',
      header: 'React & Redux',
      footer: 'Node/Express',
      image: '/images/weather.png',
      url: 'http://reduxreactapp.s3-website-us-west-2.amazonaws.com/',
      web: 'https://github.com/MSturges/reduxWeatherApp',
      details: ''
    },
    {
      id: 5,
      title: 'Comedy Cellar',
      header: 'React & Redux',
      footer: 'Node/Express & psql',
      image: '/images/comedyCellar.png',
      url: 'https://comedy-cellar.herokuapp.com/',
      web: 'https://github.com/MSturges/redux-react-jokes-CRUD',
      details: ''
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
      details: ''

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

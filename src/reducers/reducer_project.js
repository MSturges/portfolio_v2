import { CURRENT_PROJECT } from '../actions/types';

const initialState = {
  projectData: [
    {
      id: 1,
      title: 'Angular.js CrushRoutes',
      footer: 'Node/Express & psql',
      images: '/images/crush_routes_main.png',
      url: 'http://www.crushroutes.com/',
      github: {
        web: 'https://github.com/MSturges/crushRoutesWeb',
        server: 'https://github.com/MSturges/crushRoutesAPI',
        mobile: 'https://github.com/MSturges/crushRoutesMobile',
      }
    },
    {
      id:2,
      title: 'Redux Reddit Clone',
      footer: 'Node/Express & psql',
      images: '/images/reddit-clone.png',
      url: 'https://redux-reddit-clone.herokuapp.com/',
      github: {
        web: 'https://github.com/MSturges/reddit-clone',
        server: '#/no',
      }
    },
    {
      id:3,
      title: 'Ionic/Cordova Dropzio',
      footer: 'Ruby on rails & psql',
      images: '/images/dropziomain.png',
      url: '#',
      github: {
        web: 'https://github.com/MSturges/dropzioApp2',
        server: 'https://github.com/MSturges/dropzio_server',
      }
    },
    {
      id: 4,
      title: 'React Redux.js Weather',
      footer: 'Node/Express',
      images: '/images/weather.png',
      url: 'http://reduxreactapp.s3-website-us-west-2.amazonaws.com/',
      github: {
        web: 'https://github.com/MSturges/reduxWeatherApp',
      }
    },
    {
      id: 5,
      title: 'React Redux.js Comedy',
      footer: 'Node/Express & psql',
      images: '/images/comedyCellar.png',
      url: 'https://comedy-cellar.herokuapp.com/',
      github: {
        web: 'https://github.com/MSturges/redux-react-jokes-CRUD',
      }
    },
    { id:6,
      title: 'Ionic/Cordova Yodle',
      footer: 'Node/Express & psql',
      images: '/images/yodelmain.png',
      url: '#',
      github: {
        web: 'https://github.com/MSturges/YodelApp',
        server: 'https://github.com/MSturges/yodel',
      }
    },
    {
      id: 7,
      title: 'React Redux.js Portfolio',
      footer: 'Node/Express',
      images: '/images/portfolio.png',
      url: '#',
      github: {
        web: 'https://github.com/MSturges/portfolio_v2',
      }
    },
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

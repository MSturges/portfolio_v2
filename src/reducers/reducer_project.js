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
      mobile: 'https://github.com/MSturges/crushRoutesMobile'
    },
    {
      id:2,
      title: 'Reddit Clone',
      header: 'React & Redux',
      footer: 'Node/Express & psql',
      image: '/images/reddit-clone.png',
      url: 'https://redux-reddit-clone.herokuapp.com/',
      web: 'https://github.com/MSturges/reddit-clone',
      server: '#/no'

    },
    {
      id:3,
      title: 'Dropzio',
      header: 'Angular.js & Ionic/Cordova',
      footer: 'Ruby on rails & psql',
      image: '/images/dropziomain.png',
      url: '#',
      web: 'https://github.com/MSturges/dropzioApp2',
      server: 'https://github.com/MSturges/dropzio_server',

    },
    {
      id: 4,
      title: '5-day Weather',
      header: 'React & Redux',
      footer: 'Node/Express',
      image: '/images/weather.png',
      url: 'http://reduxreactapp.s3-website-us-west-2.amazonaws.com/',
      web: 'https://github.com/MSturges/reduxWeatherApp'

    },
    {
      id: 5,
      title: 'Comedy Cellar',
      header: 'React & Redux',
      footer: 'Node/Express & psql',
      image: '/images/comedyCellar.png',
      url: 'https://comedy-cellar.herokuapp.com/',
      web: 'https://github.com/MSturges/redux-react-jokes-CRUD'
    },
    { id:6,
      title: 'Yodel',
      header: 'Angular.js & Ionic/Cordova',
      footer: 'Node/Express & psql',
      image: '/images/yodelmain.png',
      url: '#',
      web: 'https://github.com/MSturges/YodelApp',
      server: 'https://github.com/MSturges/yodel'

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

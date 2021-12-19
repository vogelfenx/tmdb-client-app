import MovieList from './components/list';
import Detail from './components/detail';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator(
  {
    Movies: MovieList,
    Detail: Detail
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#90cea1'
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  })

const App = createAppContainer(AppNavigator)

export default App;
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShowScreen: ResultsShowScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Search Restaurant'
    }
  }
);

export default createAppContainer(navigator);

// Client ID
// AgmeVPBVj5mrC-RuLfXFrQ

// API Key
// 6h4M1VTdSUZFPiPHwa1jNOsNwyvP-42ZvTdfsGQw3e-rgyYYvJ32S2gwLuitBJDwcj6K_uyPJzAJ56GtvPeorHakAqoiShie6MBeE24KGLEIzvtCbhjtLY291YWXX3Yx

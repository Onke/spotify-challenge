/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import NavBar from "./components/BottomNavBar"

AppRegistry.registerComponent(appName, () => NavBar);

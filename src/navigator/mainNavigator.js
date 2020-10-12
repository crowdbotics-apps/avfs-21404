import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings139334Navigator from '../features/Settings139334/navigator';
import NotificationList139333Navigator from '../features/NotificationList139333/navigator';
import Maps139332Navigator from '../features/Maps139332/navigator';
import UserProfile139281Navigator from '../features/UserProfile139281/navigator';
import Maps139262Navigator from '../features/Maps139262/navigator';
import Settings139240Navigator from '../features/Settings139240/navigator';
import Settings139225Navigator from '../features/Settings139225/navigator';
import NotificationList139224Navigator from '../features/NotificationList139224/navigator';
import Maps139223Navigator from '../features/Maps139223/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings139334: { screen: Settings139334Navigator },
NotificationList139333: { screen: NotificationList139333Navigator },
Maps139332: { screen: Maps139332Navigator },
UserProfile139281: { screen: UserProfile139281Navigator },
Maps139262: { screen: Maps139262Navigator },
Settings139240: { screen: Settings139240Navigator },
Settings139225: { screen: Settings139225Navigator },
NotificationList139224: { screen: NotificationList139224Navigator },
Maps139223: { screen: Maps139223Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

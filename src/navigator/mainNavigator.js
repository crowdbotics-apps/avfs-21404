import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
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

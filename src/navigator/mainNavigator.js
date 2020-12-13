import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile184771Navigator from '../features/UserProfile184771/navigator';
import Tutorial184770Navigator from '../features/Tutorial184770/navigator';
import NotificationList184742Navigator from '../features/NotificationList184742/navigator';
import Settings184741Navigator from '../features/Settings184741/navigator';
import Settings184733Navigator from '../features/Settings184733/navigator';
import UserProfile184731Navigator from '../features/UserProfile184731/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile184771: { screen: UserProfile184771Navigator },
Tutorial184770: { screen: Tutorial184770Navigator },
NotificationList184742: { screen: NotificationList184742Navigator },
Settings184741: { screen: Settings184741Navigator },
Settings184733: { screen: Settings184733Navigator },
UserProfile184731: { screen: UserProfile184731Navigator },

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

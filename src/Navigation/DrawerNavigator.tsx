import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import {DrawerParamList} from '../types/navigationTypes';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="BottomTab" component={BottomTabNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

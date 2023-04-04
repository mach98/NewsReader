import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import {DrawerParamList} from '../types/navigationTypes';
import BottomTabNavigator from './BottomTabNavigator';
import DrawerContent from '../Component/DrawerContent/DrawerContent';

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="BottomTab" component={BottomTabNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

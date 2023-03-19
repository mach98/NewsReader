import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';

const Drawer = createDrawerNavigator();

export type DrawerParamList = {
  Profile: undefined;
};

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;

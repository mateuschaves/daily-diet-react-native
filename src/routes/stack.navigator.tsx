import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import NewSnackScreen from '~/screens/NewSnack';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="NewSnack" component={NewSnackScreen} />
    </Stack.Navigator>
  );
};

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '~/screens/Home';
import NewSnackScreen from '~/screens/NewSnack';
import SnackAdded from '~/screens/SnackAdded';
import SnackResume from '~/screens/SnackResume';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="NewSnack" component={NewSnackScreen} />
      <Stack.Screen name="SnackResume" component={SnackResume} />
      <Stack.Screen name="SnackAdded" component={SnackAdded} />
    </Stack.Navigator>
  );
};

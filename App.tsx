import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

import { NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';

import { StackNavigator } from '~/routes/stack.navigator';
import { ThemeProvider } from 'styled-components';

import theme from '~/theme';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <StackNavigator />
        </ThemeProvider>
      </NavigationContainer>
    );
  }
}

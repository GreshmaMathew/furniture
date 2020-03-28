import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Welcome from '../screens/welcomeScreen';
import Details from '../screens/detailsScreen';
function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="DETAILS" component={Details} />
        <Stack.Screen name="WELCOME" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Router;

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import Bussula from './screens/Bussula';

const Stack = createStackNavigator();

const RootNavigation = ({navigation}) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Bussula' component={Bussula} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default RootNavigation;
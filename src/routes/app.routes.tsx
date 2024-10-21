import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '@screens/Home'
import { Players } from '@screens/Players'
import { NewGroup } from '@screens/NewGroup'

const StackNavigator = createNativeStackNavigator()

export const Routes = () => (
  <NavigationContainer>
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackNavigator.Screen name="Home" component={Home} />
      <StackNavigator.Screen name="Players" component={Players} />
      <StackNavigator.Screen name="NewGroup" component={NewGroup} />
    </StackNavigator.Navigator>
  </NavigationContainer>
)

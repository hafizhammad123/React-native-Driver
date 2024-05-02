import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginPage from '../Screen/Login';
import DashboradPage from '../Screen/Dasborad';
import RideHistory from '../Screen/RideHistory';
import RegisterPage from '../Screen/Register';




const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


export function Navigate () {
    return<>
     <NavigationContainer>
     <Drawer.Navigator>
      <Drawer.Screen name="Accept Ride" component={StackNavigte} />
      <Drawer.Screen name="Ride History" component={MyRideHistory} />
    </Drawer.Navigator>
    </NavigationContainer>
    
    </>
}

function StackNavigte () {
    return<>
     <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Dashboard" component={DashboradPage} />
      <Stack.Screen name="Register" component={RegisterPage} />
    </Stack.Navigator>
    </>
}


function MyRideHistory () {
    return<>
     <Stack.Navigator>
      <Stack.Screen name="Ride History" component={RideHistory} />
    </Stack.Navigator>
    </>
}
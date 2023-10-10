import 'react-native-gesture-handler';

import React from 'react';
import DrawerNavigator from './navigation/DrawerNavigator';
import Login from './screens/Login';
import Register from './screens/Register';
import OnBoarding from './screens/ShowBoarding';
import Landingscreen from './screens/LandingScreen';
import Menu from './screens/Menu';
import ProductInfo from './screens/ProductInfo';
import Category from './screens/Category';
import Home from './screens/Home';
import Product from './screens/Product';
import Cart from './screens/Cart';
import Chitietsp from './screens/ChitietSP';
// import Phanhoi from './screens/Phanhoi';
import FeedbackScreen from './screens/Comment';
import Search from './screens/Search';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='OnBoarding' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="HomeScreen" component={DrawerNavigator} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Landingscreen" component={Landingscreen} />
        <Stack.Screen name='Cart' component={Cart} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="ProductInfo" component={ProductInfo} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name='Chitietsp' component={Chitietsp} />
        <Stack.Screen name='FeedbackScreen' component={FeedbackScreen} />
        <Stack.Screen name='Search' component={Search} />
        {/* <Stack.Screen name='Phanhoi' component={Phanhoi} /> */}
      </Stack.Navigator>
    </NavigationContainer >
  )
}

// import Phanhoi from "./screens/Phanhoi";
// import FeedbackScreen from "./screens/Comment";
// import React from 'react';
// import { View } from 'react-native';
// // import FeedbackScreen from './FeedbackScreen';

// const App = () => {
//   return (
//     <View>
//       <FeedbackScreen />
//     </View>
//   );
// };

// export default App;
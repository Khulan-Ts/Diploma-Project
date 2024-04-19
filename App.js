import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';
import Header from './src/components/Header'; 
import AnotherScreen from './AnotherScreen';
//Admissions
import Undergraduate from './screens/Admissons/Undergraduate';
import Graduate from './screens/Admissons/Graduate';
import Twoplus2 from './screens/Admissons/Twoplus2';
import AcademicCal from './screens/Admissons/AcademicCalendar';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        mode="card"
        screenOptions={({ navigation, route }) => ({
          header: (props) => (
            <Header
              type={"Primary"}
              buttontext={["about us", "academics", "admissions", "LEI"]}
              logoOnPress={() => navigation.navigate('MIU - Mongolia International University')}
              Button1Press={() => navigation.navigate('Another')} 
              {...props} 
            />
          ),
          cardStyle: {flex: 1}
        })}
      >
        <Stack.Screen name="MIU - Mongolia International University" component={HomeScreen} />
        <Stack.Screen name="Another" component={AnotherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

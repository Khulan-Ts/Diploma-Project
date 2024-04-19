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
import Dorm from './Dorm';

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
              Button2Press={() => navigation.navigate('Undergraduate')} 
              {...props} 
            />
          ),
          cardStyle: {flex: 1}
        })}
      >
        <Stack.Screen name="MIU - Mongolia International University" component={HomeScreen} />
        <Stack.Screen name="Undergraduate" component={Undergraduate} />
        <Stack.Screen name="Graduate" component={Graduate} />
        <Stack.Screen name="Twoplus2" component={Twoplus2} />
        <Stack.Screen name="Academic Calendar" component={AcademicCal} />
        <Stack.Screen name="Another" component={AnotherScreen} />
        <Stack.Screen name="Dorm" component={Dorm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

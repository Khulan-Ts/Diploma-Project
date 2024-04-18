import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';
import Header from './src/components/Header'; 
import AcademicCal from './AcademicCalendar';
import AnotherScreen from './AnotherScreen';
import Graduate from './Graduate';

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
              Button2Press={() => navigation.navigate('Graduate')}
              {...props} 
            />
          ),
          cardStyle: {flex: 1}
        })}
      >
        <Stack.Screen name="MIU - Mongolia International University" component={HomeScreen} />
        <Stack.Screen name="Academic Calendar" component={AcademicCal} />
        <Stack.Screen name="Another" component={AnotherScreen} />
        <Stack.Screen name="Graduate" component={Graduate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

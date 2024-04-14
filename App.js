import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';
import Header from './src/components/Header'; 
import AcademicCal from './AcademicCalendar';
import AnotherScreen from './AnotherScreen';

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
              style={{ backgroundColor: '#3d2562' }}
              logoOnPress={() => navigation.navigate('MIU - Mongolia International University')}
              Button1Press={() => navigation.navigate('AcademicCal')}
              Button2Press={() => navigation.navigate('Another')}
              {...props} 
            />
          ),
          cardStyle: {flex: 1}
        })}
      >
        <Stack.Screen name="MIU - Mongolia International University" component={HomeScreen} />
        <Stack.Screen name="AcademicCal" component={AcademicCal} />
        <Stack.Screen name="Another" component={AnotherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

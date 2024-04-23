import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Twoplus2';
import AnotherScreen from './AnotherScreen';
import Header from './src/components/Header'; 
import Twoplus2 from './Twoplus2';
import Scholarship from './Scholarship';
import AboutUs from './AboutUs';
import OurPeople from './OurPeople';

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
              Button1Press={() => navigation.navigate('Scholarship')} 
              Button2Press={() => navigation.navigate('Twoplus2')}
              {...props} 
            />
          ),
          cardStyle: {flex: 1}
        })}
      >
        <Stack.Screen name="MIU - Mongolia International University" component={HomeScreen} />
        <Stack.Screen name="Scholarship" component={Scholarship} />
        <Stack.Screen name="Twoplus2" component={Twoplus2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

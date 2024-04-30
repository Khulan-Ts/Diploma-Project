import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';
import Header from './src/components/Header'; 
import AnotherScreen from './AnotherScreen';
//Academics
import Undergraduate from './screens/Academic/Undergraduate';
import Graduate from './screens/Academic/Graduate';
import Twoplus2 from './screens/Academic/Twoplus2';
import Exchange from './screens/Academic/Exchange';
import AcademicCal from './screens/Academic/AcademicCalendar';
import Dorm from './Dorm'
import AboutUs from './screens/About us/AboutUs';
import OurPeople from './screens/About us/OurPeople';
import MBA from './screens/Academic/MBA';

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
              Button1Press={() => navigation.navigate('About us')} 
              {...props} 
            />
          ),
          cardStyle: {flex: 1}
        })}
      >
        <Stack.Screen name="MIU - Mongolia International University" component={HomeScreen} />
        <Stack.Screen name="Undergraduate" component={Undergraduate} />
        <Stack.Screen name="Graduate" component={Graduate} />
        <Stack.Screen name="2 + 2 program" component={Twoplus2} />
        <Stack.Screen name="Exchange student Program" component={Exchange} />
        {/*<Stack.Screen name="Academic Calendar" component={AcademicCal} />*/}
        <Stack.Screen name="Another" component={AnotherScreen} />
        <Stack.Screen name="Dorm" component={Dorm} />
        <Stack.Screen name="About us" component={AboutUs} />
        <Stack.Screen name="Our people" component={OurPeople} />
        <Stack.Screen name="MBA" component={MBA} />



      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
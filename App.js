import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';
import Header from './src/components/Header'; 
import AnotherScreen from './AnotherScreen';
import Undergraduate from './screens/Academic/Undergraduate';
import Graduate from './screens/Academic/Graduate';
import Twoplus2 from './screens/Academic/Twoplus2';
import Exchange from './screens/Academic/Exchange';
import AcademicCal from './screens/Academic/AcademicCalendar';
import Howtoapply from './Admissions/Howtoapply';
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
              style={{ backgroundColor: '#3d2562' }}
              //logoOnPress={() => navigation.navigate('MIU - Mongolia International University')}
              //Button1Press={() => navigation.navigate('Another')} 
              logoOnPress={() => navigation.navigate('MIU - Mongolia International University')}
              Button3Press={() => navigation.navigate('How to Apply')} 
              {...props} 
            />
          ),
          cardStyle: {flex: 1}
        })}
      >
        <Stack.Screen name="Undergraduate" component={Undergraduate} />
        <Stack.Screen name="MIU - Mongolia International University" component={HomeScreen} />
        <Stack.Screen name="Graduate" component={Graduate} />
        <Stack.Screen name="Twoplus2" component={Twoplus2} />
        <Stack.Screen name="Exchange student Program" component={Exchange} />
        <Stack.Screen name="Academic Calendar" component={AcademicCal} />
        <Stack.Screen name="Another" component={AnotherScreen} />
        <Stack.Screen name="How to Apply" component={Howtoapply}/>
        {/*<Stack.Screen name="Dorm" component={Dorm} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

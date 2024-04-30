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
import Howtoapply_Under from './screens/Admissions/howtoapply_undergrad';
import Dorm from './screens/Dorm/Dorm_AF';
import Overview from './screens/Admissions/Overview';
import Lei_1 from './screens/LEI/Lei_1';
import Lei_2 from './screens/LEI/Lei_2';
import Lei_3 from './screens/LEI/Lei_3';
import Lei_4 from './screens/LEI/Lei_4';
import Lei_5 from './screens/LEI/Lei_5';
import AboutUs from './screens/About us/AboutUs';
import OurPeople from './screens/About us/OurPeople';
import Scholarship from './screens/Admissions/Scholarship';
import PlanReport from './screens/About us/PlanReport';
import Howtoapply_Graduate from './screens/Admissions/howtoapply_graduate';
import Bachelor_BA from './screens/Academic/Bachelor_BA';

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
              //logoOnPress={() => navigation.navigate('MIU - Mongolia International University')}
              // Button3Press={() => navigation.navigate('How to Apply Undergraduate')} 
              Button3Press={() => navigation.navigate('Bachelor')} 
              {...props} 
            />
          ),
          cardStyle: {flex: 1}
        })}
      >
        <Stack.Screen name="Bachelor" component={Bachelor_BA}/>
        <Stack.Screen name="How to Apply Graduate" component={Howtoapply_Graduate}/>
        <Stack.Screen name="How to Apply Undergraduate" component={Howtoapply_Under}/>
        <Stack.Screen name="Undergraduate" component={Undergraduate} />
        {/* <Stack.Screen name="MIU - Mongolia International University" component={HomeScreen} />
        <Stack.Screen name="Graduate" component={Graduate} />
        <Stack.Screen name="2 + 2 program" component={Twoplus2} />
        <Stack.Screen name="Exchange student Program" component={Exchange} />
        <Stack.Screen name="Academic Calendar" component={AcademicCal} />
        <Stack.Screen name="Another" component={AnotherScreen} />
        {/*<Stack.Screen name="Dorm" component={Dorm} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
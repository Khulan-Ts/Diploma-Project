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
import Givinginfo1 from './screens/About us/Givinginfo1';

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
              Button3Press={() => navigation.navigate('Over View')}
              {...props} 
            />
          ),
          cardStyle: {flex: 1}
        })}
      >
        {/* <Stack.Screen name="MIU - Mongolia International University" component={HomeScreen} />
        <Stack.Screen name="Undergraduate" component={Undergraduate} />
        <Stack.Screen name="Graduate" component={Graduate} />
        <Stack.Screen name="2 + 2 program" component={Twoplus2} />
        <Stack.Screen name="Exchange student Program" component={Exchange} />
        <Stack.Screen name="Academic Calendar" component={AcademicCal} />
        <Stack.Screen name="Another" component={Overview} />
        <Stack.Screen name="Dorm" component={Dorm} />
        <Stack.Screen name="English Foundation Course" component={Lei_1} />
        <Stack.Screen name="English Evening Course" component={Lei_2} />
        <Stack.Screen name="Business English Course" component={Lei_3} />
        <Stack.Screen name="Mongolian Course" component={Lei_4} />
        <Stack.Screen name="Additional Language Course" component={Lei_5} />
        <Stack.Screen name="About us" component={AboutUs} />
        <Stack.Screen name="Our people" component={OurPeople} />
        <Stack.Screen name="Plan and Report" component={PlanReport} />
        <Stack.Screen name="Over View" component={Overview} />
        <Stack.Screen name="Scholarship" component={Scholarship} /> */}
        <Stack.Screen name="Givinginfo1" component={Givinginfo1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
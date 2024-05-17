import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';
import Header from './src/components/Header'; 
//Academics
import Undergraduate from './screens/Academic/Undergraduate';
import Graduate from './screens/Academic/Graduate';
import Twoplus2 from './screens/Academic/Twoplus2';
import Exchange from './screens/Academic/Exchange';
import AcademicCal from './screens/Academic/AcademicCalendar';
//Dorm
import Dorm from './screens/Dorm/Dorm';
//Admission
import Overview from './screens/Admissions/Overview';
import Scholarship from './screens/Admissions/Scholarship1';
import Howtoapply_Under from './screens/Admissions/howtoapply_undergrad';
import Howtoapply_Graduate from './screens/Admissions/howtoapply_graduate';
//Lei
import Lei_1 from './screens/LEI/Lei_1';
import Lei_2 from './screens/LEI/Lei_2';
import Lei_3 from './screens/LEI/Lei_3';
import Lei_4 from './screens/LEI/Lei_4';
import Lei_5 from './screens/LEI/Lei_5';
//About us
import AboutUs from './screens/About us/AboutUs';
import OurPeople from './screens/About us/OurPeople';
import PlanReport from './screens/About us/PlanReport';
import GivingInfo from './screens/About us/Givinginfo1';
//Bachelor
import Bachelor_BA from './screens/Bachelor/Bachelor_BA';
import Bachelor_CS from './screens/Bachelor/Bachelor_CS';
import Bachelor_EE from './screens/Bachelor/Bachelor_EE';
import Bachelor_HTM from './screens/Bachelor/Bachelor_HTM';
import Bachelor_IR from './screens/Bachelor/Bachelor_IR';
import Bachelor_MC from './screens/Bachelor/Bachelor_MC';
import Bachelor_ME from './screens/Bachelor/Bachelor_ME';
import Bachelor_FD from './screens/Bachelor/Bachelor_FD';
import Bachelor_SE from './screens/Bachelor/Bachelor_SE';
//Master
import Master_Public from './screens/Master/Master_Public';
import Master_SE from './screens/Master/Master_SE';
import Master_MBA from './screens/Master/Master_MBA';
import Master_FLE from './screens/Master/Master_FLE';


const Stack = createStackNavigator();

const App = () => {
  const [language, setLanguage] = React.useState('en');

  const handleTranslatePress = (lang) =>{
    setLanguage(lang)
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          header: (props) => (
            <Header
              type={"Primary"}
              buttontext={["about us", "academics", "admissions", "LEI"]}
              logoOnPress={() => navigation.navigate('MIU - Mongolia International University')}
              ButtonPress={[() => navigation.navigate('About us'), () => navigation.navigate('Undergraduate'), 
              () => navigation.navigate('Over View'), () => navigation.navigate("English Foundation Course")]}
              onTranslatePress={handleTranslatePress}
              language={language}
              {...props} 
            />
          ),
          cardStyle: {flex: 1}
        })}
      > 
        
        <Stack.Screen name="MIU - Mongolia International University">
          {props => <HomeScreen {...props} language={language} />}
        </Stack.Screen> 
        <Stack.Screen name="Undergraduate">
          {props => <Undergraduate {...props} language={language} />}
        </Stack.Screen> 
        <Stack.Screen name="Graduate">
          {props => <Graduate {...props} language={language} />}
        </Stack.Screen> 
        <Stack.Screen name="2 + 2 program" component={Twoplus2} />
        <Stack.Screen name="Exchange student Program" component={Exchange} /> 
        <Stack.Screen name="Academic Calendar" component={AcademicCal} />
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
        <Stack.Screen name="Scholarship" component={Scholarship} />
        <Stack.Screen name="Giving Information" component={GivingInfo} />
        <Stack.Screen name="How To Apply Graduate" component={Howtoapply_Graduate} />
        <Stack.Screen name="How To Apply UnderGraduate" component={Howtoapply_Under} />
        <Stack.Screen name="Bachelor BA" component={Bachelor_BA} />
        <Stack.Screen name="Bachelor EE" component={Bachelor_EE} />
        <Stack.Screen name="Bachelor CS" component={Bachelor_CS} />
        <Stack.Screen name="Bachelor HTM" component={Bachelor_HTM} />
        <Stack.Screen name="Bachelor IR" component={Bachelor_IR} />
        <Stack.Screen name="Bachelor MC" component={Bachelor_MC} />
        <Stack.Screen name="Bachelor FD" component={Bachelor_FD} />
        <Stack.Screen name="Bachelor ME" component={Bachelor_ME} />
        <Stack.Screen name="Bachelor SE" component={Bachelor_SE} />
        <Stack.Screen name="Master Public" component={Master_Public} />
        <Stack.Screen name="Master SE" component={Master_SE} />
        <Stack.Screen name="Master MBA" component={Master_MBA} />
        <Stack.Screen name="Master FLE" component={Master_FLE} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
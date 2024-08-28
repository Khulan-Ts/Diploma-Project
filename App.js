import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';
import Header from './src/components/Header'; 
import data from './static.json';
import en from './staticEN.json';
import mn from './staticMN.json';
import ru from './staticRU.json';
// Academics
import Undergraduate from './screens/Academic/Undergraduate';
import Graduate from './screens/Academic/Graduate';
import Twoplus2 from './screens/Academic/Twoplus2';
import Exchange from './screens/Academic/Exchange';
import AcademicCal from './screens/Academic/AcademicCalendar';
// Dorm
import Dorm from './screens/Dorm/Dorm';
// Admission
import Overview from './screens/Admissions/Overview';
import Scholarship from './screens/Admissions/Scholarship1';
import Howtoapply_Under from './screens/Admissions/howtoapply_undergrad';
import Howtoapply_Graduate from './screens/Admissions/howtoapply_graduate';
// Lei
import Lei_1 from './screens/LEI/Lei_1';
import Lei_2 from './screens/LEI/Lei_2';
import Lei_3 from './screens/LEI/Lei_3';
import Lei_4 from './screens/LEI/Lei_4';
import Lei_5 from './screens/LEI/Lei_5';
// About us
import AboutUs from './screens/About us/AboutUs';
import OurPeople from './screens/About us/OurPeople';
import PlanReport from './screens/About us/PlanReport';
import GivingInfo from './screens/About us/Givinginfo1';
// Bachelor
import Bachelor_BA from './screens/Bachelor/Bachelor_BA';
import Bachelor_CS from './screens/Bachelor/Bachelor_CS';
import Bachelor_EE from './screens/Bachelor/Bachelor_EE';
import Bachelor_HTM from './screens/Bachelor/Bachelor_HTM';
import Bachelor_IR from './screens/Bachelor/Bachelor_IR';
import Bachelor_MC from './screens/Bachelor/Bachelor_MC';
import Bachelor_ME from './screens/Bachelor/Bachelor_ME';
import Bachelor_FD from './screens/Bachelor/Bachelor_FD';
import Bachelor_SE from './screens/Bachelor/Bachelor_SE';
// Master
import Master_Public from './screens/Master/Master_Public';
import Master_SE from './screens/Master/Master_SE';
import Master_MBA from './screens/Master/Master_MBA';
import Master_FLE from './screens/Master/Master_FLE';

const Stack = createStackNavigator();

const App = () => {
  const [language, setLanguage] = React.useState('en');

  const handleTranslatePress = (lang) => {
    setLanguage(lang);
  };

  const getHeaderContent = (lang) => {
    switch (lang) {
      case 'mn':
        return mn.header;
      case 'ru':
        return ru.header;
      case 'en':
      default:
        return en.header;
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          header: (props) => (
            <Header
              type={"Primary"}
              buttontext={getHeaderContent(language)}
              logoOnPress={() => navigation.navigate('MIU - Mongolia International University')}
              ButtonPress={[
                () => navigation.navigate('About us'),
                () => navigation.navigate('Undergraduate'),
                () => navigation.navigate('Over View'),
                () => navigation.navigate("English Foundation Course")
              ]}
              onTranslatePress={handleTranslatePress}
              language={language}
              {...props}
            />
          ),
          cardStyle: { flex: 1 }
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
        <Stack.Screen name="2 + 2 program">
          {props => <Twoplus2 {...props} language={language} />}
        </Stack.Screen>
        <Stack.Screen name="Exchange student Program">
          {props => <Exchange {...props} language={language} />}
        </Stack.Screen>
        <Stack.Screen name="Academic Calendar">
          {props => <AcademicCal {...props} language={language} />}
        </Stack.Screen>
        <Stack.Screen name="Dorm">
          {props => <Dorm {...props} language={language} />}
        </Stack.Screen>
        <Stack.Screen name="English Foundation Course">
          {props => <Lei_1 {...props} language={language} />}
        </Stack.Screen>
        <Stack.Screen name="English Evening Course">
          {props => <Lei_2 {...props} language={language} />}
        </Stack.Screen>
        <Stack.Screen name="Business English Course">
          {props => <Lei_3 {...props} language={language} />}
        </Stack.Screen>
        <Stack.Screen name="Mongolian Course">
          {props => <Lei_4 {...props} language={language} />}
        </Stack.Screen>
        <Stack.Screen name="Additional Language Course">
          {props => <Lei_5 {...props} language={language} />}
        </Stack.Screen>
        <Stack.Screen name="About us">
          {props => <AboutUs {...props} language={language} />}
        </Stack.Screen>
        <Stack.Screen name="Our people">
          {props => <OurPeople {...props} language={language} />}
        </Stack.Screen>
        <Stack.Screen name="Plan and Report">
          {props => <PlanReport {...props} language={language} />}
        </Stack.Screen>
        <Stack.Screen name="Giving Information">
        {props => <GivingInfo {...props} language={language} />}
        </Stack.Screen>
        <Stack.Screen name="Over View">
          {props => <Overview {...props} language={language} />}
        </Stack.Screen>
        <Stack.Screen name="Scholarship">
          {props => <Scholarship {...props} language={language} />}
        </Stack.Screen>
        <Stack.Screen name="How To Apply Graduate">
          {props => <Howtoapply_Graduate {...props} language={language} />}
        </Stack.Screen>
        <Stack.Screen name="How To Apply UnderGraduate">
          {props => <Howtoapply_Under {...props} language={language} />}
        </Stack.Screen>
        <Stack.Screen name="Business Administration" >
          {props => <Bachelor_BA {...props} language={language} />}
        </Stack.Screen>
        <Stack.Screen name="English Education">
          {props => <Bachelor_EE {...props} language={language} />}
        </Stack.Screen>
        <Stack.Screen name="Computer Science">
          {props => <Bachelor_CS {...props} language={language} />}
        </Stack.Screen>
        <Stack.Screen name="Hotel Management">
          {props => <Bachelor_HTM {...props} language={language} />}
        </Stack.Screen>
        <Stack.Screen name="International Relations">
          {props => <Bachelor_IR {...props} language={language} />}
        </Stack.Screen>
        <Stack.Screen name="Media Communication">
          {props => <Bachelor_MC {...props} language={language} />}
        </Stack.Screen>
        <Stack.Screen name="Fashion Design">
          {props => <Bachelor_FD {...props} language={language} />}
        </Stack.Screen>
        <Stack.Screen name="Music Education">
          {props => <Bachelor_ME {...props} language={language} />}
        </Stack.Screen>
        <Stack.Screen name="Software Engineering">
          {props => <Bachelor_SE {...props} language={language} />}
        </Stack.Screen>
        <Stack.Screen name="Master Public Administration">
          {props => <Master_Public {...props} language={language} />}
        </Stack.Screen>
        <Stack.Screen name="Master Software Engineering">
        {props => <Master_SE {...props} language={language} />}
        </Stack.Screen>
        <Stack.Screen name="Master Business Administration">
          {props => <Master_MBA {...props} language={language} />}
        </Stack.Screen>
        <Stack.Screen name="Master Foreign Language Education">
          {props => <Master_FLE {...props} language={language} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

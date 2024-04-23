
import React from 'react';
import { View, Text } from 'react-native';
import HoverButton from './src/components/hoverButtons';
import Tooltip from './src/components/Tooltip'
import Button from './src/components/Button';

const AnotherScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Tooltip text={"70%:  (Grammar, Vocabulary, Reading, Essay & Speaking) – Applicants will be notified with MIU Entrance Exam schedule, and join MIU Entrance Exam ( and Skill Test for EE, MC, ME Departments) through Zoom (For the students who are residing outside Mongolia)."} lines={3}
      style={{width: 800}}>
        <View style={{width: 50, height: 50, backgroundColor: '#000'}}></View>
      </Tooltip>
    </View>
  );
};

export default AnotherScreen;

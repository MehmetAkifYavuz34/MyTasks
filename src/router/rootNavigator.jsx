import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import Home from '../screens/home';
import AddTask from '../screens/addTask';
import TaskDetail from '../screens/taskDetail';
import {ADDTASKS, TASKDETAİL, TASKS} from '../utils/routes';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={TASKS} component={Home} />
      <Stack.Screen name={ADDTASKS} component={AddTask} />
      <Stack.Screen name={TASKDETAİL} component={TaskDetail} />
    </Stack.Navigator>
  );
}

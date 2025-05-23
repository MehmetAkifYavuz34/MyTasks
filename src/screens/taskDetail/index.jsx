import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppColors} from '../../theme/color';
import {Button, Divider} from '@ui-kitten/components';
import moment from 'moment';
import {setCategory} from '../../utils/function';
import {status, taskValues} from '../../utils/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TASKS} from '../../utils/routes';

const TaskDetail = ({route, navigation}) => {
  const {item} = route.params;

  const deleteTask = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem('task');
      if (savedTasks === null) return;
      const tasks = JSON.parse(savedTasks);
      const filteredTasks = tasks.filter(task => task.id !== item.id);
      await AsyncStorage.setItem('task', JSON.stringify(filteredTasks));
      navigation.navigate(TASKS);
    } catch (error) {}
  };
  const updateTask = async newStatus => {
    try {
      const savedTasks = await AsyncStorage.getItem('task');
      if (savedTasks === null) {
        return;
      }
      const tasks = JSON.parse(savedTasks);
      const updatedTask = tasks.map(task => {
        if (task.id === item.id) {
          return {
            ...task,
            status: newStatus,
          };
        }
        return task;
      });
      await AsyncStorage.setItem('task', JSON.stringify(updatedTask));
      navigation.navigate(TASKS);
    } catch (error) {}
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}> Title:</Text>
          <Text> {item.title}</Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}> Description:</Text>
          <Text> {item.description}</Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}> Start Date:</Text>
          <Text> {moment(item.startDate).format('DD/MM/YYYY')}</Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}> End Date:</Text>
          <Text> {moment(item.endDate).format('DD/MM/YYYY')}</Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}> Category:</Text>
          <Text> {setCategory(item.category)}</Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}> Title:</Text>
          <Text>
            {taskValues.find(task => task.status === item?.status)?.title}
          </Text>
        </View>
        <Divider />
      </ScrollView>
      <View>
        <Button
          onPress={() => updateTask(status.PENDING)}
          style={styles.button}
          status="primary">
          START
        </Button>
        <Button
          onPress={() => updateTask(status.COMPLETED)}
          style={styles.button}
          status="success">
          COMPLETED
        </Button>
        <Button
          onPress={() => updateTask(status.CANCEL)}
          style={styles.button}
          status="danger">
          CANCEL
        </Button>
        <Button onPress={deleteTask} style={styles.button} status="warning">
          DELETE
        </Button>
      </View>
    </View>
  );
};

export default TaskDetail;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: AppColors.WHİTE, padding: 10},
  button: {
    marginVertical: 5,
  },
});

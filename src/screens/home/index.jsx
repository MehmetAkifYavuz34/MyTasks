import {FlatList, RefreshControl, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

import FloatActionButton from '../../components/ui/floatActionButton';
import {ADDTASKS} from '../../utils/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskCard from '../../components/home/taskCard';
import HeaderComponent from '../../components/home/HeaderComponent';
import {useFocusEffect} from '@react-navigation/native';

const Home = ({navigation}) => {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [ongoing, setOngoing] = useState(0);
  const [pending, setPending] = useState(0);
  const [complated, setComplated] = useState(0);
  const [cancel, setCancel] = useState(0);
  const getTask = async () => {
    try {
      const saveTask = await AsyncStorage.getItem('task');
      const parsedTasks = saveTask ? JSON.parse(saveTask) : [];

      console.log('parsedTasks', parsedTasks);
      setTasks(parsedTasks);
      let complatedCount = 0;
      let pendingCount = 0;
      let ongoingCount = 0;
      let cancelCount = 0;
      for (const task of JSON.parse(saveTask)) {
        if (task.status === 1) {
          ongoingCount++;
        } else if (task.status === 2) {
          pendingCount++;
        } else if (task.status === 3) {
          complatedCount++;
        } else if (task.status === 4) {
          cancelCount++;
        }
      }
      setOngoing(ongoingCount);
      setPending(pendingCount);
      setComplated(complatedCount);
      setCancel(cancelCount);
    } catch (error) {}
  };
  const onRefresh = () => {
    setRefreshing(true);
    getTask();
    setRefreshing(false);
  };
  useFocusEffect(
    useCallback(() => {
      getTask();
    }, []),
  );
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={tasks}
        ListHeaderComponent={
          <HeaderComponent
            ongoing={ongoing}
            pending={pending}
            complated={complated}
            cancel={cancel}
          />
        }
        renderItem={({item}) => <TaskCard item={item} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      <FloatActionButton onPress={() => navigation.navigate(ADDTASKS)} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

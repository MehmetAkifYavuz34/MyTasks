import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import {Button, Input, RadioGroup, Radio} from '@ui-kitten/components';
import CustomDatePicker from '../../components/ui/customdatePicker';
import {taskSchema} from '../../utils/validation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {status} from '../../utils/constant';
import uuid from 'react-native-uuid';
import {TASKS} from '../../utils/routes';

const AddTask = ({navigation}) => {
  const saveTask = async values => {
    try {
      const savedTasks = await AsyncStorage.getItem('task');
      let myTask;
      if (savedTasks) {
        try {
          myTask = JSON.parse(savedTasks);
          if (!Array.isArray(myTask)) {
            myTask = [];
          }
        } catch (e) {
          myTask = [];
        }
      } else {
        myTask = [];
      }
      myTask.push(values);
      await AsyncStorage.setItem('task', JSON.stringify(myTask));
      navigation.navigate(TASKS);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          id: uuid.v4(),
          title: '',
          description: '',
          startDate: null,
          endDate: null,
          category: null,
          status: status.ONGOING,
        }}
        validationSchema={taskSchema}
        onSubmit={values => {
          saveTask(values);
        }}>
        {({handleChange, handleSubmit, values, setFieldValue, errors}) => (
          <View>
            <Input
              size="large"
              style={{marginVertical: 10}}
              value={values.title}
              label={'Title'}
              placeholder=""
              onChangeText={handleChange('title')}
              status={errors.title ? 'danger' : 'basic'}
              caption={errors.title}
            />
            <Input
              size="large"
              style={{marginVertical: 10}}
              value={values.description}
              label={'Description'}
              placeholder=""
              onChangeText={handleChange('description')}
              status={errors.description ? 'danger' : 'basic'}
              caption={errors.description}
            />
            <CustomDatePicker
              size="large"
              style={{marginVertical: 10}}
              date={values.startDate}
              label={'Start Date'}
              onSelectDate={date => setFieldValue('startDate', date)}
              status={errors.startDate ? 'danger' : 'basic'}
              caption={errors.startDate}
            />
            <CustomDatePicker
              size="large"
              style={{marginVertical: 10}}
              date={values.endDate}
              label={'End Date'}
              onSelectDate={date => setFieldValue('endDate', date)}
              status={errors.endDate ? 'danger' : 'basic'}
              caption={errors.endDate}
            />
            <RadioGroup
              selectedIndex={values.category}
              onChange={index => setFieldValue('category', index)}>
              <Radio status="success"> Software</Radio>
              <Radio status="success">Design</Radio>
              <Radio status="success">Operation</Radio>
            </RadioGroup>
            <Button
              onPress={handleSubmit}
              status="success"
              style={{marginTop: 30}}>
              Create
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
});

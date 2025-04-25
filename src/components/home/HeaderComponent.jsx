import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppColors} from '../../theme/color';
import {
  ArrowCircleRight2,
  ChartCircle,
  Clock,
  CloseCircle,
  TickCircle,
} from 'iconsax-react-nativejs';

const HeaderComponent = ({ongoing, pending, complated, cancel}) => {
  const tasks = [
    {
      id: 1,
      title: 'OnGoing',
      color: AppColors.ONGOİNG,
      icon: <ChartCircle size={32} color={AppColors.WHİTE} />,
      count: ongoing,
    },
    {
      id: 2,
      title: 'Pending',
      color: AppColors.PENDİNG,
      icon: <Clock size={32} color={AppColors.WHİTE} />,
      count: pending,
    },
    {
      id: 3,
      title: 'Cpmplated',
      color: AppColors.COMPLATED,
      icon: <TickCircle size={32} color={AppColors.WHİTE} />,
      count: complated,
    },
    {
      id: 4,
      title: 'Cancel',
      color: AppColors.CANCEL,
      icon: <CloseCircle size={32} color={AppColors.WHİTE} />,
      count: cancel,
    },
  ];
  const Task = ({item}) => {
    console.log(item.count);
    return (
      <Pressable
        style={{
          width: '45%',
          backgroundColor: item.color,
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}>
        {item.icon}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <View>
            <Text
              style={{
                color: AppColors.WHİTE,
                fontSize: 16,
                fontWeight: '600',
              }}>
              {item.title}
            </Text>
            <Text
              style={{
                color: AppColors.WHİTE,
                fontSize: 16,
                fontWeight: '600',
                marginTop: 5,
              }}>
              {item.count} Task
            </Text>
          </View>
          <View>
            <ArrowCircleRight2 size={24} />
          </View>
        </View>
      </Pressable>
    );
  };
  return (
    <View styles={styles.container}>
      <FlatList
        numColumns={2}
        data={tasks}
        renderItem={({item}) => <Task item={item} />}
      />
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            margin: 10,
            marginHorizontal: 20,
          }}>
          All Task
        </Text>
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

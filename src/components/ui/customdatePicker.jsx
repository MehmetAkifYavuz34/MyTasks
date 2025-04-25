import {View, Text} from 'react-native';
import React from 'react';
import {Datepicker} from '@ui-kitten/components';

const CustomDatePicker = props => {
  const {onSelectDate} = props;
  return (
    <Datepicker {...props} onSelect={nextDate => onSelectDate(nextDate)} />
  );
};

export default CustomDatePicker;

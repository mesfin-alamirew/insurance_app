import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
const DatePickerComp = ({
  nav,
  date,
  setDate,
  datePicker,
  setDatePicker,
  hideDatePicker,
  showDatePicker,
  questions,
  answers,
  step,
  numOfQuestions,
  nextStep,
  text,
  setText,
  setAnswers,
  q,
}) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',

          marginBottom: 20,
        }}
      >
        <Text
          style={{
            marginHorizontal: 30,
            borderBottomWidth: 1,
            padding: 5,
            width: '70%',
            fontSize: 20,
          }}
        >
          {date.toDateString()}
        </Text>
        <FontAwesome
          onPress={() => showDatePicker()}
          name="calendar"
          color="teal"
          size={25}
        />
      </View>
      {datePicker && (
        <DateTimePicker
          value={new Date()}
          onChange={(evt, selectedDate) => {
            setDate(selectedDate);
            hideDatePicker();
          }}
        />
      )}
      <View
        onPress={console.log(answers)}
        style={{
          backgroundColor: 'teal',
          height: 30,
          borderRadius: 5,
          width: '80%',
          marginHorizontal: 20,
        }}
      >
        <Text
          onPressIn={() => {
            setAnswers((prev) => [...prev, date.toDateString()]);
            hideDatePicker();
          }}
          onPress={
            step < numOfQuestions - 1
              ? nextStep
              : () => nav.navigate('Results', { answer: answers })
          }
          style={{
            fontSize: 18,
            color: 'white',
            width: '100%',
            textAlign: 'center',
          }}
        >
          Continue
        </Text>
      </View>
    </>
  );
};

export default DatePickerComp;

const styles = StyleSheet.create({});

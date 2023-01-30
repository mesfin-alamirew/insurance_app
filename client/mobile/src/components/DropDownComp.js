import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const DropDownComp = ({
  nav,
  getDropDownItems,
  open,
  value,
  items,
  setOpen,
  setItems,
  setValue,
  answers,
  setAnswers,
  step,
  nextStep,
  numOfQuestions,
}) => {
  return (
    <>
      <DropDownPicker
        onChangeValue={(value) =>
          value !== null ? setAnswers((prev) => [...prev, value]) : nextStep
        }
        onPress={getDropDownItems}
        style={{
          marginHorizontal: 20,
          width: '90%',
          marginBottom: 100,
        }}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        dropDownContainerStyle={{ width: '80%', marginHorizontal: 20 }}
      />
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
          onPressIn={() => setValue(null)} //clears out the current selected selected value for the next dropdown
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

export default DropDownComp;

const styles = StyleSheet.create({});

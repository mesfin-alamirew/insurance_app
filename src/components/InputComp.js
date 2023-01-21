import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const InputComp = ({
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
  console.log('Len = ' + numOfQuestions);
  console.log('Step = ' + step);
  return (
    <>
      <View style={styles.textChoiceContainer}>
        <TextInput
          onChangeText={(text) => setText(text)}
          // onChangeText={(value) => {
          //   setAnswers((prev) => [...prev, handleChange()]);
          // }}
          style={{ fontSize: 18 }}
          type="text"
          key={q.Id}
          placeholder={q.name}
        />
      </View>
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
            setAnswers((prev) => [...prev, text]);
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

export default InputComp;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  qstn: {
    fontSize: 20,

    fontWeight: 'bold',
    padding: 10,
    marginTop: 50,
    marginBottom: 10,
  },
  boxChoiceContainer: {
    marginHorizontal: 8,
    // width: 180,
    height: 100,
    padding: 10,
    backgroundColor: 'white',
    borderColor: 'teal',
    borderWidth: 2,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  textChoiceContainer: {
    marginHorizontal: 8,
    width: '90%',

    // height: 100,
    // padding: 10,
    // backgroundColor: 'white',
    // borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 50,
    alignItems: 'center',

    //borderWidth: 1,
    // marginTop: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
    // borderRadius: 10,
  },
  elevation: {
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.1,
    elevation: 3,
  },
});

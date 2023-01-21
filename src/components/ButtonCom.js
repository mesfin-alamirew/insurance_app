import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ButtonCom({
  nav,
  step,
  numOfQuestions,
  nextStep,
  q,
  setAnswers,
}) {
  return (
    <TouchableOpacity style={{ width: '50%' }}>
      <View style={[styles.boxChoiceContainer, styles.elevation]}>
        <Text
          onPressIn={(event) => {
            setAnswers((prev) => [
              ...prev,
              event._dispatchInstances.memoizedProps.children,
            ]);
          }}
          onPress={
            step < numOfQuestions - 1
              ? nextStep
              : () => nav.navigate('Results', { answer: answers })
          }
          style={{ color: 'teal', fontSize: 18, fontWeight: 'bold' }}
        >
          {q.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

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

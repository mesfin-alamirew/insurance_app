import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Questions } from '../data.js';
import useFetch from '../hooks/useFetch.js';
import StepComp from './StepComp';

import * as c from '../utils/Constants.js';
import LogoutComp from './LogoutComp.js';
const QuestionsComp = ({ navigation }) => {
  //console.log('API Manager=' + BaseURL);
  const [step, setStep] = useState(0);
  const { data, loading, error } = useFetch(`${c.API_URL}questions`);

  const nextStep = () => {
    if (step < data.length - 1) {
      setStep(step + 1);
    }
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  //console.log('Hi ' + loading);
  if (loading || loading === 'undefined' || data.length === 0) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <>
      <LogoutComp />
      <View>
        {/* <Text>Questions</Text> */}
        <StepComp
          nav={navigation}
          step={step}
          loading={loading}
          data={data[step]}
          error={error}
          nextStep={nextStep}
          prevStep={prevStep}
          numOfQuestions={data.length}
        />
      </View>
    </>
  );
};

export default QuestionsComp;

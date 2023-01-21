import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { useState, useEffect } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesome } from '@expo/vector-icons';
import ButtonComp from '../components/ButtonCom';
import InputComp from './InputComp';
import DatePickerComp from './DatePickerComp';

import DropDownPickerComp from './DatePickerComp';
import DropDownPicker from 'react-native-dropdown-picker';
import DropDownComp from './DropDownComp';
const StepOne = ({
  nav,
  step,
  loading,
  data,
  error,
  nextStep,
  prevStep,
  numOfQuestions,
}) => {
  const [answers, setAnswers] = useState([]);
  const [text, setText] = useState('');
  const [date, setDate] = useState(new Date());
  const [datePicker, setDatePicker] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);
  //let v = false;

  // useEffect(() => {

  const showDatePicker = () => {
    setDatePicker(true);
  };
  const hideDatePicker = () => {
    setDatePicker(false);
  };
  const getDropDownItems = () => {
    {
      data.choices.map((q) => {
        {
          if (q.controlType === 'dropdown') {
            {
              //v = true;
              setItems([]); //clear existing items
              setValue(null);
              q.options.map((opt) => {
                setItems((prev) => [
                  ...prev,
                  { label: `${opt.optionText}`, value: `${opt.optionText}` },
                ]);
              });
            }
          }
        }
      });
    }
  };
  console.log('Loading =' + data);
  // questions.choices.map((itm) => {
  //   alert(itm.controlType);
  // });
  // alert(questions);
  if (loading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.qstn}>{data.name}</Text>

      {data.choices.map(
        (q) =>
          q.controlType === 'button' && (
            <ButtonComp
              key={q._id}
              step={step}
              nextStep={nextStep}
              nav={nav}
              numOfQuestions={numOfQuestions}
              setAnswers={setAnswers}
              q={q}
            />
          )
      )}
      {data.choices.map(
        (q) =>
          q.controlType === 'input' && (
            <InputComp
              key={q._id}
              nav={nav}
              data={data}
              answers={answers}
              step={step}
              numOfQuestions={numOfQuestions}
              nextStep={nextStep}
              text={text}
              setText={setText}
              setAnswers={setAnswers}
              q={q}
            />
          )
      )}
      {data.choices.map(
        (q) =>
          q.controlType === 'dropdown' && (
            <DropDownComp
              key={q._id}
              getDropDownItems={getDropDownItems}
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              setText={setText}
              setAnswers={setAnswers}
              step={step}
              nextStep={nextStep}
              numOfQuestions={numOfQuestions}
              q={q}
            />
          )
      )}
      {data.choices.map(
        (q) =>
          q.controlType === 'datetime' && (
            <DatePickerComp
              key={q._id}
              nav={nav}
              date={date}
              setDate={setDate}
              datePicker={datePicker}
              setDatePicker={setDatePicker}
              hideDatePicker={hideDatePicker}
              showDatePicker={showDatePicker}
              data={data}
              answers={answers}
              step={step}
              numOfQuestions={numOfQuestions}
              nextStep={nextStep}
              text={text}
              setText={setText}
              setAnswers={setAnswers}
              q={q}
            />
          )
      )}
    </View>
  );
};

export default StepOne;
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

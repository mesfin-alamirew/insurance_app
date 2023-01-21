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

import DropDownPicker from 'react-native-dropdown-picker';
const StepOne = ({
  nav,
  step,
  questions,
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
      questions.Choices.map((q) => {
        {
          if (q.ControlType === 'dropdown') {
            {
              //v = true;
              setItems([]); //clear existing items
              setValue(null);
              q.Options.map((opt) => {
                setItems((prev) => [
                  ...prev,
                  { label: `${opt.OptionText}`, value: `${opt.OptionText}` },
                ]);
              });
            }
          }
        }
      });
    }
  };
  //   getDropDownItems();
  // }, v);

  const onChange = (event, selectedDate) => {
    selectedDate && setDate(selectedDate);
  };

  // console.log('Step=' + step + ' and Qs=' + (numOfQuestions - 1));
  return (
    <View style={styles.container}>
      <Text style={styles.qstn}>{questions.Question}</Text>

      {questions.Choices.map(
        (q) =>
          q.ControlType === 'button' && (
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
                  {q.Name}
                </Text>
                {/* <Button key={q.Id} onPress={nextStep} title={q.Name} /> */}
              </View>
            </TouchableOpacity>
          )
      )}

      {questions.Choices.map(
        (q) =>
          q.ControlType === 'input' && (
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
                  placeholder={q.Name}
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
          )
      )}
      {questions.Choices.map(
        (q) =>
          q.ControlType === 'datetime' && (
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
          )
      )}

      {questions.Choices.map(
        (q) =>
          q.ControlType === 'dropdown' && (
            <>
              <DropDownPicker
                onChangeValue={(value) =>
                  value !== null
                    ? setAnswers((prev) => [...prev, value])
                    : nextStep
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
                      : () => nav.navigate('Results')
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
          )
      )}
    </View>
  );
};

//       {/* {questions.BtnNext && (
//         <TouchableOpacity
//           onPress={
//             step < numOfQuestions - 1 ? nextStep : () => nav.navigate('Results')
//           }
//           style={{
//             width: '100%',
//             paddingLeft: 20,
//             paddingRight: 20,
//           }}
//         >
//           <View
//             onPress={console.log(answers)}
//             style={{
//               backgroundColor: 'teal',
//               height: 30,
//               borderRadius: 5,
//             }}
//           >
//             <Text
//               onPressIn={() => {
//                 setAnswers((prev) => [...prev, text]);
//               }}
//               onPress={nextStep}
//               style={{
//                 fontSize: 18,
//                 color: 'white',
//                 width: '100%',
//                 textAlign: 'center',
//               }}
//             >
//               Continue
//             </Text>
//           </View>
//         </TouchableOpacity>
//       )} */}
//     {/* </View> */}
//      {/* {questions.Id > 1 && ( */}
//     //   <span
//     //     style={{
//     //       backgroundColor: 'teal',
//     //       color: 'white',
//     //       marginTop: '20px',

//     //       padding: '2px',
//     //       width: '30px',
//     //       cursor: 'pointer',
//     //     }}
//     //   >
//     //     <ArrowBackIosNewOutlinedIcon onClick={prevStep} />
//     //   </span>
//     // )}
// //   );
// // };

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

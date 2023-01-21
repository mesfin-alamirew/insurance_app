import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import useFetch from '../hooks/useFetch.js';
import InsuranceItem from '../components/InsuranceItem.js';
export default function ResultScreen({ navigation }) {
  const { data, loading, error } = useFetch(
    'http://192.168.43.112:8800/api/insurances'
  );
  const ans = navigation.getParam('answer');
  console.log(data.length);
  const strAns = ans.toString();
  const arrayAns = Array.prototype.slice.call(strAns);

  if (loading || loading === 'undefined' || data.length === 0) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'teal',
          }}
        >
          All Motor Quotes
        </Text>
      </View>
      <View style={{ padding: 20 }}>
        {ans.map((ab, i) => (
          <Text key={i} style={{ width: 300, height: 20 }}>
            {ab}
          </Text>
        ))}
      </View>

      <View style={{ padding: 10, borderBottomWidth: 1 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
          Insurance Companies
        </Text>
        <FlatList
          data={data}
          keyExtractor={(insurance) => insurance._id}
          renderItem={({ item }) => <InsuranceItem insurance={item} />}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
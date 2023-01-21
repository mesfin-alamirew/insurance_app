import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const InsuranceItem = ({ insurance }) => {
  return (
    <View style={{ borderBottomWidth: 1, padding: 10 }}>
      <Text>Name: {insurance.name}</Text>
      <Text>Established: {insurance.establishedDate}</Text>
      <Text>Renewed: {insurance.renewedDate}</Text>
      <Text>Phone: {insurance.phone}</Text>
      <Text>Fax: {insurance.fax}</Text>
      <Text>Email: {insurance.email}</Text>
    </View>
  );
};

export default InsuranceItem;

const styles = StyleSheet.create({});

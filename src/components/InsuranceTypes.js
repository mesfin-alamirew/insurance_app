import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
const InsuranceTypes = () => {
  return (
    <View style={styles.container}>
      <View style={styles.insuranceType}>
        <FontAwesome name="car" color="teal" />
        <Text style={styles.tText}>Motor Insurance</Text>
        <Text>Helth Insurance</Text>
      </View>
      <View>
        <Text>Evacuation Insurance</Text>
        <Text>Travel Insurance</Text>
      </View>
      <View>
        <Text>Golf Insurance</Text>
        <Text>Domestic Insurance</Text>
      </View>
    </View>
  );
};

export default InsuranceTypes;

const styles = StyleSheet.create({
  constainer: {},
  insuranceType: {
    height: 100,
  },
});

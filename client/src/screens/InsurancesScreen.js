import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import LogoutComp from '../components/LogoutComp';

const InsurancesScreen = ({ navigation }) => {
  const iTypes = [
    { Id: 0, name: 'Motor', Icon: 'car', Detail: 'Questions' },
    { Id: 1, name: 'Health', Icon: 'hospital-o' },
    { Id: 2, name: 'Evacuation', Icon: 'bell' },
    { Id: 3, name: 'Travel', Icon: 'plane' },
    { Id: 4, name: 'Golf', Icon: 'google' },
    { Id: 5, name: 'Domestic', Icon: 'home' },
    { Id: 6, name: 'Personal Accident', Icon: 'wheelchair' },
    { Id: 7, name: 'School', Icon: 'graduation-cap' },
  ];
  return (
    <>
      <LogoutComp />
      <View style={styles.container}>
        {iTypes.map((t) => (
          <View key={t.Id} style={[styles.insuranceType, styles.elevation]}>
            <TouchableOpacity
              style={{ width: '100%' }}
              onPress={() => navigation.navigate(`${t.Detail}`)}
            >
              <FontAwesome
                name={t.Icon}
                color="purple"
                style={{ fontSize: 35, textAlign: 'center' }}
              />
              <Text style={styles.tText}>{t.name} Insurance </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </>
  );
};

export default InsurancesScreen;
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  insuranceType: {
    marginHorizontal: 8,
    height: 100,
    padding: 10,
    backgroundColor: 'white',
    marginTop: 10,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: 'teal',
    borderWidth: 1,
  },
  tText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'teal',
    fontWeight: 'bold',
  },
  elevation: {
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.1,
    elevation: 3,
  },
});

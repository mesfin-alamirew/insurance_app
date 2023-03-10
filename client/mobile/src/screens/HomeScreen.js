import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import Services from './ServicesScreen';
import React, { useContext } from 'react';
import { AuthContext } from '../context/authContext.js';
import LogoutComp from '../components/LogoutComp';
function HomeScreen({ navigation }) {
  const { userInfo } = useContext(AuthContext);

  return (
    <>
      <LogoutComp />

      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>WELCOME {userInfo.username}</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.infoHeaderText}>Get COVID Cover!</Text>
          <Text style={styles.infoBodyText}>
            Introducing annual COVID cover for as low as Birr 3000! Cover
            yourself and loved ones today!
          </Text>
          <View style={styles.btnContainer}>
            <Button color="teal" title="Get Cover" />
          </View>
        </View>
        <Services navigation={navigation} />
      </View>
    </>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTextContainer: {
    //marginTop: 10,
  },
  headerText: {
    paddingLeft: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'teal',
  },
  infoContainer: {
    marginLeft: 10,
    marginRight: 10,
    padding: 20,
    backgroundColor: 'skyblue',
  },
  infoHeaderText: {
    color: 'red',
    fontSize: 20,
  },
  infoBodyText: {},

  btnContainer: {
    marginTop: 10,
    width: '30%',
  },
});

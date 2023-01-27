import React, { useContext } from 'react';

import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from 'react-native';
import { AuthContext } from '../context/authContext';
const LogoutComp = () => {
  const { logout } = useContext(AuthContext);

  return (
    <TouchableOpacity onPress={() => logout()}>
      <View style={styles.roundButton}>
        <Image
          source={require('../../assets/user_profile.png')}
          style={{ width: 40, height: 40 }}
        />

        {/* <Button
        title="Logout"
        color="gray"
        onPress={() => {
          logout();
          //navigation.navigate('Login');
        }}
      /> */}
      </View>
    </TouchableOpacity>
  );
};

export default LogoutComp;

const styles = StyleSheet.create({
  btnLogout: {
    //marginTop: 20,
    width: '30%',
    left: 200,
  },
  roundButton: {
    marginTop: 30,
    left: 300,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'lightGray',
  },
});

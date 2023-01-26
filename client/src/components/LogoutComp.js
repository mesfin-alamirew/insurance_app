import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { AuthContext } from '../context/authContext';
const LogoutComp = () => {
  const { logout } = useContext(AuthContext);

  return (
    <View style={styles.btnLogout}>
      <Button
        title="Logout"
        color="teal"
        onPress={() => {
          logout();
          //navigation.navigate('Login');
        }}
      />
    </View>
  );
};

export default LogoutComp;

const styles = StyleSheet.create({
  btnLogout: {
    marginTop: 20,
    width: '30%',
    left: 200,
  },
});

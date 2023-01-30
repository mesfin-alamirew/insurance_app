import { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import * as c from '../utils/Constants.js';
// Create a context
const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  const [token, setToken] = useState(null);

  const login = async (username, password) => {
    setIsLoading(true);
    try {
      //const { data, loading, error } = useFetch(`${c.API_URL}auth/login`);
      const user = await axios.post(`${c.API_URL}auth/login`, {
        username,
        password,
      });
      //let uInfo = user.data;
      setUserInfo(user.data);
      setToken(user.data.token);

      await AsyncStorage.setItem('userInfo', JSON.stringify(user.data));
      await AsyncStorage.setItem('userToken', user.data.token);
    } catch (err) {
      console.log(`Login error ${err}`);
    }

    setIsLoading(false);
  };

  const logout = async () => {
    setIsLoading(true);
    setToken(null);
    await AsyncStorage.removeItem('userInfo');
    await AsyncStorage.removeItem('userToken');
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userInfo = await AsyncStorage.getItem('userInfo');
      let userToken = await AsyncStorage.getItem('userToken');

      userInfo = JSON.parse(userInfo);
      if (userInfo) {
        setUserInfo(userInfo);
        setToken(userToken);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(`Logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, isLoading, token, userInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

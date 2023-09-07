import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

import { StatusBar } from 'expo-status-bar';

import {
  TouchableOpacity,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = () => {
    if (username === 'vinit6515' && password === 'Admin@123') {
      navigation.navigate('Home');
    } else {
      console.warn('Invalid Login Id Password');
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Image
          source={{
            uri:
              'https://developers.google.com/community/gdsc/images/gdsc-social-share.png',
          }}
          style={styles.logo}
        ></Image>
        <View style={styles.abc}>
          <Text style={styles.text}>Welcome to App Dev</Text>
          <Text style={styles.text}>Login Here</Text>
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome
            name="user"
            size={20}
            color="gray"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={(value) => setUsername(value)}
            placeholder='User Name'
          />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome
            name="lock"
            size={20}
            color="gray"
            style={styles.icon}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={!isPasswordVisible}
            style={styles.input}
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
          <TouchableOpacity
            style={styles.toggleButton}
            onPress={togglePasswordVisibility}
          >
            <FontAwesome
              name={isPasswordVisible ? 'eye-slash' : 'eye'}
              size={20}
              color="gray"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.login}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={{ color: 'white', textAlign: 'center', lineHeight: 40 }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    height: 40,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 10,
  },
  text: {
    flexDirection: 'column',
    fontSize: 20,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    padding: 10,
  },
  logo: {
    marginTop: 90,
    height: 200,
    resizeMode: 'cover',
  },
  toggleButton: {
    padding: 10,
  },
  abc: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  loginButton: {
    height: 40,
    width: 80,
    borderRadius: 5,
    backgroundColor: 'purple',
  },
});




/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthHomeScreen from "./src/screens/AuthHomeScreen";
import AuthStackNavigator from "./src/navigation/AuthStackNavigator";

function App() {
  const [name, setName] = useState('');

  const handleChangeInput = (text: string) => {
    console.log(text);
    setName(text);
  }

  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'black',
    height: 50,
    width: 100,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  }
});
export default App;

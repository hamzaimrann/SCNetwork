import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MyButton, MyInput } from "./uiComponents";
import Login from "./screens/Login";
import Home from "./screens/AppHome";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { RobotoCondensed_400Regular, useFonts } from "@expo-google-fonts/dev";
import AppHome from "./screens/AppHome";

const Stack = createNativeStackNavigator();
export default function App() {
  let [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
  });

  if (fontsLoaded) {
    return <Login />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

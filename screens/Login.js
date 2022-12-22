import React from "react";
import { MyButton, MyInput, AppView } from "../uiComponents";
import { StyleSheet, View, Text } from "react-native";
import { ContainerStyle } from "../global_styles";
import { Divider } from "@rneui/base";
import AppHome from "./AppHome";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLogin = (login = true) => {
    if (login) {
      <AppHome />;
    }
  };
  render() {
    return (
      <View style={ContainerStyle.main}>
        <Text style={ContainerStyle.headingText}>Sports Center</Text>
        <Divider color="purple" />
        <View style={ContainerStyle.centerBox}>
          <Text style={ContainerStyle.boxLabel}>Welcome back!</Text>
          <Text
            style={{ alignSelf: "flex-start", marginTop: 30, marginBottom: 12 }}
          >
            LOGIN
          </Text>
          <MyInput placeholder="email" type="big" />
          <MyInput placeholder="password" type="big" />
          <View style={{ alignSelf: "flex-end" }}>
            <MyButton title="Login" onPress={this.handleLogin} />
          </View>
        </View>
      </View>
    );
  }
  styles = StyleSheet.create({
    main: {
      width: "30%",
      borderWidth: 0.5,
      borderRadius: 8,
      borderColor: "lime",
      backgroundColor: "#f1f0f5",
    },
    inputRow: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    },
    input: {
      textAlign: "center",
    },
  });
}

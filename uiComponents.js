import { Button, ThemeProvider, createTheme, Input } from "@rneui/themed";
import React from "react";

import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

const theme = createTheme({
  components: {
    Button: {
      raised: true,
      color: "secondary",
    },
    View: {
      color: "background",
    },
  },
});

export class MyButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Button
          buttonStyle={this.styles.main}
          title={this.props.title}
          onPress={this.props.onPress}
        />
      </ThemeProvider>
    );
  }
  styles = StyleSheet.create({
    main: {
      borderRadius: 10,
      borderColor: "transparent",
      borderWidth: 0,
    },
  });
}
MyButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export class MyInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Input
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          inputContainerStyle={this.styles.main}
          inputStyle={this.styles.input}
        />
      </ThemeProvider>
    );
  }
  styles = StyleSheet.create({
    main: {
      width: this.props.type == "big" ? "110%" : "70%",
      alignSelf: "center",
      borderWidth: 1,
      borderRadius: 9,
      backgroundColor: "#ede9f2",
    },
    input: {
      padding: 10,
    },
  });
}
MyInput.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
};

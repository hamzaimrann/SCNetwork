import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import { ContainerStyle } from "../global_styles";
import { Icon, Card } from "@rneui/themed";
import Booking from "../components/Booking";
import Facilities from "../components/Facilities";
import { ScrollView } from "react-native-gesture-handler";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
    };
  }
  handleAccountMenu = () => {
    return (
      <View>
        <Text>My menu</Text>
      </View>
    );
  };
  handleNavigationToBookings = () => {
    this.props.navigation.navigate("Bookings");
  };

  render() {
    return (
      <ScrollView>
        <View style={ContainerStyle.main}>
          <View style={ContainerStyle.topRow}>
            <Icon
              style={ContainerStyle.topIcon}
              name="reorder"
              onPress={this.props.navigation.openDrawer}
            />
            <Text style={ContainerStyle.headingText}>Dashboard</Text>
            <Icon style={ContainerStyle.topIcon} name="person" />
          </View>
          <Text style={ContainerStyle.subHeading}>My bookings</Text>
          <Booking />
          <Text
            onPress={this.handleNavigationToBookings}
            style={ContainerStyle.centerText}
          >
            View More
          </Text>
          <View>
            <Text style={ContainerStyle.subHeading}>Our Facilities</Text>
            <Facilities navigator={this.props.navigation} />
          </View>
        </View>
      </ScrollView>
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

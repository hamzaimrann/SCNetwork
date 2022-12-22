import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { ContainerStyle } from "../global_styles";
import { Icon, Card } from "@rneui/themed";
import Booking from "../components/Booking";
import Facilities from "../components/Facilities";
import { ScrollView } from "react-native-gesture-handler";
import { CreateBooking } from "./CreateBooking";

export default class BookingManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newBooking: false,
      bookings: [],
    };
  }
  componentDidUpdate() {
    console.log(this.state.newBooking);
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
        <View style={ContainerStyle.bookingTheme}>
          <View style={ContainerStyle.topRow}>
            <Icon
              color="white"
              style={ContainerStyle.topIcon}
              name="reorder"
              onPress={this.props.navigation.openDrawer}
            />
            <Text style={ContainerStyle.headingTextLight}>Booking Manager</Text>
            <Icon color="white" style={ContainerStyle.topIcon} name="person" />
          </View>
          <Text style={ContainerStyle.subHeadingLight}>My bookings</Text>
          <Booking />
        </View>
        <TouchableOpacity
          style={{
            height: 100,
            backgroundColor: "#a4cfde",
          }}
          onPress={() => this.setState({ newBooking: !this.state.newBooking })}
        >
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={ContainerStyle.themeText}>Create a booking</Text>
            <Icon
              containerStyle={{ position: "absolute", top: 40 }}
              size={50}
              name="subdirectory-arrow-left"
            />
          </View>
        </TouchableOpacity>
        {this.state.newBooking ? <CreateBooking /> : null}
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

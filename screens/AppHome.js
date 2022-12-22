import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import { ContainerStyle } from "../global_styles";
import { Icon, Card } from "@rneui/themed";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Facility from "./Facility";
import BookingManager from "./BookingManager";
import Home from "./Home";
import Notification from "./Notifications";
import FacilityDetail from "./FacilityDetail";

const Drawer = createDrawerNavigator();
export default class AppHome extends React.Component {
  bookingData = [
    {
      id: "2321",
      name: "Asad",
      type: "One time",
      time: "3pm",
      ground: "Cricket Main",
      price: 3000,
    },
    {
      id: "2521",
      name: "Hamza",
      type: "Recurring",
      time: "6pm",
      ground: "Football Main",
      price: 3000,
    },
  ];
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

  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen
            name="Dashboard"
            component={Home}
            options={{ headerShown: false }}
          />

          <Drawer.Screen
            name="Facilities"
            component={Facility}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="Notifications"
            component={Notification}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="Booking Manager"
            component={BookingManager}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="Facility Details"
            component={FacilityDetail}
            options={{ headerShown: false }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
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

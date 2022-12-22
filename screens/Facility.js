import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { ContainerStyle } from "../global_styles";
import { Icon, Card } from "@rneui/themed";
import Booking from "../components/Booking";
import FacilityComponent from "../components/Facilities";
import { ScrollView } from "react-native-gesture-handler";
import { SearchBar } from "@rneui/base";

export default class Facility extends React.Component {
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
            <Text style={ContainerStyle.headingText}>Facilities</Text>
            <Icon style={ContainerStyle.topIcon} name="person" />
          </View>
          <View>
            <SearchBar
              placeholder="explore facilities"
              lightTheme={true}
              containerStyle={{
                marginVertical: 10,
                width: "90%",
                alignSelf: "center",
              }}
            />
            <FacilityComponent />
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

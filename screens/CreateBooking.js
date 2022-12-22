import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import { MyButton, MyInput } from "../uiComponents";
import { ContainerStyle } from "../global_styles";
import { Icon, Card, ListItem } from "@rneui/themed";
import Booking from "../components/Booking";
import Facilities from "../components/Facilities";
import { ScrollView } from "react-native-gesture-handler";

export function CreateBooking() {
  return (
    <View style={ContainerStyle.centerBox}>
      <Text
        style={{ alignSelf: "flex-start", marginTop: 30, marginBottom: 12 }}
      >
        NEW BOOKING
      </Text>
      <MyInput placeholder="your name" type="big" />
      <MyInput placeholder="ground" type="big" />
      <MyInput placeholder="slot" type="big" />
      <MyButton title="Request" />
    </View>
  );
}

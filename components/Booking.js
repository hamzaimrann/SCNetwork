import { Card, Divider, ListItem } from "@rneui/base";
import React from "react";
import { View, Text } from "react-native";
import { ContainerStyle } from "../global_styles";

export default function Booking() {
  const bookingData = [
    {
      name: "Asad",
      type: "One time",
      date: "3/12/2022",
      time: "3pm",
      ground: "Cricket",
      price: 3000,
    },
    {
      name: "Hamza",
      type: "Recurring",
      date: "4/12/2022",
      time: "6pm",
      ground: "Football",
      price: 3000,
    },
  ];

  return bookingData.map((item, key) => (
    <ListItem
      containerStyle={{
        borderRadius: 15,
        borderColor: "#21718a",
        borderBottomColor: "#48a9c7",
        borderTopColor: "#48a9c7",
        borderBottomWidth: 3,
        borderWidth: 3,
        width: "90%",
        alignSelf: "center",
        marginBottom: 10,
      }}
      key={key}
      bottomDivider
    >
      <ListItem.Content>
        <View style={ContainerStyle.subtitleView}>
          <Text style={{ paddingRight: 5, fontWeight: "bold" }}>Ground:</Text>
          <Text>{item.ground}</Text>
        </View>
        <View style={ContainerStyle.subtitleView}>
          <Text style={{ paddingRight: 5, fontWeight: "bold" }}>Date:</Text>
          <Text>{item.date}</Text>
        </View>
        <View style={ContainerStyle.subtitleView}>
          <Text style={{ paddingRight: 5, fontWeight: "bold" }}>Time:</Text>
          <Text>{item.time}</Text>
        </View>
        <ListItem.Title style={{ alignSelf: "center", paddingTop: 10 }}>
          Booked by: {item.name}
        </ListItem.Title>
      </ListItem.Content>
    </ListItem>
  ));
}

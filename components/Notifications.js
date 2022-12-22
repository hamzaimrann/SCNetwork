import { Card, Divider, ListItem, Icon } from "@rneui/base";
import React from "react";
import { View, Text } from "react-native";
import { ContainerStyle } from "../global_styles";

export default function Notifications() {
  const notificationData = [
    {
      title: "You made booking for football ground",
      icon: "done-all",
      color: "#e2dee3",
      slot: "9pm",
      date: "3/12/2022",
      time: "3:07 pm",
      ground: "Football",
      price: 3000,
    },
    {
      title: "Manager reviewed your booking",
      icon: "autorenew",
      slot: "9pm",
      color: "#e2dee3",
      date: "3/12/2022",
      time: "4:56 pm",
      ground: "Football",
      price: 3000,
    },
    {
      title: "Booking Approved",
      icon: "done-all",
      slot: "9pm",
      color: "#7bd18f",
      date: "3/12/2022",
      time: "5:16 pm",
      ground: "Football",
      price: 3000,
    },
  ];

  return notificationData.map((item, key) => (
    <View>
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
        <ListItem.Content style={{ backgroundColor: "#561c6b" }}>
          <View
            style={{
              backgroundColor: "white",
              width: "100%",
              padding: 8,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={ContainerStyle.subtitleView}>
                <Text style={{ paddingRight: 5, fontWeight: "bold" }}>
                  Ground:
                </Text>
                <Text>{item.ground}</Text>
              </View>
              <Text
                style={{
                  textAlign: "center",
                  fontStyle: "italic",
                  position: "absolute",
                  left: 260,
                  top: 10,
                  color: "red",
                }}
              >
                {item.time}
              </Text>
            </View>

            <View style={ContainerStyle.subtitleView}>
              <Text style={{ paddingRight: 5, fontWeight: "bold" }}>Slot:</Text>
              <Text>{item.slot}</Text>
            </View>
            <View style={ContainerStyle.subtitleView}>
              <Text style={{ paddingRight: 5, fontWeight: "bold" }}>Date:</Text>
              <Text>{item.date}</Text>
            </View>
            <View style={ContainerStyle.subtitleView}>
              <Text style={{ paddingRight: 5, fontWeight: "bold" }}>
                Price:
              </Text>
              <Text>{item.price}</Text>
            </View>
          </View>
          <ListItem.Title
            style={{ alignSelf: "center", paddingTop: 20, color: "white" }}
          >
            {item.title}
          </ListItem.Title>
          <Icon
            containerStyle={{ alignSelf: "center", paddingVertical: 10 }}
            color={item.color}
            name={item.icon}
            size={40}
          />
        </ListItem.Content>
      </ListItem>
    </View>
  ));
}

import { Card, Icon } from "@rneui/base";
import React from "react";
import { View, Text, Image, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ContainerStyle } from "../global_styles";
import FacilityDetail from "../screens/FacilityDetail";
import { useNavigation } from "@react-navigation/native";

export default function FacilityComponent() {
  const navigation = useNavigation();
  const groundData = [
    {
      ground: "Cricket",
      price: 3000,
      players: 11,
      image:
        "/Users/arkhitech/Documents/Projects/SCNetwork/assets/cricket.webp",
      imagePlayStyle:
        "/Users/arkhitech/Documents/Projects/SCNetwork/assets/cricketFormation.jpeg",
      imagePlayers:
        "/Users/arkhitech/Documents/Projects/SCNetwork/assets/cricketPlayer.jpeg",
      description:
        "Rawalpindi Cricket Stadium is a cricket stadium located in Rawalpindi in the Punjab province of Pakistan. It is near to Pir Meher Ali Shah University, Rawalpindi, and Rawalpindi Arts Council, Rawalpindi. The first international match at the stadium was played on 19 January 1992, when Sri Lanka faced Pakistan in an ODI",
      status: "Available",
      color: "green",
      icon: "check",
      slots: ["3pm", "6pm", "9pm", "12pm"],
    },
    {
      ground: "Football",
      price: 3000,
      players: 11,
      description:
        "Football is commonly known as soccer. Matches may be played on natural or artificial surfaces, according to the rules of the competition. The colour of artificial surfaces is green.",
      image:
        "/Users/arkhitech/Documents/Projects/SCNetwork/assets/football.jpeg",
      imagePlayStyle:
        "/Users/arkhitech/Documents/Projects/SCNetwork/assets/footballFormation.png",
      imagePlayers:
        "/Users/arkhitech/Documents/Projects/SCNetwork/assets/footballPlayer.jpeg",
      status: "Booked",
      color: "red",
      icon: "close",
      slots: ["3pm", "6pm", "9pm", "12pm"],
    },
  ];

  return groundData.map((item) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Facility Details", { item: item })}
    >
      <Card containerStyle={{ borderRadius: 10 }}>
        <Card.Title style={ContainerStyle.cardTitle}>{item.ground}</Card.Title>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text>Team size: {item.players}</Text>
          <Text>Price: {item.price}</Text>
        </View>
        <Card.Divider />
        <Card.Image
          style={{ marginBottom: 12 }}
          source={{
            uri: item.image,
          }}
        />
        <View style={{ flexDirection: "row" }}>
          <Text style={ContainerStyle.textWithIcon}>Status: {item.status}</Text>
          <Icon
            // style={{ marginBotton: 12, color: item.color }}
            color={item.color}
            size={20}
            name={item.icon}
          />
        </View>
      </Card>
    </TouchableOpacity>
  ));
}

import { Button, Card, Icon } from "@rneui/base";
import React from "react";
import { View, Text, Image, Touchable, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ContainerStyle } from "../global_styles";

export default function FacilityDetail({ navigation, route }) {
  return (
    <ScrollView>
      <View style={ContainerStyle.main}>
        <View style={ContainerStyle.topRow}>
          <Icon
            style={ContainerStyle.topIcon}
            name="reorder"
            onPress={navigation.openDrawer}
          />
          <Text style={ContainerStyle.headingText}>Facility</Text>
          <Icon style={ContainerStyle.topIcon} name="person" />
        </View>

        <View style={{ padding: 20, borderLeftWidth: 3, borderRightWidth: 3 }}>
          <View style={ContainerStyle.textWithIcon}>
            <Text style={ContainerStyle.themeTextCenter}>Want to play?</Text>
            <Icon
              color="#561c6b"
              containerStyle={{ marginBottom: 10 }}
              size={35}
              name="sports-basketball"
            />
          </View>
          <Button
            color="#561c6b"
            containerStyle={{
              width: "35%",
              borderRadius: 10,
              alignSelf: "center",
            }}
            title={"Book now"}
          />
          <Text style={ContainerStyle.themeText}>
            {route.params.item.ground} ground
          </Text>
          <Text>{route.params.item.description}</Text>
          <Text style={ContainerStyle.themeText}>How to play?</Text>
          <Text>Each team has {route.params.item.players} players</Text>
          <Card.Image
            style={{
              marginVertical: 12,
              height: 500,
              borderRadius: 15,
            }}
            source={{
              uri: route.params.item.imagePlayStyle,
            }}
          />
          <Text style={ContainerStyle.themeText}>A special player</Text>
          <Card.Image
            style={{
              marginBottom: 12,
              height: 400,
              borderRadius: 15,
            }}
            source={{
              uri: route.params.item.imagePlayers,
            }}
          />
          <Text style={ContainerStyle.themeTextCenter}>Slots Available</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {route.params.item.slots.map((slot) => {
              return (
                <View
                  style={{
                    flexDirection: "row",
                    backgroundColor: "#94d6ad",
                    padding: 10,
                    marginHorizontal: 10,
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ color: "white" }}>{slot}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

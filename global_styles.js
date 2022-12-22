import { StyleSheet } from "react-native";

const ContainerStyle = StyleSheet.create({
  main: {
    padding: 10,
    height: "90%",
    marginTop: 55,
    backgroundColor: "#ecebed",
  },
  bookingTheme: {
    padding: 10,
    height: "90%",
    marginTop: 55,
    backgroundColor: "#2f98bd",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  cardTitle: {
    textAlign: "left",
    fontSize: 19,
    fontFamily: "RobotoCondensed_400Regular",
  },
  subtitleView: {
    flexDirection: "row",
    paddingTop: 3,
  },
  themeText: {
    textAlign: "left",
    fontSize: 29,
    marginVertical: 10,
    fontFamily: "RobotoCondensed_400Regular",
  },
  themeTextCenter: {
    textAlign: "center",
    fontSize: 29,
    marginVertical: 10,
    fontFamily: "RobotoCondensed_400Regular",
  },
  textWithIcon: {
    marginRight: 5,
  },
  textWithIconRow: {
    flexDirection: "row",
  },
  topIcon: {
    marginTop: 14,
  },
  topIconLight: {
    color: "white",
    marginTop: 14,
  },
  centerText: {
    textAlign: "center",
    marginVertical: 15,
    color: "blue",
  },
  headingText: {
    fontSize: 30,
    marginVertical: 8,
    fontWeight: "bold",
    fontFamily: "RobotoCondensed_400Regular",
    textAlign: "center",
  },
  headingTextLight: {
    color: "white",
    fontSize: 30,
    marginVertical: 8,
    fontWeight: "bold",
    fontFamily: "RobotoCondensed_400Regular",
    textAlign: "center",
  },
  subHeading: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontFamily: "RobotoCondensed_400Regular",
    fontSize: 20,
  },
  subHeadingLight: {
    color: "white",
    marginHorizontal: 20,
    marginVertical: 20,
    fontFamily: "RobotoCondensed_400Regular",
    fontSize: 20,
  },
  centerBox: {
    margin: 20,
    marginTop: 40,
    padding: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  boxLabel: {
    fontSize: 22,
  },
});

export { ContainerStyle };

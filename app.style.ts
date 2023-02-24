import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "white",
  },
  activeBackground: {
    position: "absolute",
  },
  tabBarContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  component: {
    height: 50,
    width: 50,
    marginTop: -5,
  },
  componentCircle: {
    flex: 1,
    borderRadius: 50,
    // backgroundColor: "white",
  },
  iconContainer: {
    // position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 7,
    marginLeft: 7,
    borderRadius: 30,
    marginRight: -3,
  },
  icon: {
    height: 30,
    width: 30,
    // marginTop: 5,
  },
});

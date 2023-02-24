import { View, Text } from "react-native";
import React from "react";
import { styles } from "../../app.style";
import PlaceHolderScreen from "../components/PlaceHolderScreen";
import { NavigationContainer } from "@react-navigation/native";
import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import Lottie from "lottie-react-native";
import AnimatedTabs from "./AnimatedTabs";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <AnimatedTabs {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen
          name="Home"
          options={{
            // @ts-ignore
            tabBarIcon: ({ ref }) => (
              <AntDesign
                name="home"
                style={{ color: "#604AE6", fontSize: 30 }}
              />
            ),
          }}
          component={PlaceHolderScreen}
        />
        <Tab.Screen
          name="RNF"
          options={{
            // @ts-ignore
            tabBarIcon: ({ ref }) => (
              <AntDesign
                name="home"
                style={{ color: "#604AE6", fontSize: 30 }}
              />
            ),
          }}
          component={PlaceHolderScreen}
        />
        <Tab.Screen
          name="Upload"
          options={{
            // @ts-ignore
            tabBarIcon: ({ ref }) => (
              <Lottie
                ref={ref}
                loop={false}
                source={require("../../assets/lottie/upload.icon.json")}
                style={styles.icon}
              />
            ),
          }}
          component={PlaceHolderScreen}
        />
        <Tab.Screen
          name="Chat"
          options={{
            // @ts-ignore
            tabBarIcon: ({ ref }) => (
              <Lottie
                ref={ref}
                loop={false}
                source={require("../../assets/lottie/chat.icon.json")}
                style={styles.icon}
              />
            ),
          }}
          component={PlaceHolderScreen}
        />
        <Tab.Screen
          name="Settings"
          options={{
            // @ts-ignore
            tabBarIcon: ({ ref }) => (
              <Lottie
                ref={ref}
                loop={false}
                source={require("../../assets/lottie/settings.icon.json")}
                style={styles.icon}
              />
            ),
          }}
          component={PlaceHolderScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;

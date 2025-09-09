import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
 import { Login } from "../views/Login";
import TabsNavigatorApp from "./tabsNavigator";

export type RootStackParamList = {
  Login: undefined;
  MainApp: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RoutesContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainApp" component={TabsNavigatorApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

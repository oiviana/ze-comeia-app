import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
 import { Login } from "../views/Login";
import TabsNavigatorApp from "./tabs/TabsNavigator";
import { Signup } from "../views/auth/Signup";
import { RootStackParamList } from "./types";

const Stack = createStackNavigator<RootStackParamList>();

export default function RoutesContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="MainApp" component={TabsNavigatorApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

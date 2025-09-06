import React from "react";
import HomeTest from "../views/HomeTest";
import LoginTest from "../views/LoginTest";
import SignupTest from "../views/SignupTest";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

    const Tab = createBottomTabNavigator();  

export default function TabsNavigatorApp() {

    return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeTest} />
      <Tab.Screen name="Profile" component={LoginTest} />
    </Tab.Navigator>
    )
}
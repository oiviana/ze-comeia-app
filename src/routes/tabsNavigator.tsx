import React from "react";
import HomeTest from "../views/HomeTest";
import LoginTest from "../views/LoginTest";
import SignupTest from "../views/SignupTest";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function TabsNavigatorApp() {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Início" component={HomeTest} />
      <Tab.Screen name="Busca" component={LoginTest} />
      <Tab.Screen name="Pedidos" component={SignupTest} />
      <Tab.Screen name="Perfil" component={SignupTest} />
    </Tab.Navigator>
  )
}
import React from "react";
import HomeTest from "../views/HomeTest";
import SignupTest from "../views/SignupTest";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import { ProductsHome } from "../views/products/ProductsHome";

const Tab = createBottomTabNavigator();

export default function TabsNavigatorApp() {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Início" component={HomeTest}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={30} color={"#FFA800"} />
          ),
        }} />
      <Tab.Screen name="Busca" component={ProductsHome}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" size={30} color={"#FFA800"} />
          ),
        }} />
      <Tab.Screen name="Pedidos" component={SignupTest}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="shopping-basket" size={30} color={"#FFA800"} />
          ),
        }} />
      <Tab.Screen name="Perfil" component={SignupTest}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="account-circle" size={30} color={"#FFA800"} />
          ),
        }} />
    </Tab.Navigator>
  )
}
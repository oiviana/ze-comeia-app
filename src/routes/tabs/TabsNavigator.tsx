import React from "react";
import SignupTest from "../../views/SignupTest";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import { ProductSearchStackNavigator } from "../stacks/ProductSearchStack";
import { MainHomeStackNavigator } from "../stacks/HomeStack";
import Ionicons from "react-native-vector-icons/Ionicons";
import CommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
const Tab = createBottomTabNavigator();

export default function TabsNavigatorApp() {

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Início"
        component={MainHomeStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={26} color={"#FFA800"}  />

          ),
           headerShown: false, 
        }}
      />

      <Tab.Screen name="Busca" component={ProductSearchStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" size={30} color={"#FFA800"} />
          ),
            headerShown: false, 
        }} />
      <Tab.Screen name="Carrinho" component={SignupTest}
        options={{
          tabBarIcon: ({ color, size }) => (
            <CommunityIcon name="cart-variant" size={30} color={"#FFA800"} />
          ),
        }} />
      <Tab.Screen name="Perfil" component={SignupTest}
        options={{
          tabBarIcon: ({ color, size }) => (
            <CommunityIcon name="account" size={30} color={"#FFA800"} />
          ),
        }} />
    </Tab.Navigator>
  )
}
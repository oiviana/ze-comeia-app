import React from "react";
import SignupTest from "../../views/SignupTest";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ProductSearchStackNavigator } from "../stacks/ProductSearchStack";
import { MainHomeStackNavigator } from "../stacks/HomeStack";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialIcons";
import CommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../../styles/colors";
const Tab = createBottomTabNavigator();

export default function TabsNavigatorApp() {
  return (
  <Tab.Navigator
  screenOptions={{
    headerShown: false,
    tabBarLabelStyle: {
      color: colors.primaryBrown,
        fontSize: 12,  
      fontWeight: "500", 
    },
    tabBarStyle: {
      backgroundColor: "#FFF",
    },
  }}
>
  <Tab.Screen
    name="Início"
    component={MainHomeStackNavigator}
    options={{
      tabBarIcon: ({ focused, size }) => (
        <Ionicons
          name="home"
          size={26}
          color={focused ? colors.secondaryYellow : colors.primaryBrown} 
        />
      ),
    }}
  />

  <Tab.Screen
    name="Busca"
    component={ProductSearchStackNavigator}
    options={{
      tabBarIcon: ({ focused, size }) => (
        <Icon
          name="search"
          size={28}
          color={focused ? colors.secondaryYellow : colors.primaryBrown}
        />
      ),
    }}
  />

  <Tab.Screen
    name="Carrinho"
    component={SignupTest}
    options={{
      tabBarIcon: ({ focused, size }) => (
        <CommunityIcon
          name="cart-variant"
          size={26}
          color={focused ? colors.secondaryYellow : colors.primaryBrown}
        />
      ),
    }}
  />

  <Tab.Screen
    name="Perfil"
    component={SignupTest}
    options={{
      tabBarIcon: ({ focused, size }) => (
        <CommunityIcon
          name="account"
          size={27}
          color={focused ? colors.secondaryYellow : colors.primaryBrown}
        />
      ),
    }}
  />
</Tab.Navigator>
  );
}

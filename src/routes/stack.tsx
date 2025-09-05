import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTest from "../views/HomeTest";
import LoginTest from "../views/LoginTest";
import SignupTest from "../views/SignupTest";

const StackNavigator = createNativeStackNavigator();        

export default function StackNavigationApp() {
    return(
        <StackNavigator.Navigator>
            <StackNavigator.Screen name="Home" component={HomeTest}/>
            <StackNavigator.Screen name="Login" component={LoginTest}/>
            <StackNavigator.Screen name="Signup" component={SignupTest}/>
        </StackNavigator.Navigator>
    )
}
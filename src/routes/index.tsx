import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import TabsNavigatorApp from "./tabsNavigator";

export default function RoutesContainer() {

    return (
        <NavigationContainer>
            <TabsNavigatorApp/>
        </NavigationContainer>
    )
}
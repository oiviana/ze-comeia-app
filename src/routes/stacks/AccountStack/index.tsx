import { createStackNavigator } from "@react-navigation/stack";
import { LoggedAccount } from "../../../views/account/LoggedAccount";
import { NotLoggedAccount } from "../../../views/account/NotLoggedAccount";

export type AccountStackParamList = {
  LoggedAccount: undefined;
  NotLoggedAccount: undefined;
};

const AccountStack = createStackNavigator<AccountStackParamList>();

export function AccountStackNavigator() {
  // Simulação de login
  const isLoggedIn = true; // altere para true para testar a outra tela

  return (
    <AccountStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={isLoggedIn ? "LoggedAccount" : "NotLoggedAccount"}
    >
      <AccountStack.Screen name="LoggedAccount" component={LoggedAccount} />
      <AccountStack.Screen name="NotLoggedAccount" component={NotLoggedAccount} />
    </AccountStack.Navigator>
  );
}

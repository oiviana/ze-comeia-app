import { createStackNavigator } from "@react-navigation/stack";
import { LoggedAccount } from "../../../views/account/LoggedAccount";
import { NotLoggedAccount } from "../../../views/account/NotLoggedAccount";
import { Addresses } from "../../../views/account/Addresses";
import { AccountDetails } from "../../../views/account/AccountDetails";
import { Orders } from "../../../views/account/Orders";

export type AccountStackParamList = {
  LoggedAccount: undefined;
  NotLoggedAccount: undefined;
  Addresses: undefined;
  AccountDetails: undefined;
  Orders: undefined;
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
      <AccountStack.Screen name="Addresses" component={Addresses}
        options={{
          headerShown: true,
          title: "Meus endereços",
        }}
      />
      <AccountStack.Screen name="AccountDetails" component={AccountDetails}
        options={{
          headerShown: true,
          title: "Minha Conta",
        }}
      />
      <AccountStack.Screen name="Orders" component={Orders}
        options={{
          headerShown: true,
          title: "Meus pedidos",
        }}
      />
    </AccountStack.Navigator>
  );
} 

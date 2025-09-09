import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { FormInput } from "../components/forms/FormInput";
import { RootStackParamList } from "../routes/types";

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

interface Props {
  navigation: LoginScreenNavigationProp;
}

export function Login({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Login</Text>
      <FormInput label="Oi" placeholder="Digite seu nome"/>
      <Button title="Cadastrar" onPress={() => navigation.replace("Signup")} />
      <Button title="Fazer login mais tarde" onPress={() => navigation.replace("MainApp")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});

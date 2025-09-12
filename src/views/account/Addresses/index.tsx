// views/account/Addresses.tsx
import { FlatList, StyleSheet } from "react-native";
import { AddressCard } from "../../../components/account/address/AddressCard";
import { SafeAreaView } from "react-native-safe-area-context";
const mockAddresses = [
  {
    nickname: "Casa",
    street: "Rua das Flores",
    number: "123",
    neighbourhood: "Centro",
    city: "São Paulo",
    state: "SP",
    complement: "Apto 45",
    referencePoint: "Próximo ao mercado"
  },
  {
    street: "R. Dr. Eurico de Souza Pereira",
    number: "100",
    neighbourhood: "Bela Vista",
    city: "São Paulo",
    state: "SP"
  }
];

export function Addresses() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={mockAddresses}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => <AddressCard {...item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  }
});

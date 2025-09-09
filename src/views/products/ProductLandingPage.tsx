import { Text, View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { ProductsStackParamList } from "../../routes/stacks/ProductSearchStack";
import { ProductCard } from "../../components/product/ProductCard";

const mockProducts = [
  { id: "1" },
  { id: "2" },
  { id: "3" },
  { id: "4" },
  { id: "5" },
  { id: "6" },
  { id: "7" },
  { id: "8" },
];

export function ProductLandingPage() {
  const route = useRoute<RouteProp<ProductsStackParamList, "ProductLandingPage">>();
  const navigation = useNavigation();
  const { categoryId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos da categoria: {categoryId}</Text>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>

      <FlatList
        data={mockProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={() => <ProductCard />}
        contentContainerStyle={{ paddingVertical: 12 , marginTop:16}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 12,
    marginBottom: 8,
  },
  backButton: {
    marginBottom: 12,
    padding: 10,
    backgroundColor: "#FFA800",
    borderRadius: 8,
    alignItems: "center",
  },
  backButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  row: {
    justifyContent: "center",
    gap:30,
    marginBottom: 12,
  },
});

import { Text, View, TouchableOpacity } from "react-native";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { ProductsStackParamList } from "../../routes/stacks/ProductSearchStack";

export function ProductLandingPage() {
    const route = useRoute<RouteProp<ProductsStackParamList, "ProductLandingPage">>();
    const navigation = useNavigation();
    const { categoryId } = route.params;

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Produtos da categoria: {categoryId}</Text>

            <TouchableOpacity
                style={{
                    marginTop: 20,
                    padding: 10,
                    backgroundColor: "#FFA800",
                    borderRadius: 8,
                }}
                onPress={() => navigation.goBack()}
            >
                <Text style={{ color: "#fff", fontWeight: "bold" }}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}

import { Text, View, TouchableOpacity, ScrollView, StyleSheet, Image } from "react-native";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { ProductsStackParamList } from "../../routes/stacks/ProductSearchStack";
import { QuantitySelector } from "../../components/product/quantitiy/QuantitySelector";
import { AddSixButton } from "../../components/product/quantitiy/AddSixQuantity";

export function ProductPage() {
    const route = useRoute<RouteProp<ProductsStackParamList, "ProductPage">>();
    const navigation = useNavigation();
    const { productId } = route.params;

    return (
        <ScrollView>
            <View style={styles.imageWrapper}>
                <Image
                    source={require("../../assets/images/mock/mock-product-shelf.png")}
                    style={{ width: 90, height: 250 }}
                />
            </View>
            <View style={styles.productContent}>
                <Text style={styles.productName}>Cerveja Heineken LongNeck 350ML </Text>
                <Text style={styles.productListPrice}>De R$36,99 </Text>
                <Text style={styles.productSellingPrice}>Por R$26,99 </Text>
                <View style={styles.quantityWrapper}>
                    <QuantitySelector/>
                    <AddSixButton />
                </View>
                <Text>Produto da categoria: {productId}</Text>

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
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    imageWrapper: {
        borderBottomWidth: 1,
        borderBottomColor: '#c4c4c4',
        height: 320,
        justifyContent: "center",
        alignItems: "center"
    },
    productContent:{
        paddingHorizontal:12
    },
    productName: {
        fontSize: 16,
        fontWeight: 600,
        marginVertical: 20
    },
    productListPrice:{
        textDecorationLine:"line-through",
        fontSize:14
    },
    productSellingPrice:{
        fontSize:18,
        fontWeight:"700",
        marginTop:4
    },
    quantityWrapper:{
        flexDirection:"row",
        gap:8,
        marginVertical:12
    }
});
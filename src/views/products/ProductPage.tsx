import { Text, View, TouchableOpacity, ScrollView, StyleSheet, Image } from "react-native";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { ProductsStackParamList } from "../../routes/stacks/ProductSearchStack";
import { QuantitySelector } from "../../components/product/quantitiy/QuantitySelector";
import { AddCustomQuantity } from "../../components/product/quantitiy/AddCustomQuantity";
import { useEffect } from "react";

export function ProductPage() {
    const route = useRoute<RouteProp<ProductsStackParamList, "ProductPage">>();
    const navigation = useNavigation();
    const { productId } = route.params;

    useEffect(() => {
        const parent = navigation.getParent(); // acessa a Tab.Navigator

        parent?.setOptions({
            tabBarStyle: { display: "none" }, // esconde a tab
        });

        return () =>
            parent?.setOptions({
                tabBarStyle: undefined, // volta ao normal quando sair
            });
    }, [navigation]);
    return (
        <View style={{flex:1}}>
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
                        <QuantitySelector />
                        <AddCustomQuantity quantity={6} />
                        <AddCustomQuantity quantity={12} />
                    </View>
                    
                    <Text>Produto da categoria: {productId}</Text>

                </View>

            </ScrollView>
            <View style={styles.addToCartWrapper}>
                <Text>Oi</Text>
            </View>
        </View>
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
    productContent: {
        paddingHorizontal: 12
    },
    productName: {
        fontSize: 16,
        fontWeight: 600,
        marginVertical: 20
    },
    productListPrice: {
        textDecorationLine: "line-through",
        fontSize: 14
    },
    productSellingPrice: {
        fontSize: 18,
        fontWeight: "700",
        marginTop: 4
    },
    quantityWrapper: {
        flexDirection: "row",
        gap: 8,
        marginVertical: 12
    },
    addToCartWrapper: {
        position: "absolute",
        left: 0,
        right: 0,      
        bottom: 0,
        zIndex: 9,
        height: 120,    
        backgroundColor: "#FFF",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 16,
        borderTopWidth: 1,
        borderTopColor: "#c4c4c4",
    }
});
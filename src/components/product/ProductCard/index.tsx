import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native";
import { colors } from "../../../styles/colors";
import { Shadow } from "react-native-shadow-2";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ProductsStackParamList } from "../../../routes/stacks/ProductSearchStack";

type NavigationProp = StackNavigationProp<ProductsStackParamList, "ProductPage">;
export function ProductCard() {
    const navigation = useNavigation<NavigationProp>();
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("ProductPage", { productId: "testeee" })}
        >
            <Shadow
                startColor="#00000020"
                distance={2}
                offset={[0, 2]}
                corners={{
                    topStart: true,
                    topEnd: true,
                    bottomStart: true,
                    bottomEnd: true,
                }}
                containerStyle={{ marginBottom: 6, marginTop: 6 }}
                style={{ borderRadius: 8 }}
            >
                <View style={styles.productContainer}>
                    <View style={styles.productImageWrapper}>
                        <Image
                            source={require("../../../assets/images/mock/mock-product-shelf.png")}
                            style={{ width: 110, height: 115 }}
                        />
                    </View>
                    <View>
                        <Text style={styles.productName}>Vinho Tinto Reserva</Text>
                        <Text style={styles.productListPrice}> R$ 59,90</Text>
                        <Text style={styles.productSellingPrice}> R$ 39,90</Text>
                        <TouchableOpacity
                            style={styles.addToCartButton}
                            onPress={() => console.log("Adicionar")}
                        >
                            <Text style={styles.addToCartText}>Adicionar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Shadow>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    productContainer: {
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#ffff",
        width: 160,
        maxWidth: 170,
        minHeight: 270,
        borderRadius: 8,
        padding: 8,
    },
    productImageWrapper: {
        justifyContent: "center",
        alignItems: "center"
    },
    productName: {
        color: colors.textMainGray,
        fontWeight: "500",
        fontSize: 14,
        marginBottom: 8
    },
    productListPrice: {
        fontSize: 12,
        color: colors.textSecondaryGray,
        textDecorationLine: "line-through"
    },
    productSellingPrice: {
        fontSize: 16,
        color: colors.primaryBrown,
        fontWeight: "600",
        marginBottom: 6
    },
    addToCartButton: {
        backgroundColor: colors.primaryYellow,
        width: "100%",
        height: 32,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    addToCartText: {
        textTransform: "uppercase",
        fontWeight: "600",
        color: colors.primaryBrown,
    }
});
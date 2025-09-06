import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native";
import { Colors } from "../../../styles/colors";

export function ProductCard() {

    return (
        <View style={styles.productContainer}>
            <View style={styles.productImageWrapper}>
                <Image source={require("../../../assets/images/mock/mock-product-shelf.png")} style={{ width: 110, height: 115 }} />
            </View>
            <View>
                <Text style={styles.productName}>Vinho Tinto Reserva</Text>
                <Text>de R$ 59,90</Text>
                <Text>por R$ 39,90</Text>
                <TouchableOpacity style={styles.addToCartButton} onPress={() => console.log("Adicionar")}>
                    <Text style={styles.addToCartText}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    productContainer: {
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#ffff",
        width: "100%",
        maxWidth: 170,
        minHeight: 270,
        borderRadius: 8,
        padding: 8,
        elevation: 5,
        // iOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    productImageWrapper:{
        justifyContent:"center",
        alignItems:"center"
    },
    productName: {},
    addToCartButton: {
        backgroundColor:Colors.primary,
        width: "100%",
        height: 32,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    addToCartText: {
        textTransform: "uppercase",
        fontWeight: "600",
        color: "#ffffff",
    }
});
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";

export function ProductShelf() {

    return (
        <View style={styles.productContainer}>
            <Image source={require("../../../assets/images/mock/mock-product-shelf.png")} style={{ width: 60, height: 60 }} />
            <Text style={styles.productName}>Vinho Tinto Reserva</Text>
            <Text>de R$ 59,90</Text>
            <Text>por R$ 39,90</Text>
            <Button title="Adicionar"/>
        </View>
    )
}


const styles = StyleSheet.create({
    productContainer: {
        flexDirection: "column",
        backgroundColor: "#ffff",
        width: "100%",
        maxWidth: 170,
        minHeight:270,
        borderRadius: 8,
        padding:8 ,
        elevation: 5,
        // iOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    productName: {}
});
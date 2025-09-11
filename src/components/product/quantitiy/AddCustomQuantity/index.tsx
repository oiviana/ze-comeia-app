import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Shadow } from "react-native-shadow-2";

interface AddCustomQuantityProps {
    quantity: number;
}

export function AddCustomQuantity({ quantity }: AddCustomQuantityProps) {
    return (
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
            style={{ borderRadius: 12 }}
        >
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>+{quantity}</Text>
            </TouchableOpacity>
        </Shadow>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 12,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        width: 96,
        height:55
    },
    text: {
        fontSize: 16,
        fontWeight: "600",
        color: "#333",
    },
});

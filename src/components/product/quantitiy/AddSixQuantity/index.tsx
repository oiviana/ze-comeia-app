import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function AddSixButton() {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>+6</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: "#c4c4c4",
        borderRadius: 12,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "#f2f2f2",
        alignItems: "center",
        justifyContent: "center",
        width:96
    },
    text: {
        fontSize: 16,
        fontWeight: "600",
        color: "#333",
    },
});

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../styles/colors";

export function AddToCartButton() {

    return (
        <View style={styles.addToCartWrapper}>
            <TouchableOpacity style={styles.addToCartButton}>
                <Text style={styles.addToCartButtonText}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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

        shadowColor: "#000",
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 7,
    },
    addToCartButton: {
        backgroundColor: colors.primaryYellow,
        width: "100%",
        height: 50,
        borderRadius: 12,
        marginBottom: 12,
        justifyContent: "center",
        alignItems: "center"
    },
    addToCartButtonText: {
        fontSize: 16,
        fontWeight: "600",
        width: 85,
        textTransform: "uppercase",
        color: colors.primaryBrown
    }
})
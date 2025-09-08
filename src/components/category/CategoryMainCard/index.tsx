import { StyleSheet, View } from "react-native";
import { Colors } from "../../../styles/colors";
import { Shadow } from "react-native-shadow-2";

export function CategoryMainCard() {

    return (
        <Shadow
            startColor="#00000020"
            distance={0}
            offset={[0, 1]}
            corners={{
                topStart: true,
                topEnd: true,
                bottomStart: true,
                bottomEnd: true,
            }}
            containerStyle={{ marginBottom: 6, marginTop: 6 }}
            style={{ borderRadius: 12 }}
        >
            <View style={styles.cardWrapper}>

            </View>
        </Shadow>
    )
}

const styles = StyleSheet.create({
    cardWrapper: {
        width: 180,
        height: 100,
        backgroundColor: Colors.backgroundWhite,
        borderRadius: 12,
        marginRight: 8,
        elevation: 5,
        // iOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 36,
    }
})
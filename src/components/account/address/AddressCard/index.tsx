// components/AddressCard.tsx
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../../../../styles/colors";

interface AddressCardProps {
    nickname?: string;
    street: string;
    number: string;
    neighbourhood: string;
    city: string;
    state: string;
    complement?: string;
    referencePoint?: string;
}

export function AddressCard({
    nickname,
    street,
    number,
    neighbourhood,
    city,
    state,
    complement,
    referencePoint
}: AddressCardProps) {
    return (
        <TouchableOpacity style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>
                    {nickname || `${street}, ${number}`}
                </Text>

            </View>

            <View style={styles.details}>
                {nickname && <Text style={styles.headerSubtitle}>{street}, <Text style={styles.detailText}>{number} </Text></Text>}
                <Text style={styles.detailText}>{neighbourhood} </Text>
                <Text style={styles.detailText}>
                    {city} - {state}
                </Text>
            </View>
            <TouchableOpacity>
                <Icon
                    name="more-vert"
                    size={28}
                    color={colors.primaryBrown}
                    style={styles.optionsIcon}
                />
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 12,
        marginBottom: 16,
        elevation: 2,
        minHeight: 126,
        position: "relative",
        justifyContent: "center"
    },
    header: {
        marginBottom: 8
    },
    headerTitle: {
        fontSize: 17,
        fontWeight: "600",
        color: "#3E2723"
    },
    headerSubtitle: {
        fontSize: 14,
        color: "#666"
    },
    details: {
        gap: 2
    },
    detailText: {
        fontSize: 14,
        color: "#444"
    },
    optionsIcon: {
        position:"absolute",
        right: 0,
        bottom:55
    }
});

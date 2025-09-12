import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../../../styles/colors";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { AccountStackParamList } from "../../../routes/stacks/AccountStack";
export function LoggedAccount() {
    const navigation = useNavigation<StackNavigationProp<AccountStackParamList>>();
    return (
        <SafeAreaView style={{ paddingHorizontal: 16, paddingTop: 16 }}>
            <ScrollView>
                <TouchableOpacity style={styles.accountHeader}
                    onPress={() => navigation.navigate("AccountDetails")}>
                    <Icon
                        name="account-circle"
                        size={80}
                        color={colors.secondaryYellow}
                    />
                    <View>
                        <Text style={styles.accountName}>Lucas Viana</Text>
                        <Text style={styles.accountEmail}>vianalucas80@gmail.com</Text>
                    </View>
                    <Icon
                        name="mode-edit"
                        size={34}
                        color={colors.primaryBrown}
                        style={styles.accountOptionHeader}
                    />
                </TouchableOpacity>
                <View style={styles.accountOptions}>

                    <TouchableOpacity style={[styles.accountOptionButton, { borderTopWidth: 0 }]}
                    onPress={() => navigation.navigate("Orders")}
                    >
                        <Icon
                            name="receipt"
                            size={30}
                            color={colors.primaryBrown}
                            style={styles.accountOptionIcon}
                        />
                        <Text>Acompanhar Pedidos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.accountOptionButton}
                        onPress={() => navigation.navigate("Addresses")}
                    >
                        <Icon
                            name="place"
                            size={30}
                            color={colors.primaryBrown}
                            style={styles.accountOptionIcon}
                        />
                        <Text>Meus Endereços</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.accountOptionButton}>
                        <Icon
                            name="favorite"
                            size={30}
                            color={colors.primaryBrown}
                            style={styles.accountOptionIcon}
                        />
                        <Text>Favoritos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.accountOptionButton}>
                        <Icon
                            name="help"
                            size={30}
                            color={colors.primaryBrown}
                            style={styles.accountOptionIcon}
                        />
                        <Text>Fale Conosco</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.accountOptionButton}>
                        <Icon
                            name="logout"
                            size={30}
                            color={colors.primaryRed}
                            style={styles.accountOptionIcon}
                        />
                        <Text style={[styles.accountOptionText, { color: colors.primaryRed }]}>Sair</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    accountHeader: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        position: "relative",
        paddingVertical: 12,
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 12,
        paddingHorizontal: 8
    },
    accountOptions: {
        marginVertical: 20,
        backgroundColor: "#fff",
        borderRadius: 12,
        overflow: "hidden",
    },
    accountOptionButton: {
        paddingVertical: 18,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderColor: "#f0f0f0",
        flexDirection: "row",
        alignItems: "center"
    },
    accountOptionIcon: {
        marginHorizontal: 10
    },
    accountOptionText: {
        fontWeight: "600",
        color: colors.primaryBrown
    },
    accountName: {
        fontSize: 24,
        fontWeight: "600",
        marginBottom: 4,
        color: colors.primaryBrown
    },
    accountEmail: {
        fontSize: 16,
        fontWeight: "500",
        color: colors.textMainGray
    },
    accountOptionHeader: {
        position: "absolute",
        top: 32,
        right: 20
    }
});
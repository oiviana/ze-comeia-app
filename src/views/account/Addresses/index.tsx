import { FlatList, StyleSheet, View } from "react-native";
import { useState } from "react";
import { AddressCard } from "../../../components/account/address/AddressCard";
import { ConfirmationDialog } from "../../../components/commom/ConfirmationDialog";
import { SafeAreaView } from "react-native-safe-area-context";

const mockAddresses = [
    {
        id: "1",
        nickname: "Casa",
        street: "Rua das Flores",
        number: "123",
        neighbourhood: "Centro",
        city: "São Paulo",
        state: "SP"
    },
    {
        id: "2",
        street: "Avenida Paulista",
        number: "1000",
        neighbourhood: "Bela Vista",
        city: "São Paulo",
        state: "SP"
    }
];

export function Addresses() {
    const [selectedAddressId, setSelectedAddressId] = useState<string | null>(
        null
    );
    const [dialogVisible, setDialogVisible] = useState(false);
    const [currentAddress, setCurrentAddress] = useState<any>(null);

    function handleSelectAddress(address: any) {
        setCurrentAddress(address);
        setDialogVisible(true);
    }

    function confirmSelectAddress() {
        setSelectedAddressId(currentAddress.id);
        setDialogVisible(false);
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={mockAddresses}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ padding: 16 }}
                renderItem={({ item }) => (
                    <AddressCard
                        {...item}
                        selected={selectedAddressId === item.id} 
                        onPress={() => handleSelectAddress(item)}
                    />
                )}
            />

            <ConfirmationDialog
                visible={dialogVisible}
                message={`Deseja alterar para este endereço?\n${currentAddress?.street}, ${currentAddress?.number}`}
                onConfirm={confirmSelectAddress}
                onClose={() => setDialogVisible(false)}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5"
    }
});

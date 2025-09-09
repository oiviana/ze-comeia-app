import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { ProductCard } from "../ProductCard";
import { ShelfTitle } from "../../commom/ShelfTitle";

interface ShelfTitleProps {
    shelfTitle: string
}

const products = [
    { id: "1", name: "Vinho Tinto" },
    { id: "2", name: "Vinho Branco" },
    { id: "3", name: "Espumante" },
    { id: "4", name: "Espumante" },
    { id: "5", name: "Espumante" },
    { id: "6", name: "Espumante" },
];

const CARD_WIDTH = 170;
const CARD_MARGIN = 16;

export default function ProductShelf({ shelfTitle }: ShelfTitleProps) {
    return (
        <View style={styles.productShelfContainer}>
            <ShelfTitle title={shelfTitle} />
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={CARD_WIDTH + CARD_MARGIN}
                decelerationRate="fast"
                contentContainerStyle={{ paddingHorizontal: CARD_MARGIN }}
                renderItem={() => (
                    <View style={{ marginRight: CARD_MARGIN }}>
                        <ProductCard />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    productShelfContainer: {
        flexDirection: "column",
        marginTop: 20,
        marginBottom: 20
    }
})

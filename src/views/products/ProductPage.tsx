import { Text, View, TouchableOpacity, ScrollView, StyleSheet, Image } from "react-native";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { ProductsStackParamList } from "../../routes/stacks/ProductSearchStack";
import { QuantitySelector } from "../../components/product/quantitiy/QuantitySelector";
import { AddCustomQuantity } from "../../components/product/quantitiy/AddCustomQuantity";
import { useEffect } from "react";
import { colors } from "../../styles/colors";
import { ProductDescription } from "../../components/product/ProductDescription";
import WishlistButton from "../../components/wishlist/WishlistButton";
import { AddToCartButton } from "../../components/cart/AddToCartButton";

export function ProductPage() {
    const route = useRoute<RouteProp<ProductsStackParamList, "ProductPage">>();
    const navigation = useNavigation();
    const { productId } = route.params;

    useEffect(() => {
        const parent = navigation.getParent(); // acessa a Tab.Navigator

        parent?.setOptions({
            tabBarStyle: { display: "none" }, // esconde a tab
        });

        return () =>
            parent?.setOptions({
                tabBarStyle: undefined, // volta ao normal quando sair
            });
    }, [navigation]);
    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ paddingBottom: 140 }} >
                <View style={styles.imageWrapper}>
                    <Image
                        source={require("../../assets/images/mock/mock-product-shelf.png")}
                        style={{ width: 90, height: 250 }}
                    />
                    <WishlistButton />
                </View>
                <View style={styles.productContent}>
                    <Text style={styles.productName}>Cerveja Heineken LongNeck 350ML </Text>
                    <Text style={styles.productListPrice}>De R$36,99 </Text>
                    <Text style={styles.productSellingPrice}>Por R$26,99 </Text>
                    <View style={styles.quantityWrapper}>
                        <QuantitySelector />
                        <AddCustomQuantity quantity={6} />
                        <AddCustomQuantity quantity={12} />
                    </View>
                    <ProductDescription description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                    {/* <Text>Produto da categoria: {productId}</Text> */}
                </View>

            </ScrollView>
            <AddToCartButton />
        </View>
    );
}


const styles = StyleSheet.create({
    imageWrapper: {
        borderBottomWidth: 1,
        borderBottomColor: '#c4c4c4',
        height: 320,
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    },
    productContent: {
        paddingHorizontal: 12
    },
    productName: {
        fontSize: 17,
        fontWeight: 600,
        marginVertical: 20
    },
    productListPrice: {
        textDecorationLine: "line-through",
        fontSize: 14
    },
    productSellingPrice: {
        fontSize: 20,
        fontWeight: "700",
        color: colors.primaryBrown,
        marginTop: 4
    },
    quantityWrapper: {
        flexDirection: "row",
        gap: 8,
        marginVertical: 12
    },
});
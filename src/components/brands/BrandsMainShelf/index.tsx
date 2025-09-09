import { FlatList, Text, View } from "react-native";
import { BrandMainCard } from "../BrandMainCard";
import { ShelfTitle } from "../../commom/ShelfTitle";

export function BrandsMainShelf() {
    const categories = [
        { id: "1", image: require("../../../assets/images/mock/brahma-logo.png") },
        { id: "2", image: require("../../../assets/images/mock/heineken-logo.png") },
        { id: "3", image: require("../../../assets/images/mock/Jack-Daniels-Logo.png") },
        { id: "4", image: require("../../../assets/images/mock/brahma-logo.png") },
        { id: "5", image: require("../../../assets/images/mock/heineken-logo.png") },
        { id: "6", image: require("../../../assets/images/mock/Jack-Daniels-Logo.png") },
        { id: "7", image: require("../../../assets/images/mock/brahma-logo.png") },
        { id: "8", image: require("../../../assets/images/mock/heineken-logo.png") },
        { id: "9", image: require("../../../assets/images/mock/Jack-Daniels-Logo.png") },
        { id: "10", image: require("../../../assets/images/mock/brahma-logo.png") },
        { id: "11", image: require("../../../assets/images/mock/heineken-logo.png") },
        { id: "12", image: require("../../../assets/images/mock/Jack-Daniels-Logo.png") },
    ];

    // Função para agrupar de 2 em 2
    const chunkArray = (array: any[], size: number) => {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    };

    const groupedCategories = chunkArray(categories, 2);

    return (
        <View>
            <ShelfTitle title="Navegue por Marcas"/>
            <FlatList
                data={groupedCategories}
                keyExtractor={(_, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 9 }}
                renderItem={({ item }) => (
                    <View style={{ marginRight: 12 }}>
                        {item.map((brand) => (
                            <View key={brand.id} style={{ marginBottom: 12 }}>
                                <BrandMainCard imageSource={brand.image} />
                            </View>
                        ))}
                    </View>
                )}
            />
        </View>
    )
}

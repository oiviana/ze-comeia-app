import { FlatList, Text, View } from "react-native";
import { CategoryMainCard } from "../CategoryMainCard";

export function CategoryMainShelf() {
    const products = [
        { id: "1", name: "Vinho Tinto" },
        { id: "2", name: "Vinho Branco" },
        { id: "3", name: "Espumante" },
        { id: "4", name: "Espumante" },
        { id: "5", name: "Espumante" },
        { id: "6", name: "Espumante" },
    ];

    return (
        <View>
            <Text>Categorias</Text>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={3}
                decelerationRate="fast"
                contentContainerStyle={{ paddingHorizontal: 9}}
                renderItem={() => (
                    <View>
                       <CategoryMainCard/>
                    </View>
                )}
            />
        </View>
    )
}

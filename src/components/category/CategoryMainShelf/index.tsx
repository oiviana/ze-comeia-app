import { FlatList, Text, View } from "react-native";
import { CategoryMainCard } from "../CategoryMainCard";
import { ShelfTitle } from "../../commom/ShelfTitle";

interface CategoryShelfTitleProps {
    shelfTitle: string
}

export function CategoryMainShelf({ shelfTitle }: CategoryShelfTitleProps) {
    const categories = [
        { id: "1", name: "Cervejas", image: require("../../../assets/images/mock/mock-category.png") },
        { id: "2", name: "Destilados", image: require("../../../assets/images/mock/mock-category-2.png") },
        { id: "3", name: "Cervejas", image: require("../../../assets/images/mock/mock-category.png") },
        { id: "4", name: "Destilados", image: require("../../../assets/images/mock/mock-category-2.png") },
        { id: "5", name: "Cervejas", image: require("../../../assets/images/mock/mock-category.png") },
        { id: "6", name: "Destilados", image: require("../../../assets/images/mock/mock-category-2.png") }

    ];

    return (
        <View>
            <ShelfTitle title={shelfTitle} />
            <FlatList
                data={categories}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 9 }}
                renderItem={({ item }) => (
                    <CategoryMainCard
                        categoryTitle={item.name}
                        imageSource={item.image}
                    />
                )}
            />
        </View>
    )
}

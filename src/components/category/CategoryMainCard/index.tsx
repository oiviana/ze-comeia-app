import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../../styles/colors";
import { Shadow } from "react-native-shadow-2";

interface CategoryCardProps {
    categoryTitle: string;
    imageSource: ImageSourcePropType; // <-- nova prop para imagem
}

export function CategoryMainCard({ categoryTitle, imageSource }: CategoryCardProps) {
    return (
        <Shadow
            startColor="#00000020"
            distance={4} // aumentei um pouco para parecer sombra de verdade
            offset={[0, 2]} 
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
                <Text style={styles.cardCategoryTitle}>{categoryTitle}</Text>
                <Image
                    source={imageSource} // <-- usa a prop recebida
                    style={styles.cardImage}
                />
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
        position: "relative",
        overflow: "hidden",
    },
    cardCategoryTitle: {
        position: "absolute",
        top: 6,
        left: 8,
        fontSize: 16,
        fontWeight: "600",
    },
    cardImage: {
        width: 90,
        height: 90,
        position: "absolute",
        right: 4,
        bottom: -8,
    },
});

import { TouchableOpacity, Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../../styles/colors";
import { Shadow } from "react-native-shadow-2";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

// 🔹 Importa o mesmo tipo do ProductSearchStack
import { ProductsStackParamList } from "../../../routes/stacks/ProductSearchStack";
interface CategoryCardProps {
  categoryTitle: string;
  imageSource: ImageSourcePropType;
}

type NavigationProp = StackNavigationProp<ProductsStackParamList, "Produtos">;

export function CategoryMainCard({ categoryTitle, imageSource }: CategoryCardProps) {
  const navigation = useNavigation<NavigationProp>();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate("ProductLandingPage", { categoryId: categoryTitle })}
    >
      <Shadow
        startColor="#00000020"
        distance={4}
        offset={[0, 2]}
        containerStyle={{ marginBottom: 6, marginTop: 6 }}
        style={{ borderRadius: 12 }}
      >
        <View style={styles.cardWrapper}>
          <Text style={styles.cardCategoryTitle}>{categoryTitle}</Text>
          <Image source={imageSource} style={styles.cardImage} />
        </View>
      </Shadow>
    </TouchableOpacity>
  );
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

import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import { colors } from "../../../styles/colors";
import { Shadow } from "react-native-shadow-2";

interface  BrandMainCardProps {
  
    imageSource: ImageSourcePropType; // <-- nova prop para imagem
}

export function BrandMainCard({ imageSource }:  BrandMainCardProps) {
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
        width: 110,
        height: 70,
        backgroundColor: colors.backgroundWhite,
        borderRadius: 12,
        marginRight: 8,
        overflow: "hidden",
        alignItems:"center",
        justifyContent:"center"
    },
    cardImage: {
        width: 75,
        height: 50,
    },
});

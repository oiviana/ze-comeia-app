import { StyleSheet, Text } from "react-native";
import { Colors } from "../../../styles/colors";

interface ShelfTitleProps {
  title: string;
}

export function ShelfTitle({ title }: ShelfTitleProps) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight:"600",
        marginVertical:12,
        marginLeft:12
    }
});
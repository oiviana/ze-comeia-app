import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export function ProductDescription({ description }: { description: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View>
        <Text>Sobre o produto:</Text>
      <Text
        numberOfLines={expanded ? undefined : 3}
        style={styles.description}
      >
        {description}
      </Text>

      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <Text style={styles.readMore}>
          {expanded ? "Ler menos" : "Ler mais"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  description: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },
  readMore: {
    marginTop: 4,
    color: "#FFA800",
    fontWeight: "600",
  },
});

import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  const decrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const increase = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.button} onPress={decrease}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>

      <Text style={styles.quantity}>{quantity}</Text>

      <TouchableOpacity style={styles.button} onPress={increase}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#c4c4c4",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,
    width: 120,
  },
  button: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
   
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  quantity: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
});

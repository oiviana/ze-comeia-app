import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Shadow } from "react-native-shadow-2";

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
    <Shadow
      startColor="#00000020"
      distance={2}
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
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.button} onPress={decrease}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.quantity}>{quantity}</Text>

        <TouchableOpacity style={styles.button} onPress={increase}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </Shadow>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
   
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,
    width: 120,
    height:55,
    backgroundColor: "#fff"
  },
  button: {
    width: 32,
    height: 32,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",

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

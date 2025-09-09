import React from "react";
import { TextInput, View, Text, StyleSheet, TextInputProps } from "react-native";

type FormInputProps = {
  label?: string;
  error?: string;
} & TextInputProps; 

export function FormInput({ label, error, ...props }: FormInputProps) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[
          styles.input,
          error ? styles.inputError : null
        ]}
        placeholderTextColor="#999"
        {...props} />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: "100%",
    paddingHorizontal:12
  },
  label: {
    marginBottom: 4,
    fontSize: 14,
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  inputError: {
    borderColor: "red",
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
});

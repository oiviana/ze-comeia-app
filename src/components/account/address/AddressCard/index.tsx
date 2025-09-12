import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../../../../styles/colors";
import { AddressOptionsModal } from "../AddressOptionsModal";

interface AddressCardProps {
  id: string;
  nickname?: string;
  street: string;
  number: string;
  neighbourhood: string;
  city: string;
  state: string;
  complement?: string;
  referencePoint?: string;
  selected?: boolean;
  onPress?: () => void;
}

export function AddressCard({
  id,
  nickname,
  street,
  number,
  neighbourhood,
  city,
  state,
  complement,
  referencePoint,
  selected = false,
  onPress
}: AddressCardProps) {
  const [optionsVisible, setOptionsVisible] = useState(false);

  function handleEdit() {
    console.log("Editar endereço", id);
    setOptionsVisible(false);
  }

  function handleDelete() {
    console.log("Excluir endereço", id);
    setOptionsVisible(false);
  }

  return (
    <>
      <TouchableOpacity
        style={[styles.card, selected && styles.selectedCard]}
        onPress={onPress}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            {nickname || `${street}, ${number}`}
          </Text>
        </View>

        <View style={styles.details}>
          {nickname && (
            <Text style={styles.headerSubtitle}>
              {street}, <Text style={styles.detailText}>{number} </Text>
            </Text>
          )}
          <Text style={styles.detailText}>{neighbourhood}</Text>
          <Text style={styles.detailText}>
            {city} - {state}
          </Text>
        </View>

        <TouchableOpacity onPress={() => setOptionsVisible(true)}>
          <Icon
            name="more-vert"
            size={28}
            color={colors.primaryBrown}
            style={styles.optionsIcon}
          />
        </TouchableOpacity>
      </TouchableOpacity>

      <AddressOptionsModal
        visible={optionsVisible}
        onClose={() => setOptionsVisible(false)}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "#f0f0f0",
    minHeight: 126,
    position: "relative",
    justifyContent: "center"
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: colors.secondaryYellow
  },
  header: {
    marginBottom: 8
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#3E2723"
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#666"
  },
  details: {
    gap: 2
  },
  detailText: {
    fontSize: 14,
    color: "#444"
  },
  optionsIcon: {
    position: "absolute",
    right: 0,
    bottom: 55
  }
});

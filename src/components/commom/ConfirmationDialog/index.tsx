import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface ConfirmationDialogProps {
  visible: boolean;
  message: string;
  onConfirm: () => void;
  onClose: () => void;
}

export function ConfirmationDialog({
  visible,
  message,
  onConfirm,
  onClose
}: ConfirmationDialogProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.message}>{message}</Text>

          <View style={styles.buttons}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.cancel}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                onConfirm();
                onClose();
              }}
            >
              <Text style={styles.confirm}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    width: "80%"
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center"
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  cancel: {
    color: "#555",
    fontSize: 16
  },
  confirm: {
    color: "red",
    fontSize: 16,
    fontWeight: "600"
  }
});

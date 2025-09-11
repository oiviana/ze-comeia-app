import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function WishlistButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)} style={styles.button}>
      <Icon
        name={isFavorite ? 'heart' : 'heart-outline'}
        size={30}
        color={isFavorite ? 'red' : 'gray'}
        style={{ marginTop: 3 }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 20,
    top: 34,
    backgroundColor: "#fff",
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.2,
    shadowRadius: 30,
    elevation: 7,
  }
})
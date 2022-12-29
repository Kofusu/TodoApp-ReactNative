import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  id: string;
  text: string;
  onDelete: (id: string) => void
}

const TodoItem: FC<Props> = ({ id, text, onDelete }) => {
  return (
    <View
      accessibilityHint={id}
      style={styles.container}
    >
      <Text style={styles.textItem}>{text}</Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => onDelete(id)}
      >
        <Text style={styles.textButton}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "98%",
    backgroundColor: "#222",
    margin: 4,
    paddingVertical: 8,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
  },
  textItem: {
    color: "#fff",
  },
  button: {
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 8,
  },
  textButton: {
    color: "#f00",
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
});

export default TodoItem;

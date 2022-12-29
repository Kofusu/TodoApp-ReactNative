import { useState, FC } from "react";
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  Image,
} from "react-native";

interface Props {
  visible: boolean;
  onClose: () => void;
  onAdd: (text: string) => void;
}

const InputTodo: FC<Props> = ({ visible, onClose, onAdd }) => {
  const [inputTodo, setInputTodo] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  function changeHandler(inputText: string): void {
    setInputTodo(inputText);
    setIsError(false)
  }

  function addHandler(): void {
    if (inputTodo.trim() !== "") {
      onAdd(inputTodo);
      setInputTodo("");
      setIsError(false)
    } else {
      setIsError(true)
    }
  }

  return (
    <Modal visible={visible} animationType={"slide"}>
      <KeyboardAvoidingView style={styles.container}>
        <Image source={require("../assets/favicon.png")} style={styles.image} />
        <TextInput
          value={inputTodo}
          onChangeText={changeHandler}
          placeholder="Input Todo"
          style={styles.input}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={addHandler}
          >
            <Text style={styles.textButton}>Add</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={onClose}
          >
            <Text style={styles.textButton}>Cancel</Text>
          </TouchableOpacity>
        </View>
        {isError && <Text style={styles.errorText}>Input Should not Empty!</Text>}
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 75,
    width: 75,
    marginBottom: 16,
  },
  input: {
    borderBottomWidth: 1,
    padding: 4,
    width: "75%",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
    marginVertical: 8,
  },
  button: {
    backgroundColor: "#000",
    width: "45%",
    alignItems: "center",
  },
  buttonPressed: {
    opacity: 0.75,
  },
  textButton: {
    color: "#fff",
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
  errorText: {
    color: "#f00",
  },
});

export default InputTodo;

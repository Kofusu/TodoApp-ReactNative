import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { FC, useState } from "react";

import InputTodo from "./components/InputTodo";
import TodoItem from "./components/TodoItem";

const App: FC = () => {
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
  const [todoList, setTodoList] = useState<{id: string, text: string}[]>([]);

  function addHandler(text: string): void {
    setTodoList(todo => {
      return [...todo, {
        id: Math.random().toString(),
        text
      }]
    })
    closeModal()
  }

  function deleteHandler(id: string): void {
    setTodoList(todo => {
      return todo.filter(item => item.id !== id)
    })
  }

  function openModal(): void {
    setModalIsVisible(true)
  }

  function closeModal(): void {
    setModalIsVisible(false)
  }

  return (
    <SafeAreaView style={styles.appContainer}>
      <FlatList 
        data={todoList}
        renderItem={item => <TodoItem id={item.item.id} text={item.item.text} onDelete={deleteHandler} />} 
        keyExtractor={item => item.id}
        style={styles.todoList}
        showsVerticalScrollIndicator={false}
        
      />
      <TouchableOpacity style={styles.buttonAdd} activeOpacity={0.8} onPress={openModal}>
        <Text style={styles.buttonAddText}>~ Click to Add Todo ~</Text>
      </TouchableOpacity>
      <InputTodo visible={modalIsVisible} onClose={closeModal} onAdd={addHandler} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 4,
  },
  buttonAdd: {
    borderWidth: 1,
    borderColor: "#000",
    width: "100%",
    alignItems: "center",
  },
  buttonAddText: {
    color: "#000",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  todoList: {
    paddingVertical: 4,
    marginVertical: 8,
    borderRadius: 20,
  },
});

export default App;

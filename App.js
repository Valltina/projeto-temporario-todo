import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, FlatList } from 'react-native';
import logo from "./assets/LOGOTODO2.png";
import { useState } from 'react';

export default function App() {
  const [data, setData] = useState([
    { id: "1", descricao:"Tarefa 1", data: "2025-01-01", realizado: true },
    { id: "2", descricao:"Tarefa 2", data: "2025-02-01", realizado: false },
    { id: "3", descricao:"Tarefa 3", data: "2025-03-01", realizado: true },
    { id: "4", descricao:"Tarefa 4", data: "2025-04-01", realizano: false },
    { id: "5", descricao:"Tarefa 5", data: "2025-05-01", realizado: true },
  ]);

  const Item = (item) => {
    return(
      <View>
        <Text>{item.realizado}</Text>
        <View>
          <Text>{item.descricao}</Text>
          <Text>{item.data}</Text>
        </View>
      </View>
    )
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewLogo}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.textLogo}>TODO list</Text>
      </View>
      <View style={styles.viewTask}>
        <TextInput style={styles.inputTask} placeholder="Digite sua tarefa"/>
        <Button title="Adicionar"/>
        </View>
        <FlatList style={styles.taskList}
        data={data}
        keyExtractor = {item => item.id.toString()}
        renderItem = {Item}
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  logo: {
    height: 150,
    width: 150,
  },

  viewTask: {
    flexDirection: "row",
    marginTop: 10,
  },

  inputTask: {
    flex: 1,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    marginRight: 10,
  },

  viewLogo: {
    justifyContent: "center",
    alignItems: "center",
  },

  textLogo: {
    justifyContent: "center",
  },

  taskList: {
    flex: 1,
  }
});

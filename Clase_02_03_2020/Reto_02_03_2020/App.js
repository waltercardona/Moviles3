import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput,Button,Alert } from 'react-native';

export default function App() {
  const saludo = () =>{Alert.alert("Hola Cesde")};
  const [name,setName] = useState("");
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Image style={styles.logo} source={require("./assets/login.png")}></Image>
      <TextInput style={styles.textInput} placeholder="usuario" onChangeText={(text)=>setName(text)}></TextInput>
      <Button title="start" onPress={saludo}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100
  },
  textInput:{
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 5,
    width: 300,
    textAlign: "center"
    
    }

});


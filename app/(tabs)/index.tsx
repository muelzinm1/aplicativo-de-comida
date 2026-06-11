import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Text, View } from "@/components/Themed";

export default function TabOneScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const fazerLogin = () => {
    if (email === "admin" && senha === "1234") {
      Alert.alert("Sucesso", "Login realizado!");
      router.push("/inicio");
    } else {
      Alert.alert("Erro", "Usuário ou senha incorretos!");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />

      <Text style={styles.title}>Pede Aí</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.button} onPress={fazerLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.forgot}>Usuário: admin | Senha: 1234</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    backgroundColor: "#fff",
  },

  logo: {
    width: 180,
    height: 180,
    resizeMode: "contain",
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#fff",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: "100%",
  },

  button: {
    backgroundColor: "#ff6600",
    padding: 15,
    borderRadius: 8,
    width: "100%",
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },

  forgot: {
    marginTop: 15,
    textAlign: "center",
    color: "#666",
  },
});

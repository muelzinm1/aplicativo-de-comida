import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

 const fazerLogin = () => {
  if (email === 'admin' && senha === '1234') {
    Alert.alert('Sucesso', 'Login realizado!');
    router.navigate('/inicio' as any);
  } else {
    Alert.alert('Erro', 'Usuário ou senha incorretos!');
  }
};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pede Aí</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
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
    justifyContent: 'center',
    padding: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#fff',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  forgot: {
    marginTop: 15,
    textAlign: 'center',
  },
});
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';

import { router } from 'expo-router';

export default function Inicio() {
  const [pedidos, setPedidos] = useState<{ [key: string]: string }>({});

  const funcionarios = [
    'José',
    'João',
    'Carlos',
    'Pedro',
    'Maria',
    'Ana',
    'Felipe',
    'Lucas',
  ];

  const refeicoes = ['Cozido', 'Carne do Sol', 'Frango', 'Paleta'];

  function selecionar(nome: string, refeicao: string) {
    setPedidos((prev) => ({
      ...prev,
      [nome]: refeicao,
    }));
  }

  function gerarResumo() {
    let resumo = '';

    funcionarios.forEach((nome) => {
      resumo += `${nome}: ${pedidos[nome] || 'Sem pedido'}\n`;
    });

    Alert.alert('Resumo dos Pedidos', resumo, [
      {
        text: 'OK',
        onPress: () => router.push('/confirmacao'),
      },
    ]);
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Pedidos de Almoço</Text>

      <FlatList
        data={funcionarios}
        keyExtractor={(item) => item}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item}</Text>

            <View style={styles.opcoes}>
              {refeicoes.map((refeicao) => (
                <TouchableOpacity
                  key={refeicao}
                  style={[
                    styles.botao,
                    pedidos[item] === refeicao && styles.selecionado,
                  ]}
                  onPress={() => selecionar(item, refeicao)}
                >
                  <Text>{refeicao}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text>Pedido: {pedidos[item] || 'Nenhum'}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.resumoBtn} onPress={gerarResumo}>
        <Text style={styles.resumoTexto}>Gerar Resumo</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  opcoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  botao: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 8,
    margin: 3,
  },

  selecionado: {
    backgroundColor: '#90EE90',
  },

  resumoBtn: {
    backgroundColor: '#28A745',
    padding: 15,
    borderRadius: 10,
    marginVertical: 20,
  },

  resumoTexto: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
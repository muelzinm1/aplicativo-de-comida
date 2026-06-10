import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function Confirmacao() {
  const [entregues, setEntregues] = useState<{ [key: string]: boolean }>({});

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

  const pedidos: { [key: string]: string } = {
    José: 'Cozido',
    João: 'Frango',
    Carlos: 'Paleta',
    Pedro: 'Carne do Sol',
    Maria: 'Frango',
    Ana: 'Cozido',
    Felipe: 'Paleta',
    Lucas: 'Frango',
  };

  function toggleEntrega(nome: string) {
    setEntregues((prev) => ({
      ...prev,
      [nome]: !prev[nome],
    }));
  }

  return (
    <View style={styles.container}>

      {/* 🔙 BOTÃO VOLTAR PARA PEDIDOS */}
      <TouchableOpacity
  style={styles.voltarBtn}
  onPress={() => router.replace('/(tabs)/inicio')}
>
        <Text style={styles.voltarText}>← Voltar para pedidos</Text>
    </TouchableOpacity>
        <Text style={styles.titulo}>Confirmação de Entrega</Text>

      <FlatList
        data={funcionarios}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={{ flex: 1 }}>
              <Text style={styles.nome}>{item}</Text>

              <Text style={styles.pedido}>
                Pedido: {pedidos?.[item] ?? 'Sem pedido'}
              </Text>
            </View>

            <TouchableOpacity
              style={[
                styles.botao,
                entregues[item] && styles.entregue,
              ]}
              onPress={() => toggleEntrega(item)}
            >
              <Text style={styles.botaoText}>
                {entregues[item] ? 'Entregue' : 'Marcar'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },

  voltarBtn: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },

  voltarText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },

  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  pedido: {
    marginTop: 4,
    color: '#555',
  },

  botao: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },

  entregue: {
    backgroundColor: '#28A745',
  },

  botaoText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
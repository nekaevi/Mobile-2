import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Link } from 'expo-router';

const formas = [
  { id: '1', nome: 'Círculo', rota: '/(formas)/circulo', descricao: 'Calcule usando o raio' },
  { id: '2', nome: 'Quadrado', rota: '/(formas)/quadrado', descricao: 'Calcule usando o lado' },
  { id: '3', nome: 'Retângulo', rota: '/(formas)/retangulo', descricao: 'Calcule usando base e altura' },
  { id: '4', nome: 'Triângulo', rota: '/(formas)/triangulo', descricao: 'Calcule usando base e altura' },
];

const FormaItem = ({ item }: { item: typeof formas[0] }) => (
  <Link href={item.rota} asChild>
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.nome}</Text>
      <Text style={styles.cardDesc}>{item.descricao}</Text>
    </View>
  </Link>
);

export default function Formas() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione uma forma geométrica</Text>
      
      <FlatList
        data={formas}
        renderItem={({ item }) => <FormaItem item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6200ee',
    marginBottom: 5,
  },
  cardDesc: {
    fontSize: 14,
    color: '#666',
  },
});
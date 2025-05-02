import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';

const formulas = [
  { id: '1', text: 'Área = lado × lado' },
  { id: '2', text: 'Perímetro = 4 × lado' },
];

export default function Quadrado() {
  const [lado, setLado] = useState('');
  const [resultados, setResultados] = useState<{label: string; value: string}[]>([]);

  const calcular = () => {
    const l = parseFloat(lado);
    if (!isNaN(l)) {
      const area = (l * l).toFixed(2);
      const perimetro = (4 * l).toFixed(2);
      
      setResultados([
        { label: 'Área', value: area },
        { label: 'Perímetro', value: perimetro }
      ]);
    }
  };

  const renderFormula = ({ item }: { item: typeof formulas[0] }) => (
    <Text style={styles.formula}>{item.text}</Text>
  );

  const renderResultado = ({ item }: { item: {label: string, value: string} }) => (
    <Text style={styles.resultText}>{item.label}: {item.value}</Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cálculo do Quadrado</Text>
      
      <FlatList
        data={formulas}
        renderItem={renderFormula}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        ListHeaderComponent={
          <>
            <TextInput
              style={styles.input}
              placeholder="Digite o lado"
              keyboardType="numeric"
              value={lado}
              onChangeText={setLado}
            />
            
            <TouchableOpacity style={styles.button} onPress={calcular}>
              <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>
          </>
        }
      />
      
      {resultados.length > 0 && (
        <View style={styles.resultContainer}>
          <FlatList
            data={resultados}
            renderItem={renderResultado}
            keyExtractor={(item, index) => index.toString()}
            scrollEnabled={false}
          />
        </View>
      )}
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
  formula: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: 'white',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  resultContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#e1f5fe',
    borderRadius: 8,
  },
  resultText: {
    fontSize: 16,
    color: '#01579b',
    marginBottom: 5,
  },
});
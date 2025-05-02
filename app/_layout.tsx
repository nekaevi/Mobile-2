import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Calculadora Geométrica' }} />
      <Stack.Screen name="formas" options={{ title: 'Selecione a Forma' }} />
      <Stack.Screen name="(formas)/circulo" options={{ title: 'Círculo' }} />
      <Stack.Screen name="(formas)/quadrado" options={{ title: 'Quadrado' }} />
      <Stack.Screen name="(formas)/retangulo" options={{ title: 'Retângulo' }} />
      <Stack.Screen name="(formas)/triangulo" options={{ title: 'Triângulo' }} />
    </Stack>
  );
}
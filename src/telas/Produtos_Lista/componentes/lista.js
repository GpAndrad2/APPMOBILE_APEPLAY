import React from 'react';
import { View, ScrollView, FlatList, StyleSheet, Text, Image } from 'react-native';
import { Card } from 'react-native-paper';

const produtos = [
  { id: 1, nome: 'Camiseta', preco: 20, foto: require('../../../../assets/macaco.png') },
  { id: 2, nome: 'Pantalones', preco: 30, foto: require('../../../../assets/macaco.png') },
  { id: 3, nome: 'Zapatos', preco: 50, foto: require('../../../../assets/macaco.png') },
  { id: 4, nome: 'Zapatos', preco: 50, foto: require('../../../../assets/macaco.png') },
  // Adicione mais produtos conforme necessário
];
const ProdutosLista = () => {
  const renderProduto = ({ item }) => (
    <View style={styles.produtoContainer}>
      <Card>
        <Card.Cover source={item.foto} />
        <Card.Title title={item.nome} subtitle={`R$ ${item.preco}`} />
      </Card>
    </View>
  );
  return <View style={styles.container}>
      <Text style={styles.titulo}>Produtos</Text>
      <FlatList
        contentContainerStyle={styles.listaContainer} // Estilo para o conteúdo da lista
        data={produtos}
        renderItem={renderProduto}
        keyExtractor={produtos.id}
        //keyExtractor={item => item.id.toString()}
        numColumns={2} // Define o número de colunas para 2
      />
    </View>

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20, // Adiciona margem superior para os produtos
  },
  listaContainer: {
    padding: 10, // Adiciona preenchimento ao redor da lista
  },
  produtoContainer: {
    flex: 1,
    padding: 10,
  },
});

export default ProdutosLista;

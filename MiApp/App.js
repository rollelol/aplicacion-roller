import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

const App = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('https://miapp.azurewebsites.net/usuarios')
      .then(response => response.json())
      .then(data => setUsuarios(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lista de Usuarios</Text>
      <FlatList 
        data={usuarios} 
        keyExtractor={item => item.ID.toString()} 
        renderItem={({ item }) => <Text>{item.Nombre}</Text>} 
      />
    </View>
  );
};

export default App;

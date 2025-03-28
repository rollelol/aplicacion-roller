import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

const App = () => {
  const [Usuarios, setUsuarios] = useState<{ ID: number; Nombre: string; Correo: string}[]>([]);

  useEffect(() => {
    fetch('http://192.168.1.60:3000/usuarios')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setUsuarios(data))
      .catch(error => console.error("Error al obtener los usuarios:", error));
  }, []);

  return ( // ✅ AHORA SÍ HAY RETURN
    <View>
      <Text>Lista de Usuarios</Text>
      {Usuarios.length === 0 ? (
        <Text>Cargando datos...</Text>
      ) : (
        <FlatList
          data={Usuarios}
          keyExtractor={(item) => item.ID.toString()}
          renderItem={({ item }) => (
            <Text>{item.Nombre} - {item.Correo}</Text>
          )}
        />
      )}
    </View>
  );
};

export default App;

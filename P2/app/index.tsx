import { useState } from 'react';
import { TheCatAPI } from "@thatapicompany/thecatapi"
import { StyleSheet, Text, View, Pressable, FlatList, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type Gatos = {
  id: string;
  url: string;
  limit?: number;
}

const { API_KEY } = process.env;

export default function App() {
  const theCatAPI = `https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}&limit=5`
  const [gatos, setGatos] = useState<Gatos[]>([]);

  const gatinhosFofos = async () => {

    const fotos = await fetch(theCatAPI);
    const data = await fotos.json();
    const gatos = data.slice(0, 5);

    setGatos(gatos);

    console.log(gatos);
    console.log(theCatAPI)
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Carrossel de gatinhos fofos :)</Text>
      <Pressable
        style={styles.button}
      >
        <Text style ={styles.text}>Oi, gatinhos!</Text>
      </Pressable>

      <FlatList
        style={styles.list}
        renderItem={gatos => (
        <View>

        </View>
        )}
      >
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'Linen',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },

  titulo: {
    fontSize: 20,
    marginBottom: 3,
    color: 'indigo',
    fontFamily: 'PathwayGothicOne',
    borderBottomWidth: 2,
    borderBottomColor: '#9370DB',
  },

  button: {
    borderColor: '#9370DB',
    borderWidth: 2,
    borderRadius: 4,
    marginTop: 15,
    width: 100,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'arial',
    marginBottom: 20,
  },

  list: {
    borderWidth: 2,
    borderColor: '#9370DB',
    borderRadius: 4,
    width: '80%',
    padding: 10,
  },

  imagem: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  
  text: {
    color: 'indigo',
    fontFamily: 'PathwayGothicOne',

  }

});
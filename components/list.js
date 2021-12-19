import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { REACT_API_KEY } from "@env";

export default function MovieList(props) {
  const tmdb_logo = require("../assets/tmdb.png");
  // const tmdb_logo = { uri: 'https://reactjs.org/logo-og.png' }
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const movielicked = (movie) => {
    props.navigation.navigate("Detail", { movie: movie, title: movie.title });
  };

  return (
    <View style={styles.container}>
      <Image
        source={tmdb_logo}
        style={{ width: "100%", height: 130, margin: 20, alignSelf: "center" }}
        resizeMode="contain"
      />
      <FlatList
        data={movies}
        style={{ flex: 1 }}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => movielicked(item)}>
            <View style={styles.item}>
              <Text style={styles.itemText}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        style={{ marginBottom: 10 }}
      />
    </View>
  );

  function fetchData() {
    setMovies([]);
    for (let id = 1; id < 100; id++) {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${REACT_API_KEY}&language=ru`,
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((jsonResponse) => {
          if (jsonResponse.title) {
            setMovies((prevArray) => [...prevArray, jsonResponse]);
          }
        })
        .catch((error) => console.log(error));
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    height: 50,
    borderWidth: 0.5,
    borderColor: "#01b4e4",
  },
  itemText: {
    color: "#0d253f",
    fontSize: 15,
  },
});

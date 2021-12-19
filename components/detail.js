import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar, faCircle, faStack } from '@fortawesome/free-solid-svg-icons';

export default function Detail(props) {

  const movie = props.navigation.getParam('movie', null)
  const stars = [...Array(10).keys()]

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}` }}
        style={{ flex: 1, width: 'auto', height: '100%' }}
        resizeMode='contain'
      />

      <View style={styles.starContainer}>
        <Text>{movie.vote_average}</Text>
        {stars.map((star, index) => {
          return <FontAwesomeIcon key={index} style={movie.vote_average > star ? styles.ratedStars : styles.disableStars} icon={faStar} size={20} />
        })}
      </View>
      <Text style={styles.numberOfVotes}>Votes:{movie.vote_count}</Text>

      <ScrollView
        contentContainerStyle={{ padding: 20 }}
        style={styles.overview}>
        <Text style={{ color: 'white' }}>{movie.overview}</Text>
      </ScrollView>
    </View>
  );
}

Detail.navigationOptions = screenProps => ({
  title: screenProps.navigation.getParam('title'),
  headerStyle: {
    backgroundColor: '#90cea1'
  },
  headerTintColor: '#0d253f',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerRight: () =>
    <Button title='Edit' color='#90cea1' onPress={() => alert('This is a button!')} />
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headline: {
    fontSize: 40,
    color: '#0d253f',
    width: '100%',
    marginTop: 5,
    textAlign: 'center',
  },
  overview: {
    flex: 2,
    backgroundColor: '#0d253f',
    opacity: 0.9
  },
  starContainer: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  ratedStars: {
    color: '#01b4e4',

  },
  disableStars: {
    color: '#0d253f'
  },
  numberOfVotes: {
    textAlign: 'center',
    color: '#0d253f'
  }
});
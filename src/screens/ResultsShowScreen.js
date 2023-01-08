import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');
  const searchDetail = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    searchDetail(id);
  }, []);
  if (!result) {
    return null;
  }
  return (
    <View>
      <Text>
        {result.name} - {result.title}
      </Text>

      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return (
            <View>
              <Image style={styles.image} source={{ uri: item }} />
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 150
  }
});
export default ResultsShowScreen;

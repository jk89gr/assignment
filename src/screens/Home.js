import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getCompanies } from "../api/index"

const Home = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    getCompanies()
      .then(data => setData(data["content"]))
      .catch(err => console.err(err))
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <View style={{ padding: 5 }}>
            <Text style={{ fontWeight: "bold", marginBottom: 5 }}>{item.name}</Text>
            <Text>Company size: {item.company_size}</Text>
            <Text>Company type: {item.company_type}</Text>
            <Text>Founded: {item.founded}</Text>
            <Text>Website: {item.website}</Text>
            <Text>Location: {item.located_at}</Text>
            <Text>ID: {item.id}</Text>
            <Text>Image URL: {item.image_url}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

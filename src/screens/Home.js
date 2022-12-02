import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getCompanies } from "../api/index"
import { useNavigation } from "@react-navigation/native";

const Home = () => {

  const [data, setData] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    getCompanies()
      .then(data => setData(data["content"]))
      .catch(err => console.err(err))
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.companyName}>{item.name}</Text>
            <Text>Company size: {item.company_size}</Text>
            <Text>Company type: {item.company_type}</Text>
            <Text>Founded: {item.founded}</Text>
            <Text>Website: {item.website}</Text>
            <Text>Location: {item.located_at}</Text>
            <Text>ID: {item.id}</Text>
            <Text>Image URL: {item.image_url}</Text>
            <Button
              onPress={() => navigation.navigate("Settings", {
                id: item.id,
                name: item.name,
                company_size: item.company_size,
                company_type: item.company_type,
                founded: item.founded,
                website: item.website,
                located_at: item.located_at,
                image_url: item.image_url
              })}
              title="Edit"
            />
          </View>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#FFFFFF"
  },
  item: {
    paddingVertical: 5
  },
  companyName: {
    fontWeight: "bold",
    marginBottom: 5
  }
});

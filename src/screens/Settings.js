import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import React, { useState } from 'react';

const Settings = ({ route }) => {

  const {
    id,
    name,
    company_size,
    company_type,
    founded,
    website,
    located_at,
    image_url
  } = route.params;

  const [company, setCompany] = useState({
    "name": name,
    "company_size": company_size,
    "company_type": company_type,
    "founded": founded,
    "website": website,
    "located_at": located_at,
    "image_url": image_url,
  });

  return (
    <View
      style={styles.container}>
      <View style={styles.item}>
        <Text>Name</Text>
        <TextInput
          placeholder={name}
          value={company.name}
          onChange={e => setCompany({ ...company, name: e.target.value })}
        />
      </View>
      <View style={styles.item}>
        <Text>Company size</Text>
        <TextInput
          placeholder={company_size}
          value={company.company_size}
          onChange={e => setCompany({ ...company, company_size: e.target.value })}
        />
      </View>
      <View style={styles.item}>
        <Text>Company type</Text>
        <TextInput
          placeholder={company_type}
          value={company.company_type}
          onChange={e => setCompany({ ...company, company_type: e.target.value })}
        />
      </View>
      <View style={styles.item}>
        <Text>Founded</Text>
        <TextInput
          placeholder={founded}
          value={company.founded}
          onChange={e => setCompany({ ...company, founded: e.target.value })}
        />
      </View>
      <View style={styles.item}>
        <Text>Website</Text>
        <TextInput
          placeholder={website}
          value={company.website}
          onChange={e => setCompany({ ...company, website: e.target.value })}
        />
      </View>
      <View style={styles.item}>
        <Text>Location</Text>
        <TextInput
          placeholder={located_at}
          value={company.located_at}
          onChange={e => setCompany({ ...company, located_at: e.target.value })}
        />
      </View>
      <View style={styles.item}>
        <Text>Image URL</Text>
        <TextInput
          placeholder={image_url}
          value={company.image_url}
          onChange={e => setCompany({ ...company, image_url: e.target.value })} />
      </View>

      <Button
        onPress={() => {
          console.debug("Save");
          console.debug("Payload:", company)
        }}
        title="Save"
      />

    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#FFFFFF"
  },
  item: {
    paddingVertical: 15,
    alignSelf: "flex-start"
  }
});

import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { CITATIONS } from '../shared/citations';

const FeaturedItem = ({ item }) => {
  if (item) {
    return (
      <Card>
        <Text style={{ fontSize: 22, textAlign: 'center' }}>
          Citation Repository
        </Text>
        <Text style={{ margin: 20, alignItems: 'center' }}>
          Licences like those offered by Creative Commons can convert
          Copyrighted images from "All Rights Reserved" to "Some Rights
          Reserved." This site includes a curated list of images with their
          Title, Creator,Source, and License information, and we highly suggest
          that you visit Creative Commons' great site for information about
          citation rules!{' '}
        </Text>
        <Card.Divider />
        <Card.Title>{item.title}</Card.Title>

        <Card.Image
          source={item.image}
          style={{ width: '100%', padding: 0, margin: 0 }}
          resizeMode='contain'
        ></Card.Image>
        <>
          <View
            style={{
              justifyContent: 'center',
              flex: 1,
              width: '100%',
              padding: 0,
              margin: 0,
            }}
            resizeMode='contain'
          ></View>
        </>
        <Text style={{ margin: 5, paddingTop: 10, justifyContent: 'center' }}>
          Creator: {item.creator}
        </Text>
        <Text style={{ margin: 5 }}>Source: {item.source}</Text>
        <Text style={{ margin: 5 }}>License: {item.license}</Text>
        <Text style={{ margin: 5 }}>{item.description}</Text>
      </Card>
    );
  }
  return <View />;
};

const HomeScreen = () => {
  const [citations, setCitations] = useState(CITATIONS);

  //const featCitation = citations.find((item) => item.title);
  const featCitation = citations[Math.floor(Math.random() * citations.length)];

  return (
    <View>
      <FeaturedItem item={featCitation} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 0,
    margin: 0,
  },
});

export default HomeScreen;

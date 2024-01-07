import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderCitation = ({ citation }) => {
  if (citation) {
    return (
      <Card>
        <Card.Title>{citation.title}</Card.Title>
        <Card.Divider />
        <Card.Image
          source={citation.image}
          style={{ width: '100%', padding: 0, margin: 0 }}
          resizeMode='contain'
        ></Card.Image>
        <Text style={{ margin: 5, justifyContent: 'center' }}>
          Title: {citation.title}
        </Text>
        <Text style={{ margin: 5 }}>Source: {citation.source}</Text>
        <Text style={{ margin: 5 }}>License: {citation.license}</Text>
        <Text style={{ margin: 5 }}>{citation.sourceUrl}</Text>
        <Text style={{ margin: 5 }}>{citation.licenseUrl}</Text>
        <Text style={{ margin: 5 }}>
          Additional Notes/Derived From: {citation.derivedFrom}
        </Text>
      </Card>
    );
  }
  return <View />;
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 0,
    margin: 0,
  },
});

export default RenderCitation;

import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderCitation = ({ citation }) => {
  if (citation) {
    return (
      <Card containerStyle={styles.cardContainer}>
        <Card.Image source={citation.image}>
          {/* <View style={{ justifyContent: 'center', flex: 1 }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 20,
              }}
            >
              {citation.title}
            </Text>
          </View> */}
        </Card.Image>
        <Text style={{ margin: 5, justifyContent: 'center' }}>
          {citation.title}
        </Text>
        <Text style={{ margin: 5 }}>{citation.creator}</Text>
      </Card>
    );
  }
  return <View />;
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 0,
    margin: 0,
    marginBottom: 20,
  },
});

export default RenderCitation;

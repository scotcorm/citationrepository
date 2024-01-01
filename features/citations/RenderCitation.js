import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderCitation = ({ citation }) => {
  if (citation) {
    return (
      <Card containerStyle={{ padding: 0 }}>
        <Card.Image source={citation.image}>
          <View style={{ justifyContent: 'center', flex: 1 }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 20,
              }}
            >
              {citation.name}
            </Text>
          </View>
        </Card.Image>
        <Text style={{ margin: 20 }}>{citation.description}</Text>
      </Card>
    );
  }
  return <View />;
};

export default RenderCitation;

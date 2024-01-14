import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { Linking } from 'react-native';

const ContactScreen = () => {
  return (
    <ScrollView>
      <Card wrapperStyle={{ margin: 20 }}>
        <Card.Title>Contact Information</Card.Title>
        <Card.Divider />
        <Text>See my github repository:</Text>
        <Text
          style={{ color: 'blue' }}
          onPress={() =>
            Linking.openURL('https://github.com/scotcorm?tab=repositories')
          }
        >
          Click here to visit github.
          {'\n'}
          {'\n'}
        </Text>
        <Text>See my netlify repository:</Text>
        <Text
          style={{ color: 'blue' }}
          onPress={() =>
            Linking.openURL('https://app.netlify.com/teams/scotcorm/sites')
          }
        >
          Click Here to visit netlify.
          {'\n'}
          {'\n'}
        </Text>
        <Text style={{ marginBottom: 10 }}>U.S.A.</Text>

        <Text
          style={{ color: 'blue' }}
          onPress={() =>
            Linking.openURL('https://www.linkedin.com/in/scott-cormier-mlis/')
          }
        >
          Click here to contact me on Linked In!
        </Text>
      </Card>
    </ScrollView>
  );
};

export default ContactScreen;

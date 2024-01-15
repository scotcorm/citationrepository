import { ScrollView, Text, Linking } from 'react-native';
import { Card, ListItem, Avatar } from 'react-native-elements';
import { PARTNERS } from '../shared/partners';
import { useState } from 'react';

const Mission = () => {
  return (
    <ScrollView>
      <Card>
        <Card.Title>Our Mission</Card.Title>
        <Card.Divider />
        <Text style={{ margin: 10 }}>
          We present a curated database of great Open Access Images, focusing on
          images that have Creative Commons CC0 or CCBY licenses, and are easy
          to use and reuse, as long as we follow the rules and give credit where
          credit is due. Great "Best Practices" information is available on
          Creative Commons' site or at their Wikipedia page: {'\n'}
          <Text
            style={{ color: 'blue' }}
            onPress={() =>
              Linking.openURL(
                'https://wiki.creativecommons.org/wiki/best_practices_for_attribution'
              )
            }
          >
            Best practices for attribution
          </Text>
          .
        </Text>
      </Card>
    </ScrollView>
  );
};

const AboutScreen = () => {
  const [partners, setPartners] = useState(PARTNERS);
  return (
    <ScrollView>
      <Mission />
      <Card>
        <Card.Title>Recommended Sites</Card.Title>
        <Card.Divider />
        {partners.map((partner) => (
          <ListItem key={partner.id}>
            <Avatar rounded source={partner.image} />
            <ListItem.Content>
              <ListItem.Title>{partner.name}</ListItem.Title>
              <ListItem.Subtitle>{partner.description}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </Card>
    </ScrollView>
  );
};

export default AboutScreen;

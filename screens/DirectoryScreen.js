import { useState } from 'react';
import { FlatList, ScrollView } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { CITATIONS } from '../shared/citations';

const DirectoryScreen = ({ navigation }) => {
  const [citations, setCitations] = useState(CITATIONS);

  const renderDirectoryItem = ({ item: citation }) => {
    return (
      <ScrollView>
        <ListItem
          onPress={() => navigation.navigate('CitationInfo', { citation })}
        >
          <Avatar source={citation.image} rounded />
          <ListItem.Content>
            <ListItem.Title>{citation.title}</ListItem.Title>
            <ListItem.Subtitle>{citation.source}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </ScrollView>
    );
  };
  return (
    <FlatList
      data={citations}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default DirectoryScreen;

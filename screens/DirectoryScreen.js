import { useState } from 'react';
import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { CITATIONS } from '../shared/citations';

const DirectoryScreen = ({ navigation }) => {
  const [citations, setCitations] = useState(CITATIONS);

  const renderDirectoryItem = ({ item: citation }) => {
    return (
      <ListItem
        onPress={() => navigation.navigate('CitationInfo', { citation })}
      >
        <Avatar source={citation.image} rounded />
        <ListItem.Content>
          <ListItem.Title>{citation.title}</ListItem.Title>
          <ListItem.Subtitle>{citation.source}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
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

import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

const DirectoryScreen = (props) => {
  const renderDirectoryItem = ({ item: citation }) => {
    return (
      <ListItem onPress={() => props.onPress(citation.id)}>
        <Avatar source={citation.image} rounded />
        <ListItem.Content>
          <ListItem.Title>{citation.title}</ListItem.Title>
          <ListItem.Subtitle>{citation.license}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };
  return (
    <FlatList
      data={props.citations}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default DirectoryScreen;

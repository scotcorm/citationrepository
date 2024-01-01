import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

const DirectoryScreen = (props) => {
  const renderDirectoryItem = ({ item: citation }) => {
    return (
      <ListItem>
        <Avatar source={citation.image} rounded />
        <ListItem.Content>
          <ListItem.Title>{citation.name}</ListItem.Title>
          <ListItem.Subtitle>{citation.description}</ListItem.Subtitle>
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

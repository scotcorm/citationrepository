import { useState } from 'react';
import { View } from 'react-native';
import { CITATIONS } from '../shared/citations';
import CitationInfoScreen from './CitationInfoScreen';
import DirectoryScreen from './DirectoryScreen';

const Main = () => {
  const [citations, setCitations] = useState(CITATIONS);
  const [selectedCitationId, setSelectedCitationId] = useState();

  return (
    <View style={{ flex: 1 }}>
      <DirectoryScreen
        campsites={citations}
        onPress={(citationId) => setSelectedCitationId(citationId)}
      />
      <CitationInfoScreen
        citation={
          citations.filter((citation) => citation.id === selectedCitationId)[0]
        }
      />
    </View>
  );
};

export default Main;

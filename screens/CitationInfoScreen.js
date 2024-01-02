import RenderCitation from '../features/citations/RenderCitation';

const CitationInfoScreen = ({ route }) => {
  const { citation } = route.params;
  return <RenderCitation citation={citation} />;
};

export default CitationInfoScreen;

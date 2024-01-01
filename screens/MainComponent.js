import { useState } from 'react';
import { CITATIONS } from '../shared/citations';
import DirectoryScreen from './DirectoryScreen';

const Main = () => {
  const [citations, setCitations] = useState(CITATIONS);

  return <DirectoryScreen citations={citations} />;
};

export default Main;

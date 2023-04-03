import { Text, useColorScheme } from 'react-native';

import { nameBoxStyles } from '../styles';

const NameBox: React.FC = () => {
  const scheme = useColorScheme();

  return (
    <Text
      style={[
        nameBoxStyles.myName,
        {
          color: scheme === 'dark' ? '#fff' : '#000',
        },
      ]}
    >
      Created by Fadi Hanna
    </Text>
  );
};

export default NameBox;

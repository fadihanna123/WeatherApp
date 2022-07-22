import React from 'react';
import { Text } from 'react-native';

import { nameBoxStyles } from '../styles';

const NameBox: React.FC = () => (
  <Text style={nameBoxStyles.myName}>Created by Fadi Hanna</Text>
);

export default NameBox;

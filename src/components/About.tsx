import React from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { aboutStyles } from '../styles';

const About = () => {
  const scheme = useColorScheme();

  return (
    <View>
      <Text
        style={[
          aboutStyles.aboutTextBig,
          { color: scheme === 'dark' ? '#fff' : '#000' },
        ]}
      >
        FADI HANNA
      </Text>
      <Text
        style={[
          aboutStyles.aboutTextSmall,
          { color: scheme === 'dark' ? '#fff' : '#000' },
        ]}
      >
        Thanks for using this app.
      </Text>
    </View>
  );
};

export default About;

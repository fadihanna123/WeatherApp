import { StyleSheet } from 'react-native';

export const weatherDataStyles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  tempImg: {
    justifyContent: 'center',
    width: '50%',
    height: '100%',
    margin: 10,
  },
  info: {
    margin: 30,
  },
  cityname: {
    fontSize: 18,
  },
  tempInfo: {
    fontSize: 40,
  },
  decInfo: {
    fontSize: 20,
  },
  errorStyle: { textAlign: 'center', fontSize: 30 },
});

import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { useSelector } from 'react-redux';

import { ViewSearchBoxReducerTypes } from '../models';
import { styles } from '../styles/AppStyles';
import NameBox from './NameBox';
import WeatherData from './WeatherData';
import WeatherForm from './WeatherForm';

const SearchBox: React.FC = () => {
  const viewSearchBox = useSelector(
    (state: ViewSearchBoxReducerTypes) => state.viewSearchBoxReducer
  );

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <WeatherForm />
        {!viewSearchBox && <WeatherData />}
        <NameBox />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchBox;

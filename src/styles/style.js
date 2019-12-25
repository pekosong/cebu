import colors from './colors';
import sizes from './sizes';
import {Platform} from 'react-native';

const style = {
  inputRow: {
    marginBottom: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.6,
    borderBottomColor: colors.gray2,
  },
  full: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? sizes.base * 3 : sizes.base * 2.8,
    paddingHorizontal: sizes.padding,
  },
  appBar: {
    flex: 0,
    height: 90,
    paddingTop: Platform.OS === 'ios' ? sizes.base * 4 : sizes.base * 3.8,
    paddingHorizontal: sizes.padding,
  },

  shop: {
    categories: {
      marginVertical: 10,
      paddingHorizontal: sizes.padding,
    },
  },
};

export default style;

import colors from './colors';
import sizes from './sizes';
import {Platform} from 'react-native';

const style = {
  inputRow: {
    marginBottom: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.6,
    borderBottomColor: colors.gray2,
  },
  full: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? null : sizes.base * 3,
    marginBottom: sizes.base,
    paddingHorizontal: sizes.padding,
  },
  mainHeader: {
    flex: 0,
    paddingTop: Platform.OS === 'ios' ? sizes.base * 4.2 : sizes.base * 4,
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

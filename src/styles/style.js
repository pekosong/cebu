import colors from './colors';
import sizes from './sizes';
import {Platform} from 'react-native';

const style = {
  inputRow: {
    paddingBottom: 20,
    marginTop: 20,
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
    marginTop: Platform.OS === 'ios' ? null : sizes.base * 3,
    marginBottom: sizes.base,
    paddingHorizontal: sizes.padding,
  },
  mainHeader: {
    marginTop: Platform.OS === 'ios' ? sizes.base * 4.2 : sizes.base * 4,
    marginBottom: sizes.base,
    paddingHorizontal: sizes.padding,
  },
  shop: {
    content: {
      marginBottom: 15,
    },
    categories: {
      marginVertical: 10,
    },
  },
};

export default style;

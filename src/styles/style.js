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
    marginTop: Platform.OS === 'ios' ? sizes.base : sizes.base * 3.8,
    paddingHorizontal: sizes.padding,
  },
  scrollTab: {
    flex: 0,
    paddingTop: Platform.OS === 'ios' ? sizes.base : sizes.base * 3.8,
    paddingHorizontal: sizes.padding,
    backgroundColor: colors.white,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.gray2,
  },
  shop: {
    categories: {
      marginVertical: 10,
      paddingHorizontal: sizes.padding,
    },
  },
  shadow: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
};

export default style;

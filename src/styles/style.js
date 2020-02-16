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
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 46,
    paddingHorizontal: sizes.padding,
    zIndex: 1,
    backgroundColor: 'white',
    paddingVertical: 3,
  },
  scrollTab: {
    flex: 0,
    paddingHorizontal: sizes.padding,
    backgroundColor: colors.white,
    paddingBottom: 10,
    marginTop: 10,
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
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
};

export default style;

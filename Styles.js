import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,

  elevation: 4,
};

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '200',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  input: {
    width: width - 120,
  },
  button: {
    backgroundColor: '#0482f7',
    height: 36,
    paddingHorizontal: 4,
    borderRadius: 4,
    justifyContent: 'center',
    ...shadow,
  },
  buttonText: {
    fontWeight: '500',
    color: 'white',
  },
  segmentedControlWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 20,
    backgroundColor: '#E5E5EA',
    paddingVertical: 12,
  },
  textWrapper: {
    flex: 1,
    elevation: 9,
    paddingHorizontal: 5,
  },
  textStyles: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
  },
  segmentedControl: {
    ...StyleSheet.absoluteFill,
    position: 'absolute',
    top: 0,
    marginVertical: 2,
    marginHorizontal: 2,
    borderRadius: 8,
    backgroundColor: 'white',
    ...shadow,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    marginTop: 8,
    paddingHorizontal: 4,
    marginHorizontal: 4,
    borderRadius: 4,
    backgroundColor: 'white',
    ...shadow,
  },
  listItemTitle: {
    fontWeight: '200',
    width: width - 120,
  },
  icon: {
    width: 25,
    height: 25,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButton: {
    width: 100,
    marginBottom: 5,
    alignItems: 'center',
  },
});

import {Dimensions, StyleSheet} from 'react-native';

var fullWidth = Dimensions.get('window').width;
var fullHeight = Dimensions.get('window').height;
var color1 = '#E14D2A';
var color2 = '#FD841F';
var color3 = '#3E6D9C';
var color4 = '#FEBE8C';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'notoserif',
  },
  headerContainer: {
    backgroundColor: color1,
    width: fullWidth,
    height: 0.08 * fullHeight,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  headerText: {
    color: color4,
    fontSize: 0.04 * fullHeight,
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 1,
    backgroundColor: color2,
    width: fullWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formTitleInput: {
    width: 0.8 * fullWidth,
    height: 0.075 * fullHeight,
    backgroundColor: color4,
    borderRadius: 0.01 * fullHeight,
    padding: 0.01 * fullHeight,
    marginBottom: 0.015 * fullHeight,
    color: color1,
    fontSize: 0.045 * fullWidth,
    fontWeight: 'bold',
  },
  formDescriptionInput: {
    textAlignVertical: 'top',
    width: 0.8 * fullWidth,
    height: 0.15 * fullHeight,
    backgroundColor: color4,
    borderRadius: 0.01 * fullHeight,
    padding: 0.01 * fullHeight,
    marginBottom: 0.015 * fullHeight,
    color: color1,
    fontSize: 0.04 * fullWidth,
    fontWeight: 'bold',
  },
  formButton: {
    backgroundColor: color1,
    width: 0.9 * fullWidth,
    height: 0.075 * fullHeight,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0.01 * fullHeight,
  },
  formButtonText: {
    color: color4,
    fontSize: 0.03 * fullHeight,
    fontWeight: 'bold',
  },
  flatListContainer: {
    flex: 1,
    backgroundColor: color3,
    width: fullWidth,
    height: fullHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noteContainer: {
    backgroundColor: color4,
    width: 0.8 * fullWidth,
    height: 0.34 * fullHeight,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius: 0.01 * fullHeight,
    marginBottom: 0.015 * fullHeight,
    marginTop: 0.015 * fullHeight,
    marginRight: 0.02 * fullHeight,
    marginLeft: 0.03 * fullHeight,
  },
  noteTitle: {
    color: color1,
    fontSize: 0.035 * fullHeight,
    fontWeight: 'bold',
    maxHeight: 0.06 * fullHeight,
    padding: 0.01 * fullHeight,
  },
  noteDescription: {
    color: color2,
    fontSize: 0.025 * fullHeight,
    fontWeight: 'bold',
    maxHeight: 0.13 * fullHeight,
    padding: 0.01 * fullHeight,
  },
});

export default styles;

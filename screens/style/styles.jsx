import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    height: '100%',
  },
  center:{
    flex: 1,
    gap: 20,
    padding: 20,
    alignSelf: 'center',
  },
  contentTextStyle: {
    padding: 5,
    textAlignVertical: 'center',
    minHeight: 50,
    backgroundColor: '#969',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },
  content:{
    padding: 10,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'rgba(120, 100, 161, .7)',
    borderRadius: 5,
  },
  text: {
    fontSize: 14,
    padding: 2,
    paddingLeft: 12,
  },
  title: {
    marginTop: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center'
  },
  footer: {
    backgroundColor: '#888',
    paddingHorizontal: 25,
    padding: 20,
  },
  list: {
    backgroundColor: '#969',
    padding: 10,
    margin: 10,
    width: 'auto',
    borderRadius: 10,
  },
  titleList: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 5,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  textList: {
    color: 'white',
    fontSize: 18,
    textAlign: 'left',
    margin: 2,
  },
  boxBattery: {
    width: 300,
    height: 50,
    borderRadius: 10,
  },

  // ssss
  containerScanner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dataContainerScanner: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  dataTextScanner: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default styles;
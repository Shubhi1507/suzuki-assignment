import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    gap: 10,
    padding: 10,
  },
  ItemContainer: {
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    padding: 10,
  },

  id: {
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    flex: 1,
  },
  details: {
    fontStyle: 'italic',
    color: '#808080',
  },
  header: {
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 5,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    zIndex: 2,
  },
  modalView: {
    height:Dimensions.get('screen').height*0.7,
    margin: 20,
    paddingVertical:20,
    backgroundColor: '#f9f9f9',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 15,
    elevation: 2,
    marginVertical: 10,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: 'teal',
    padding:15,
    paddingHorizontal:25,
    borderRadius:10,

  },
  textStyle: {
    color: '#f9f9f9',
    fontWeight: '700',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
  },
});

import { StyleSheet, Platform } from 'react-native';

export const purple = '#292477'
export const gray = '#757575'
export const white = '#fff'
export const red = '#b71845'
export const orange = '#f26f28'
export const blue = '#4e4cb8'
export const lightPurp = '#7c53c3'
export const pink = '#b93fb3'

export default Styles = StyleSheet.create({
    allDeckstitle:{
      fontSize:25,
      color:lightPurp,
      marginTop:15,
      marginBottom:20,
      textAlign:'center'
    },
    DeckItem:{
      backgroundColor:orange,
      flexDirection: 'row',
      marginBottom:20,
      justifyContent:'center',
      width:'100%'
    },
    DeckItemText:{
      fontSize:20,
      color:white,
    },
    NumOfQuestions:{
      fontSize:20,
      color:lightPurp,
      marginBottom:15,
    },
    DeckButton:{
      fontSize:15,
      borderStyle:'solid',
      borderColor:'black',
      backgroundColor:purple,
      borderWidth:1,
      padding:5,
      alignSelf:'center',
      width:'40%',
      marginBottom:10,
    },
    textInput:{backgroundColor:'white',borderColor:'black',borderWidth:1,borderStyle:'solid',width:'50%',alignSelf:'center',marginBottom:20}
  
  })





/*export const styles = StyleSheet.create({
    title: {
        backgroundColor: colors.BLUE,
        color: colors.WHITE,
        fontSize: 24,
        textAlign: 'center',
        padding: 12
    },
    container: {
        flex: 1
    },
    formLabel: {
        fontSize: 16,
        paddingBottom: 6,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 12
    },
    formInput: {
        borderColor: colors.GRAY,
        borderWidth:  Platform.OS === 'ios' ? 1 : 0,
        paddingBottom: 12,
        paddingLeft: 6,
        paddingTop: 12,
        marginLeft: 12,
        marginRight: 12
    },
    button: {
        backgroundColor: colors.BLUE,
        borderRadius: 2,
        margin: 12,
        paddingBottom: 12,
        paddingTop: 12
    },
    buttonText: {
        color: colors.WHITE,
        fontSize: 20,
        textAlign: 'center'
    }
});*/
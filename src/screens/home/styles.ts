import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: `#131016`,
      justifyContent:  'center',
      alignItems: 'center',
      width: '100%'
    },
    title: {
      color: '#FFF',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
    },
    description: {
      color: '#6B6B6B',
      fontSize: 18,
      marginBottom: 10
    },

    input: {
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        flex: 1
    },

    buttonText: {
      color: '#FFF',
      fontSize: 30
    },

    button: {
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: '#31CF67',
      justifyContent: 'center',
      alignItems: 'center'
    },
    form: {
      flexDirection: 'row',
      marginBottom: 40,
      width: '90%'
    }
  })
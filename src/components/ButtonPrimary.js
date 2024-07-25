import { StyleSheet, Text, Pressable } from 'react-native'

const ButtonPrimary = ({text}) => {
  return (
    <Pressable style={styles.button}>
    <Text style={styles.textButton}>{text}</Text>
    </Pressable>
  )
}
export default ButtonPrimary;

const styles = StyleSheet.create({
    button:{
        padding: 20,
        backgroundColor: '#3499b3',
        flex: 1,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16
    },
    textButton:{
        color:"white",
        fontSize:16,
        fontWeight:"bold"
      }
})
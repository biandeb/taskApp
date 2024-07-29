import { StyleSheet, Text, Pressable } from 'react-native'

const ButtonPrimary = ({text, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
    <Text style={styles.textButton}>{text}</Text>
    </Pressable>
  )
}
export default ButtonPrimary;

const styles = StyleSheet.create({
    button:{
        padding: 20,
        backgroundColor: '#767f83',
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
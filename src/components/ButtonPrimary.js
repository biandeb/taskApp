import { StyleSheet, Text, Pressable } from 'react-native'

const ButtonPrimary = ({text, onPress, children}) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      {children}
    <Text style={styles.textButton}>{text}</Text>
    </Pressable>
  )
}
export default ButtonPrimary;

const styles = StyleSheet.create({
    button:{
        padding: 15,
        backgroundColor: '#767f83',
        flex: 1,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        flexDirection: 'row',
        gap: 4,
    },
    textButton:{
        color:"white",
        fontSize:16,
        fontWeight:"bold"
      }
})
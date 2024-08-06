import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonPrimary from '../ButtonPrimary'

const CardTask = ({task, handleDeleteTask}) => {
  return (
    <View style={styles.container} key={task.id}>
        <Text style={styles.text}>ID: {task.id}</Text>
        <Text style={styles.text}>Nombre: {task.name}</Text>
        <ButtonPrimary text='Borrar' onPress={() => handleDeleteTask(task.id)} />
    </View>
  )
}
export default CardTask

const styles = StyleSheet.create({
    container:{
        width:'90%',
        backgroundColor: '#3499b3',
        marginHorizontal: '5%',
        marginVertical: 8,
        padding: 13,
        borderRadius: 5
    },
    text:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
    }
})
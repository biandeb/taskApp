import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardTask = ({task}) => {
  return (
    <View style={style.container} key={task.id}>
      <Text style={style.text}>{task.name}</Text>
    </View>
  )
}
export default CardTask

const styles = StyleSheet.create({
    container:{
        width:'80%',
        backgroundColor: 'purple',
        marginHorizontal: '10%',
        marginVertical: 10,
        padding: 20,
        borderRadius: 5
    },
    text:{
        color: 'white',
        fontWeight: 'bold'
    }
})
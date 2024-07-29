import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import uuid from 'react-native-uuid'

import ButtonPrimary from './src/components/ButtonPrimary.js';
import CardTask from './src/components/CardTask.js';
import ModalPrimary from './src/components/ModalPrimary.js';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  const [taskName,setTaskName] = useState("")
    const [tasks, setTasks] = useState([])
    const [visibleModal,setVisibleModal] = useState(false)

    const handleVisibleModal = () => {
      setVisibleModal(!visibleModal)
    }

    const handleAddTask = () => {
      const newTask = {
        id:uuid.v4(),
        name:taskName
      }
      setTasks([...tasks,newTask])
      setTaskName("")
      handleVisibleModal()
    }

  return (
    <>
      <View style={styles.container}>
    <Text style={styles.title}> Lista de tareas
    </Text>
      <View style={styles.containerInput}>
    <TextInput 
    style={styles.input} 
    placeholder='Ingrese una tarea'
    value={taskName}
    onChangeText={setTaskName}
    />
    <ButtonPrimary onPress={handleVisibleModal} text="Agregar">
    <Ionicons name="add-circle-outline" size={24} color="white" />
      </ButtonPrimary> 
      </View>
      <FlatList
      data={tasks}
      keyExtractor={item => item.id}
      renderItem={({item}) => <CardTask task={item} />}
      />
    </View>
    <ModalPrimary 
    text={'¿Desea agregar una tarea?'}
    visible={visibleModal}
    handleVisibleModal={handleVisibleModal}
    handleModal = {handleAddTask}
    />
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop:60,
    flex:1,
  },
  title:{
    fontSize: 28,
    color: '#00556d',
    marginHorizontal: '25%',
  },
  containerInput:{
    flexDirection:"row",
    padding:10
  },
  input:{
    borderColor:"black",
    borderWidth:1,
    padding:5,
    paddingStart:15,
    flex:2,
    margin:10,
    borderRadius:5
  },
  containerTitle:{
    width:"100%",
    flexDirection:"row"
  }
});
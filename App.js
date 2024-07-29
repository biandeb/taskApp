import { StyleSheet, Text, TextInput, View } from 'react-native';
import ButtonPrimary from './src/components/ButtonPrimary';
import CardTask from './src/components/CardTask';

export default function App() {
  return (
      <View style={styles.container}>
    <Text style={styles.title}> Lista de tareas
    </Text>
      <View style={styles.containerInput}>
    <TextInput style={styles.input} placeholder='Ingrese una tarea'
    />
    <ButtonPrimary text="Agregar"/>
      </View>
      <View>
        {tasks.map(task => <CardTask task={task}/>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop:60,
    flex:1,
    alignItems: 'center',
  },
  title:{
    fontSize: 28,
    color: '#00556d',
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
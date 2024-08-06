import { StyleSheet, FlatList} from 'react-native'
import CardTask from './CardTask'


const index = ({tasks, handleDeleteTask}) => {
  return (
    <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardTask task={item} handleDeleteTask={handleDeleteTask} />
          )}
        />
  )
}
export default index
const styles = StyleSheet.create({})
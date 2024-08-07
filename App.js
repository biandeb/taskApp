import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import uuid from "react-native-uuid";

import TasksListContainer from "./src/components/TasksListContainer";
import ModalPrimary from "./src/components/ModalPrimary.js";
import ContainerInput from "./src/components/ContainerInput.js";

export default function App() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [visibleAddTaskModal, setVisibleAddTaskModal] = useState(false);

  const [visibleDeleteTaskModal, setVisibleDeleteTaskModal] = useState(false);
  const [idTaskDelete, setIdTaskDelete] = useState('')

  const handleTasksName = (t) => {
    setTaskName(t);
  };

  const handleVisibleAddTaskModal = () => {
    setVisibleAddTaskModal(!visibleAddTaskModal);
  };

  const handleVisibleDeleteTaskModal = (id='') => {
    setIdTaskDelete(id);
    setVisibleDeleteTaskModal(!visibleDeleteTaskModal);
  };

  const handleAddTask = () => {
    const newTask = {
      id: uuid.v4(),
      name: taskName,
    };
    setTasks([...tasks, newTask]);
    setTaskName("");
    handleVisibleAddTaskModal();
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    handleVisibleDeleteTaskModal();
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}> Lista de tareas</Text>
        <ContainerInput
          taskName={taskName}
          handleVisibleModal={handleVisibleAddTaskModal}
          handleTasksName={handleTasksName}
        />
        <TasksListContainer 
        tasks={tasks} 
        handleVisibleModal={handleVisibleDeleteTaskModal} 
        />
      </View>
      <ModalPrimary
        text={"¿Desea agregar una tarea?"}
        visible={visibleAddTaskModal}
        handleVisibleModal={handleVisibleAddTaskModal}
        handleModal={handleAddTask}
      />
      <ModalPrimary
        text={"¿Desea borrar la tarea?"}
        visible={visibleDeleteTaskModal}
        handleVisibleModal={handleVisibleDeleteTaskModal}
        handleModal= {() => handleDeleteTask(idTaskDelete)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
  },
  title: {
    fontSize: 28,
    color: "#00556d",
    marginHorizontal: "25%",
  },
  containerTitle: {
    width: "100%",
    flexDirection: "row",
  },
});

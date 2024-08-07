import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import uuid from "react-native-uuid";

import TasksListContainer from "./src/components/TasksListContainer";
import ModalPrimary from "./src/components/ModalPrimary.js";
import ContainerInput from "./src/components/ContainerInput.js";

export default function App() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);

  const handleTasksName = (t) => {
    setTaskName(t);
  };

  const handleVisibleModal = () => {
    setVisibleModal(!visibleModal);
  };

  const handleAddTask = () => {
    const newTask = {
      id: uuid.v4(),
      name: taskName,
    };
    setTasks([...tasks, newTask]);
    setTaskName("");
    handleVisibleModal();
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}> Lista de tareas</Text>
        <ContainerInput
          taskName={taskName}
          handleVisibleModal={handleVisibleModal}
          handleTasksName={handleTasksName}
        />
        <TasksListContainer tasks={tasks} handleDeleteTask={handleDeleteTask} />
      </View>
      <ModalPrimary
        text={"¿Desea agregar una tarea?"}
        visible={visibleModal}
        handleVisibleModal={handleVisibleModal}
        handleModal={handleAddTask}
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

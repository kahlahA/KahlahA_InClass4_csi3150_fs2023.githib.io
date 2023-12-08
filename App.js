import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import React, { useState } from 'react';

// any addition imports
import Task from './components/Task';




export default function App() {
  // input area
  const [task, setTask] = useState();
  //to store all tasks
  const [taskItems, setTaskItems] = useState([]);
  //event listener logic for creating a task
  const handleAddTask = () => {
    Keyboard.dismiss()
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  // event listener logic for deleating task
  const completTask = (index) => {
    let copyItems = [...taskItems];
    // remove the specific task as selected by the user
    copyItems.splice(index, 1);
    // update the original array by rewriting it with the copied array
    setTaskItems(copyItems);
  }

  // anothe event handlerto update tasks
  // logic will be simeler to compleatTask()
  // Model

  return (
    <View style={styles.container}>
      {/* List all the to do items */}
      <View styles={styles.taskWrapper}>
       <Text style={styles.sectionTitle}> 
       My To Do Items
       </Text>

        {/* Container or wrapper for the tasks to be rendered */}
        <View style={styles.items}>
          {/*<Task text={"this is task 1"} />*/}
          {taskItems.map ((item, index) => {
            
              return(
              <TouchableOpacity key={index} onPress={() => completTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
              );
              
            })
          }
          
        </View>
      </View>

      {/* User input foe todo tasks */}
      <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={styles.writeTaskWrapper}>

        <TextInput 
        style={styles.input} 
        placeholder={"Add your todo item here"} 
        value='task' 
        onChangeText={(text) => setTask(text)}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text>+</Text>
           {/* <Image source={require('./assets')}></Image> */}
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius:  60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {

  },
});

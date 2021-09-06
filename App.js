/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Modal,
} from 'react-native';
import ListItem from './ListItem';
import SegmentedControl from './SegmentedControl';
import styles from './Styles';

const App = () => {
  const [text, onChangeText] = useState(null);
  const [tabIndex, setTabIndex] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTaskid, setSelectedTaskid] = useState(null);

  const handleTabsChange = index => {
    setTabIndex(index);
  };

  const handleAdd = () => {
    if (text && text.length > 0) {
      setTasks([
        {
          title: text,
          isFavorite: false,
          isComplete: false,
          isEditing: false,
          id: tasks.length + 1,
        },
        ...tasks,
      ]);
      onChangeText(null);
    }
  };

  const handleFavorite = id => {
    const newTasks = tasks.map(task =>
      task.id === id ? { ...task, isFavorite: !task.isFavorite } : task,
    );
    setTasks(newTasks);
  };

  const handleOption = id => {
    setSelectedTaskid(id);
    setModalVisible(true);
  };

  const handleComplete = () => {
    setModalVisible(false);
    const newTasks = tasks.map(task =>
      task.id === selectedTaskid
        ? { ...task, isComplete: !task.isComplete }
        : task,
    );
    setTasks(newTasks);
  };

  const handleDelete = () => {
    setModalVisible(false);
    const newTasks = tasks.filter(task => task.id !== selectedTaskid);
    setTasks(newTasks);
  };

  const handleEdit = () => {
    setModalVisible(false);
    const newTasks = tasks.map(task =>
      task.id === selectedTaskid ? { ...task, isEditing: true } : task,
    );
    setTasks(newTasks);
  };

  const handleSave = (id, updateText) => {
    const newTasks = tasks.map(task =>
      task.id === id ? { ...task, isEditing: false, title: updateText } : task,
    );
    setTasks(newTasks);
  };

  const renderItem = ({ item }) => (
    <ListItem
      item={item}
      onFavorite={handleFavorite}
      onOption={handleOption}
      onSave={handleSave}
    />
  );

  useEffect(() => {
    const newTasks = tasks.filter(task => {
      if (tabIndex === 0) {
        return !task.isComplete;
      }
      if (tabIndex === 1) {
        return task.isComplete;
      }
      if (tabIndex === 2) {
        return task.isFavorite;
      }
    });
    setFilteredTasks(newTasks);
  }, [tasks, tabIndex]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Todos</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="What needs to be done?"
        />
        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Text style={styles.buttonText}>Add new</Text>
        </TouchableOpacity>
      </View>
      <SegmentedControl
        tabs={['New', 'Completed', 'Favourites']}
        currentIndex={tabIndex}
        onChange={handleTabsChange}
        width={Dimensions.get('window').width - 48}
      />
      <FlatList data={filteredTasks} renderItem={renderItem} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={[styles.button, styles.modalButton]}
              onPress={handleEdit}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.modalButton]}
              onPress={handleDelete}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.modalButton]}
              onPress={handleComplete}>
              <Text style={styles.buttonText}>Completed</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default App;

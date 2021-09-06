import React from 'react';
import { Image, Text, TouchableOpacity, View, TextInput } from 'react-native';
import styles from './Styles';

const ListItem = ({ item, onFavorite, onOption, onSave }) => {
  const [text, onChangeText] = React.useState(item.title);
  return !item.isEditing ? (
    <View style={styles.listItem}>
      <Text style={styles.listItemTitle}>{item.title}</Text>
      <TouchableOpacity onPress={() => onFavorite(item.id)}>
        <Image
          style={styles.icon}
          source={
            item.isFavorite
              ? require('./assets/favorites-filled.png')
              : require('./assets/favorites-outline.png')
          }
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onOption(item.id)}>
        <Image style={styles.icon} source={require('./assets/option.png')} />
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="What needs to be done?"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => onSave(item.id, text)}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;

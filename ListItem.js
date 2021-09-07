import React from 'react';
import { Text, TouchableOpacity, View, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faStar as faStarSolid,
  faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import styles from './Styles';

const ListItem = ({ item, onFavorite, onOption, onSave }) => {
  const [text, onChangeText] = React.useState(item.title);
  return !item.isEditing ? (
    <View style={styles.listItem}>
      <Text style={styles.listItemTitle}>{item.title}</Text>
      <TouchableOpacity onPress={() => onFavorite(item.id)}>
        <FontAwesomeIcon
          icon={item.isFavorite ? faStarSolid : faStar}
          color={item.isFavorite ? '#FFBA01' : '#B0B0B3'}
          size={24}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onOption(item.id)}>
        <FontAwesomeIcon icon={faEllipsisV} color={'#B0B0B3'} size={24} />
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

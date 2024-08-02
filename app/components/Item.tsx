import React, {useMemo, useCallback, useEffect} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {PostResponseInterace} from '../interfaces/post.response';
import {styles} from '../styles/styles';

interface ListItemProps {
  item: PostResponseInterace;
  onItemClick: (item: PostResponseInterace) => void;
}

const Item = ({item, onItemClick}: ListItemProps) => {

  const handlePress = useCallback(() => {
    onItemClick(item);
  }, [item.id, onItemClick]);

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.ItemContainer}>
        <Text style={styles.id}>Id : {item.id}</Text>
        <Text style={styles.title}>Title : {item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item;

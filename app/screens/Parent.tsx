import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Alert, FlatList, Pressable, Text, View} from 'react-native';
import ChildComponent from '../components/Child';
import Item from '../components/Item';
import {PostResponseInterace} from '../interfaces/post.response';
import {styles} from '../styles/styles';
import {fetchData} from '../utils/api';
import useHeavyComputation from '../utils/heavyComputationFn';
import {showToast} from '../utils/utils';

export default function ParentComponent() {
  console.log('parent rerender');
  const [list, setList] = useState<PostResponseInterace[]>([]);
  const [selectedItem, setSelectedItem] = useState<PostResponseInterace>();
  const [apiLoading, setApiLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const computeDetails = useHeavyComputation();


  useEffect(() => {
    APICall();
  }, [currentPage]);

  const APICall = async () => {
    showToast('Fetching data...');
    setApiLoading(true);
    fetchData(currentPage)
      .then(res => {
        let cpy = [...list, ...res];
        setList(cpy);
        showToast('Fetching data complete');
      })
      .catch(() => showToast('Something went wrong'))
      .finally(() => setApiLoading(false));
  };

  const memoizedData = useMemo(() => {
    return list;
  }, [list]);

  const handleAdd = () => setCount(count + 1);

  const handleSub = () => setCount(count - 1);

  const handleItemSelect = useCallback(
    (item: PostResponseInterace) => {
      setSelectedItem(item);
    },
    [selectedItem],
  );

  const parentCallBackFn = useCallback(() => {
    Alert.alert('Alert','parent callback function called.');
  }, []);

  const fetchMoreData = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <View style={styles.parent}>
      <Text style={styles.header}>Count</Text>
      <View style={styles.row}>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={handleSub}>
          <Text style={styles.textStyle}>-</Text>
        </Pressable>
        <Text style={[styles.textStyle, {color: 'black'}]}>{count}</Text>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={handleAdd}>
          <Text style={styles.textStyle}>+</Text>
        </Pressable>
      </View>

      <Text style={styles.header}>Posts</Text>
      <FlatList
        data={memoizedData}
        renderItem={({item, index}) => {
          return (
            <Item
              item={item}
              onItemClick={handleItemSelect}
            />
          );
        }}
        ItemSeparatorComponent={() => <View style={{marginVertical: 5}} />}
        ListEmptyComponent={
          <View style={styles.container}>
            <Text>{apiLoading ? 'Loading...' : 'No Data'} </Text>
          </View>
        }
        onEndReached={fetchMoreData}
      />

      <ChildComponent
        details={selectedItem}
        parentCallBackFn={parentCallBackFn}
        computeDetails={computeDetails}
      />
    </View>
  );
}

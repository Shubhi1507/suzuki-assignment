import React, {useEffect, useMemo, useState} from 'react';
import {Modal, Pressable, ScrollView, Text, View} from 'react-native';
import {PostResponseInterace} from '../interfaces/post.response';
import {styles} from '../styles/styles';
import {fetchPostDetails} from '../utils/api';
import {showToast} from '../utils/utils';

interface PostDetailInterface {
  details: PostResponseInterace | undefined;
  parentCallBackFn: () => void;
  computeDetails: (item: PostResponseInterace) => string;
}

function ChildComponent({
  details,
  parentCallBackFn,
  computeDetails,
}: PostDetailInterface) {
  console.log('child rerender');
  const [modalVisible, setModalVisible] = useState(false);
  const [postDetails, setDetails] = useState<PostResponseInterace>();
  const detailsMemoized = useMemo(
    () => computeDetails(details!),
    [computeDetails, details],
  );

  useEffect(() => {
    if (details)
      fetchPostDetails(details?.id)
        .then(response => {
          setDetails(response);
          showToast('Fetching data complete.');
          setModalVisible(true);
        })
        .catch(error => showToast('Something went wrong'));
  }, [details?.id]);

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      style={{
        backgroundColor: 'grey',
        opacity: 0.5,
      }}
      onRequestClose={() => setModalVisible(false)}>
      <View style={styles.centeredView}>
        <Pressable
          style={[ styles.buttonClose]}
          onPress={() => setModalVisible(false)}>
          <Text style={styles.textStyle}>Close</Text>
        </Pressable>
        <ScrollView style={styles.modalView}>
          <Text style={styles.modalText}>Title: {postDetails?.title}</Text>
          <Text style={styles.modalText}>Id: {postDetails?.id}</Text>
          <Text style={styles.modalText}>Body: {postDetails?.body}</Text>
          <Text style={styles.details}>Heavy computed detail :{`\n`}{detailsMemoized}</Text>
          <Pressable
            style={[
              styles.button,
              styles.buttonClose,
              {backgroundColor: 'teal'},
            ]}
            onPress={parentCallBackFn}>
            <Text style={styles.textStyle}>Callback</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(false)}>
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
        </ScrollView>
      </View>
    </Modal>
  );
}

export default React.memo(ChildComponent);

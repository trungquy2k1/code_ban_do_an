
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const FeedbackScreen = () => {
  const [feedback, setFeedback] = useState('');
  const [feedbackList, setFeedbackList] = useState([]);

  const handleSendFeedback = () => {
    const newFeedback = {
      id: Date.now(), // Tạo một ID duy nhất cho phản hồi
      content: feedback
    };

    // Thêm phản hồi mới vào mảng feedbackList
    setFeedbackList(prevFeedbackList => [...prevFeedbackList, newFeedback]);

    // Xóa nội dung phản hồi trong TextInput
    setFeedback('');
  };

  return (
    <View style={{marginTop: 20}}>
      <TextInput
        onChangeText={text => setFeedback(text)}
        value={feedback}
        placeholder="Nhập nội dung phản hồi"
      />
      <Button onPress={handleSendFeedback} title="Gửi" />

      {/* Hiển thị danh sách phản hồi */}
      {feedbackList.map(item => (
        <Text key={item.id}>{item.content}</Text>
      ))}
    </View>
  );
};

export default FeedbackScreen;
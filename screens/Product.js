import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
// import styles from './styles';
import {useNavigation} from '@react-navigation/native';
// import C
const images = [
  {
    id: '1',
    image: require('./sp/anh1.jpg'),
    title: 'Vegan Cookies',
    title1: '$2,950,000',
  },
  {
    id: '2',
    image: require('./sp/anh3.jpg'),
    title: 'Pumpkin Spice Cookies',
    title1: '$2,950,000',
  },
  {
    id: '3',
    image: require('./sp/anh4.jpg'),
    title: 'San Francisco, CA',
    title1: '$2,950,000',
  },
  {
    id: '4',
    image: require('./sp/banh2.jpg'),
    title: 'San Francisco, CA',
    title1: '$2,950,000',
  },
  {
    id: '5',
    image: require('./sp/banh3.jpg'),
    title: 'San Francisco, CA',
    title1: '$2,950,000',
  },
  {
    id: '6',
    image: require('./sp/banh4.jpg'),
    title: 'San Francisco, CA',
    title1: '$2,950,000',
  },
  {
    id: '7',
    image: require('./sp/banh5.jpg'),
    title: 'San Francisco, CA',
    title1: '$2,950,000',
  },
  {
    id: '8',
    image: require('./sp/banh6.jpg'),
    title: 'San Francisco, CA',
    title1: '$2,950,000',
  },
  {
    id: '9',
    image: require('./sp/banh2.jpg'),
    title: 'San Francisco, CA',
    title1: '$2,950,000',
  },
  {
    id: '10',
    image: require('./sp/banh3.jpg'),
    title: 'San Francisco, CA',
    title1: '$2,950,000',
  },
  {
    id: '11',
    image: require('./sp/anh4.jpg'),
    title: 'San Francisco, CA',
    title1: '$2,950,000',
  },
  {
    id: '12',
    image: require('./sp/banh2.jpg'),
    title: 'San Francisco, CA',
    title1: '$2,950,000',
  },
];

const Product = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePress = () => {
    setIsExpanded(!isExpanded);
  };
  //
  const navigation = useNavigation();

  const handleImagePress = (item) => {
    navigation.navigate('Chitietsp', {item}); // replace 'Product' with the name of your Product screen
  };
  const renderItem = ({item}) => (
    <View style={styles.anh1}>
      <TouchableOpacity onPress={handleImagePress}>
        <Image source={item.image} style={{width: 180, height: 120}} />
      </TouchableOpacity>
      <View>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.text1}>{item.title1}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',
          fontWeight: '700',
          color: '#000',
          marginBottom: 10,
        }}>
        Product
      </Text>
      <FlatList
        data={images.slice(0, isExpanded ? images.length : 2)}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
      <TouchableOpacity
        onPress={handlePress}
        style={{
          backgroundColor: '#4f8af4',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Text style={{color: '#fff', padding: 10, fontSize: 16}}>
          {isExpanded
            ? `Thu gọn - ${images.length} sản phẩm`
            : `Mở rộng + ${images.length} sản phẩm`}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Product;
const styles = StyleSheet.create({
    container: {
      // flex:1,
      marginBottom: 100,
    },
    anh1: {
      // backgroundColor: '#fff',
      //  width: '90%',
      //  height: 60,
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
    },
    itemImage: {
      width: 370,
      height: 160,
      // borderWidth: 1,
      // borderColor: '#000',
      borderRadius: 20,
    },
    text: {
      fontSize: 16,
      fontWeight: '800',
      textAlign: 'center',
      color: '#000',
    },
    text1: {
      fontSize: 13,
      fontWeight: '800',
      textAlign: 'center',
      color: '#000',
    },
  });
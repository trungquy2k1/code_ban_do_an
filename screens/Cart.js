// import { View, Text } from 'react-native'
// import React from 'react'
// import Header2 from '../components/Header2'
// export default function Cart({navigation}) {
//     return (
//         <View style ={{marginTop: 18}}>
//             <Header2 navigation={navigation}/>
//             <View style={{justifyContent:'center', alignItems:'center'}}>
//                 <Text>Cart</Text>
//             </View>
            
//         </View>
//     )
// }

import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Alert, StyleSheet} from 'react-native';
// import styles from './styles';
// import Header from '../Head';
import Header2 from '../components/Header2';
import {useNavigation} from '@react-navigation/native';
const Cart = ({navigation}) => {
  // const navigation = useNavigation();
  const [img, setImg] = useState(require('./dathang/anh1.jpg'));
  const changeImage = (image) => {
    setImg(image);
  };
  const [count, setCount] = useState(1);
  const gia = 25000;
  const onIncrease = () => {
    setCount(prevCount => prevCount + 1);
  };

  const onDecrease = () => {
    setCount(prevCount => prevCount - 1);
  };
  const tongGia = count * gia;
  return (
    <View style={styles.container}>
      <Header2 navigation={navigation}/>
      <Text style={styles.title}>Oatmeal cookies</Text>
      <View>
        <Image source={img} style={styles.image} />

        <View style={styles.thumbnailContainer}>
          <TouchableOpacity
            onPress={() => changeImage(require('./dathang/anh2.png'))}>
            <Image
              source={require('./dathang/anh2.png')}
              style={styles.thumbnail}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => changeImage(require('./dathang/anh3.jpg'))}>
            <Image
              source={require('./dathang/anh3.jpg')}
              style={styles.thumbnail}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => changeImage(require('./dathang/anh4.jpg'))}>
            <Image
              source={require('./dathang/anh4.jpg')}
              style={styles.thumbnail}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.text}>
          <Text style={{color: '#000', fontSize: 18, fontWeight: '700'}}>
            Aioli. Arugula, spinach gorgonzola, cheese, carrots, quinoa, beets
          </Text>
        </View>
        <View style={styles.soluong}>
          <TouchableOpacity onPress={onDecrease} style={styles.btnSL}>
            <Text style={[styles.textSL1, {fontSize: 28, color: '#fff'}]}>
              -
            </Text>
          </TouchableOpacity>
          <Text style={[styles.textSL, {fontSize: 25, color: '#000'}]}>
            {count}
          </Text>
          <TouchableOpacity onPress={onIncrease} style={styles.btnSL}>
            <Text style={[styles.textSL1, {fontSize: 28, color: '#fff'}]}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.giaban}>
          <Text style={styles.txtgia}>{tongGia} vnd</Text>
          <TouchableOpacity
            style={styles.btngia}
            onPress={() =>
              Alert.alert('Đặt hàng thành công', 'My Alert Msg', [
                {
                  text: 'OK',
                  onPress: () => navigation.navigate('Product'),
                  style: 'default',
                },
              ])
            }>
            <Text style={{fontSize: 30, color: '#fff'}}>Đặt hàng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 28,
      color: '#000',
      marginVertical: 20
    },
    image: {
      width: '100%',
      height: 250,
      marginBottom: 20,
    },
    thumbnailContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    thumbnail: {
      width: 120,
      height: 70,
    },
    text: {
      marginVertical: 20,
      marginHorizontal: 10,
    },
    soluong: {
      alignItems: 'center',
      width: '100%',
      height: 50,
      justifyContent: 'center',
      flexDirection: 'row',
    },
    textSL: {
      textAlign: 'center',
      color: '#000',
      fontWeight: '800',
  
      width: '30%',
      height: 50,
      paddingTop: 8,
    },
    textSL1: {
      textAlign: 'center',
      color: '#000',
      fontWeight: '800',
  
      width: 40,
      height: 50,
      paddingTop: 8,
    },
    btnSL: {
      borderWidth: 1,
      borderColor: 'blue',
      borderRadius: 10,
      alignItems: 'center',
      width: 50,
      backgroundColor: 'blue',
    },
    giaban:{
      flexDirection:'row',
      justifyContent: 'center',
      alignItems:'center',
      width:'100%',
      height:50,
      marginTop:20
    },
    txtgia:{
      width:'40%',
      
      fontSize: 20,
      color:'#000',
      backgroundColor:'#fff',
      textAlign:'center',
      fontWeight:'700', 
      
  
    },
    btngia:{
      width:'60%',
      height:'100%',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'green',
      borderWidth: 1,
      borderColor: 'blue',
      borderRadius: 10,
    },
  });
  export default Cart;
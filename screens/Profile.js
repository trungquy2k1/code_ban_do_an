import React from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  StyleSheet
} from 'react-native';
// import styles from './styles';
import Header from '../components/Header';

import {useNavigation} from '@react-navigation/native';

const Profile = ({navigation}) => {
//   const navigation = useNavigation();
  return (
    
    <View style={styles.container}>
     <Header navigation={navigation} />
      <View style={styles.anhdaidien}>
        <Text style={styles.title}>Profile</Text>
        <Image source={require('./Img/anhprofile.png')} style={styles.image} />
        <Text style={styles.title}>Ahihi</Text>
        {/* </View>
      <View> */}
        <TouchableOpacity
          // onPress={()=>navigation.navigate('Login')}
          onPress={() =>
            Alert.alert('Bạn muốn Log out', 'okkkkk', [
              {text: 'Cancel'},
              {
                text: 'OK',
                onPress: () => navigation.navigate('Landingscreen'),
                style: 'default',
              },
            ])
          }
          style={styles.btn}>
          <Text style={styles.txtlogout}>Log Out</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.vande}>
        <Text style={styles.txtvd}>Bạn gặp vấn đề gì??</Text>
        <TextInput
          placeholder="Để lại vấn đề bạn gặp phải ở đây..."
          style={styles.txtinput}
          placeholderTextColor="black"
          // multiline={true}
          // numberOfLines={8}
        />
        <TouchableOpacity
          style={styles.btngui}
          onPress={() => navigation.navigate('FeedbackScreen')}>
          <Text style={styles.txtlogout}>Gửi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Profile;

const styles = StyleSheet.create({
    container: {
      marginTop: 20,
    //   justifyContent:'center',
    //   alignItems: 'center',
    },
    anhdaidien:{
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 20
    },
    title:{
      fontSize: 28,
      color: '#ff0080'
    },
    image:{
      width: 150,
      height: 130,
      borderRadius: 90,
      marginVertical: 15
    },
    btn:{
      width: 150,
      height: 50,
      backgroundColor: '#ff3333',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'blue',
      borderWidth: 1,
      borderRadius: 10,
      marginVertical: 20
    },
    txtlogout:{
      fontSize: 20,
      fontWeight: '600',
      textAlign: 'center',
      color: '#ffff'
    },
    vande: {
      marginHorizontal: 10,
      marginTop: 10
    },
    txtvd: {
      fontSize: 20,
      color:'#000',
      marginBottom: 10
    },
    txtinput:{
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 10,
      width: '96%',
      height: 120,
      justifyContent: 'flex-start',
      textAlignVertical: 'top',
      color: '#000',
      fontSize: 16
    },
    btngui:{
      width: 90,
      height: 50,
      backgroundColor: '#3385ff',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'blue',
      borderWidth: 1,
      borderRadius: 10,
      marginVertical: 20
    },
  });
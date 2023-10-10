import React, {useState} from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const data = [
  {
    id: '1',
    source: require('./sp/anh1.jpg'),
    title: 'Vegan Cookies',
    title1: '$2,950,000',
  },
  {
    id: '2',
    source: require('./sp/anh3.jpg'),
    title: 'Pumpkin Spice Cookies',
    title1: '$2,950,000',
  },
  {
    id: '3',
    source: require('./sp/banh4.jpg'),
    title: 'Oatmeal Cookies',
    title1: '$2,950,000',
  },
  {
    id: '4',
    source: require('./sp/banh8.jpg'),
    title: 'Triple Berry Smoothie',
    title1: '$2,950,000',
  },
  {
    id: '5',
    source: require('./sp/banh3.jpg'),
    title: 'Brownies',
    title1: '$2,950,000',
  },
  {
    id: '6',
    source: require('./sp/banh4.jpg'),
    title: 'Perfect Fish Tacos',
    title1: '$2,950,000',
  },
  {
    id: '7',
    source: require('./sp/banh5.jpg'),
    title: 'Chicken Fajitas',
    title1: '$2,950,000',
  },
  {
    id: '8',
    source: require('./sp/banh6.jpg'),
    title: 'Buffalo Pizza',
    title1: '$2,950,000',
  },
  {
    id: '9',
    source: require('./sp/banh2.jpg'),
    title: 'Spaghetti Carbonara',
    title1: '$2,950,000',
  },
  {
    id: '10',
    source: require('./sp/banh3.jpg'),
    title: 'Classic Lasagna',
    title1: '$2,950,000',
  },
  {
    id: '11',
    source: require('./sp/banh7.jpg'),
    title: 'Spaghetti Carbonara',
    title1: '$2,950,000',
  },
  {
    id: '12',
    source: require('./sp/banh1.jpg'),
    title: 'Lazania',
    title1: '$2,950,000',
  },
];

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = text => {
    setSearchText(text);

    const newData = data.filter(item => {
      const itemData = item.title.toLowerCase();
      const textData = text.toLowerCase();

      return itemData.indexOf(textData) > -1;
    });

    setFilteredData(newData);
    setIsSearching(true);
  };

  const renderItem = ({item}) => (
    <View style={styles.anh1}>
      <TouchableOpacity>
        <Image source={item.source} style={styles.itemImage} />
      </TouchableOpacity>
      <View>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.text1}>{item.title1}</Text>
        <Text style={styles.text2}>{item.title2}</Text>
      </View>
      <Text style={styles.text3}>{item.title3}</Text>
    </View>
  );

  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',
          fontWeight: '700',
          color: '#000',
          marginBottom: 10,
        }}>
        Search
      </Text>
      <TextInput
        style={{
          borderWidth: 1,
          margin: 1,
          paddingHorizontal: 10,
          borderRadius: 14,
          padding: 5,
        }}
        placeholder="Search........"
        onChangeText={handleSearch}
        value={searchText}
      />
      {isSearching && (
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          style={{marginBottom: 90}}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  itemImage: {
    width: 370,
    height: 100,
  },
  anh1: {
    //flexDirection: 'row',
    margin: 10,
    width: '100%',
    height: 150,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 7,
  },
  text1: {
    marginTop: 9,
    marginLeft: 7,
  },
  text2: {
    marginTop: 9,
    marginLeft: 7,
  },
  text3: {
    marginLeft: 50,
    marginTop: 70,
    marginRight: 0,
  },
});
export default Search;

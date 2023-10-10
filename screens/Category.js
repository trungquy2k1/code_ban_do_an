import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react';
import Header2 from '../components/Header2';
import { sandwiches } from '../data/database';

export default function Category({ route, navigation }) {
    const { cate } = route.params;

    return (
        <View style={{ paddingTop: 40 }}>
            <ScrollView>
                <Header2 type='Back' title={cate} navigation={navigation} />
                <View style={{ backgroundColor: '#979797' }}>
                    {sandwiches.map((e, i) => (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, }} key={i}>
                            <View style={{ width: '68%' }}>
                                <Text>{e.name}</Text>
                                <Text style={{ color: '#666' }}>{e.description}</Text>
                                <Text style={{ color: '#666' }}>${e.price}</Text>
                            </View>
                            <View style={{ width: '30%' }}>
                                <Image
                                    style={{
                                        width: 100,
                                        height: 100,
                                        resizeMode: 'cover'
                                    }}
                                    source={require('../assets/popularFood/1.png')}
                                />
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView >
        </View >
    )
}
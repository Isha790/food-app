

import React,{useEffect, useState}from 'react';
import { View, Text, ScrollView, TextInput,Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import Categories from '../components/categories';
import axios from 'axios';
export default function HomeScreen() {
  const[activeCategory,setActiveCategory]=useState('Beef')
  const[categories,setCategories]=useState([]);

  useEffect(()=>{
    getCategories();
  },[])
const getCategories=async()=>{
    try{
      const response=await axios.get('https://themealdb.com/api/json/v1/1/categories.php');
      // console.log('got categories: ',response.data);
      if(response && response.data && response.data.categories){
        setCategories(response.data.categories);
      }
    }catch(err){
      console.log('error: ',err.message);
    }
}
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar style="dark" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }}>
        {/* Greetings and punchline */}
        <View style={{ marginTop:hp('10%'),marginHorizontal: wp('4%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: hp('2%') }}>
          <Image source={require('../../assets/images/avatar.jpeg')} style={{ height: hp('5%'), width: hp('5%') }} />
          <BellIcon size={hp('4%')} color="gray" />
        </View>
        <View style={{ marginHorizontal: wp('4%'), marginTop: hp('3%'), marginBottom: hp('2%') }}>
          <Text style={{ fontSize: hp('1.7%'), color: '#6B7280' }}>Hello, Noman!</Text>
          <Text style={{ fontSize: hp('3.8%'), fontWeight: 'bold', color: '#6B7280' }}>
            Make your own food stay at <Text style={{ color: '#F59E0B' }}>home</Text>
          </Text>
        </View>
        {/* Search bar */}
        <View style={{ marginHorizontal: wp('4%'), flexDirection: 'row', alignItems: 'center', borderRadius: 20, backgroundColor: 'rgba(0, 0, 0, 0.1)', paddingVertical: 6, paddingHorizontal: 12, marginBottom: hp('2%') }}>
          <TextInput
            placeholder='Search any recipe'
            placeholderTextColor='gray'
            style={{ flex: 1, fontSize: hp('1.7%'), marginBottom: 1, paddingLeft: 3, letterSpacing: 0.5 }}
          />
          <View style={{ backgroundColor: 'white', borderRadius: 20, padding: 9 }}>
            <MagnifyingGlassIcon size={hp('2.5%')} strokeWidth={3} color="gray" />
          </View>
        </View>
        {/* <View  style={{marginTop:hp('2.5%')}}>
         <Categories/>
      </View> */}
    <ScrollView horizontal showsHorizontalScrollIndicator={true}>
  <View style={{ flexDirection: 'row', paddingHorizontal: wp('4%'), marginTop: hp('2.5%') }}>
    {categories.map((category, index) => (
      <View key={index} style={{ marginRight: wp('2%') }}>
        <Image source={{ uri: category.strCategoryThumb }} style={{ width: wp('20%'), height: hp('10%'), borderRadius: 10 }} />
        <Text style={{ fontSize: hp('1.5%'), fontWeight: 'bold', marginTop: hp('1%') }}>{category.strCategory}</Text>
      </View>
    ))}
  </View>
</ScrollView>
  
  <View>
    <Recipes/>
  </View>



      </ScrollView>

      
    </View>
  );
}


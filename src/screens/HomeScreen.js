import React,{useState,useEffect} from 'react';
import { Text, StyleSheet,View, Button } from 'react-native';
import CellHotelDetail from '../components/CellHotelDetail'
import SearchBar from '../components/SearchBar'
import useSearchResult from '../Hooks/useSearchResult'

const HomeScreen = ({navigation}) => {
  
 const[searchTxt , setSearchTxt] =  useState('')
  
 const[searchResponse ,searchAPI] = useSearchResult()

  return (
    <View>
      <SearchBar search = {searchTxt} searchBarCallBack = { setSearchTxt} onSubmit = { () => searchAPI(searchTxt) }/>
      <CellHotelDetail/>

    </View>
  )
  console.log(searchResponse.length)
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

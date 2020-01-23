import React,{useState} from 'react';
import { Text, StyleSheet,View, Button } from 'react-native';
import CellHotelDetail from '../screens/components/CellHotelDetail'
import SearchBar from './components/SearchBar'
import  Axios from '../API/Axios'

const HomeScreen = ({navigation}) => {
  
 const[searchTxt , setSearchTxt] =  useState('')
 const[searchResponse,SetSearchResponse] = useState([])

  const searchApi = async () => {
    try {
        const response = await Axios.get('/search',
       {
        params : {
          limit : 50,
          term : searchTxt,
          location : 'san jose'
        }
     }
      );
      SetSearchResponse(response.data)
      console.log(response.data)

    }catch (err) {
        console.log(err)
    }
  }

  return (
    <View>
      <SearchBar search = {searchTxt} searchBarCallBack = { setSearchTxt} onSubmit = {searchApi }/>
      <CellHotelDetail/>
    </View>
  )
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

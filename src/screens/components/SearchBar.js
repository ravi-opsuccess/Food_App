import React from 'react'
import {View,TextInput,Image,StyleSheet} from 'react-native'
import {Feather} from '@expo/vector-icons'

const createDetailCell = ({search , searchBarCallBack , onSubmit}) => {

    return (
        <View style = {customStyle.containerStyle}>
            <Feather name = "search" size = {25} style = {customStyle.iconStyle}/>
            
            <TextInput  style = {customStyle.textInputStyle} 
                        placeholder = 'search '
                        onChangeText = {searchHotelStr => searchBarCallBack(searchHotelStr)} 
                        onEndEditing = {() => onSubmit() }    
                     >
            </TextInput>
        
        </View>  
    )
}

const customStyle = StyleSheet.create ({

    containerStyle : {
        backgroundColor : '#F0EEEE',
        margin : 10 ,
        height : 50 ,
        borderRadius : 5 ,
        flexDirection : 'row',
    },

    textInputStyle : {
        fontSize : 18,
        flex:1
    },

    iconStyle : {
        alignSelf : 'center',
        marginLeft : 10
    }


})

export default createDetailCell;
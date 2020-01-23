import React from 'react'
import {View,Text,Image,StyleSheet} from 'react-native'

const createDetailCell = () => {

    return (
        <View>
            <Image style = {style.imageStyle}/>
            <Text>Name</Text>
            <Text>Price</Text>
        </View>  
    )
}

const style = StyleSheet.create ({
})

export default createDetailCell
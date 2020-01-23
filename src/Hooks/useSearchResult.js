import {useState,useEffect} from 'react'
import Axios from '../API/Axios'

export default () => {

    const[searchResponse,SetSearchResponse] = useState([])
    
    const searchAPI = async (searchTxt) => {
    
        try {
    
            const response = await Axios.get('\search' , {
                params : {
                    list : 50,
                    term : searchTxt,
                    location : 'san jose'     
                }
            }) 
    
            SetSearchResponse(response.data)
            
            console.log(searchResponse)
    
        }catch (err){
    
            console.log(err)
        }
    
        useEffect(() => {
            searchAPI('pasta')
          },[]); 
      
          return [searchResponse ,searchAPI];
          
    }
} ;

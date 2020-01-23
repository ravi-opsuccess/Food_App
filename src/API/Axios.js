import axios from 'axios'

export default axios.create ({ 

   // const clientId = 'yThM4u19zo-0kLj0SGJCfg'
   // const APIKEY = 'TkLEz6h13EWkDFRVrLojZZWehE5m_n6cohA_Qv72mXNZvOJ_0H5nDAAllyuQOLaCYqEuOE5HYmWi8GdMfSEko4Tu8RRtL2zqeCqnNMZu_hBIKn96rW2mC1tUmyQoXnYx'

   baseURL : 'https://www.yelp.com/developers/documentation/v3/business',
   headers : {
    Authorization : 'Bearer l2cmhf2ezRl6ZkcHWNYKoDpiaro1zlqUjwkA7nVxnWzryiTwFDk35PJiucoLhjjFY9ECD8GTBGaHBg5yv5YDLiszKQx8EMvm30ply0UWoHQOnYFjLozpYnZOx-UsXXYx'
   }
});

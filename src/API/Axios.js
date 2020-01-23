import axios from 'axios'

export default axios.create ({ 

   // const clientId = 'yThM4u19zo-0kLj0SGJCfg'
   // const APIKEY = 'TkLEz6h13EWkDFRVrLojZZWehE5m_n6cohA_Qv72mXNZvOJ_0H5nDAAllyuQOLaCYqEuOE5HYmWi8GdMfSEko4Tu8RRtL2zqeCqnNMZu_hBIKn96rW2mC1tUmyQoXnYx'

   baseURL : 'https://api.yelp.com/v3/businesses',
   headers : {
    Authorization : 'Bearer TkLEz6h13EWkDFRVrLojZZWehE5m_n6cohA_Qv72mXNZvOJ_0H5nDAAllyuQOLaCYqEuOE5HYmWi8GdMfSEko4Tu8RRtL2zqeCqnNMZu_hBIKn96rW2mC1tUmyQoXnYx'
   }
});

import  { useState } from 'react';
import axios from 'axios';

const BASE_URL = "https://www.metaweather.com/api/location";
const CROSS_DOMAIN = "https://the-ultimate-api-challaenge.herokuapp.com";
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`

const useForecast = () => {
// console.log('I am the hand made hook');

    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [forecast, setForecast] = useState(null);

    // CALL TO THE PROPS >> input
    const submitRequest = (location) => {
        console.log({ location });
    
        // CALL TO THE API:
            // 1) get w.o.e.id
        axios(REQUEST_URL)
            // 2) get weather
    };



    return {
        isError, 
        isLoading,
        forecast,
        submitRequest,
    }
};

export default useForecast;
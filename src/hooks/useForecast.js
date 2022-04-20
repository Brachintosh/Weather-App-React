import  { useState } from 'react';
import axios from 'axios';

import getCurrentDayForecast from '../helpers/getCurrentDayForecast';
import getCurrentDayDetailedForecast from '../helpers/getCurrentDayDetailedForecast';
import getUpcomingDaysForecast from '../helpers/getUpcomingDaysForecast';

const BASE_URL = "https://www.metaweather.com/api/location";
const CROSS_DOMAIN = "https://the-ultimate-api-challenge-v2.herokuapp.com";
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const useForecast = () => {
// console.log('I am the hand made hook');

    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [forecast, setForecast] = useState(null);

    const getWoeid = async (location) => {
    // CALL TO THE API:
        // 1) get w.o.e.id
        const { data } = await axios(`${REQUEST_URL}/search`, {params:{query: location} } )
        // console.log({ data });
        if(!data || data.length === 0) { 
            setError("There is no such location...");
            setLoading(false);
            return;
        }
        return data[0];
    };

    const getForecastData = async (woeid) => {
        // 2) get weather
        const { data } = await axios(`${REQUEST_URL}/${woeid}`);

        if(!data || data.length === 0) {
            setError("Something went wrong !");
            setLoading(false);
            return
        };
        return data;
    };

    const gatherForecastData = (data) => {
        
        const currentDay = getCurrentDayForecast(data.consolidated_weather[0], data.title);
        const currentDayDetails = getCurrentDayDetailedForecast(data.consolidated_weather[0]);
        const upcomingDays = getUpcomingDaysForecast(data.consolidated_weather);
        
        setForecast({
            currentDay,
            currentDayDetails,
            upcomingDays,
        });
        setLoading(false);
    };

    // CALL TO THE PROPS >> input
    const submitRequest = async (location) => {
        setLoading(true);
        setError(false);

        const response = await getWoeid(location);
        if(!response?.woeid) return;

        const data = await getForecastData(response.woeid);
        if(!data) return;

        // console.log({ data });
        //! Exporting data:
        gatherForecastData(data);
    };

    return {
        isError, 
        isLoading,
        forecast,
        submitRequest,
    };
};

export default useForecast;
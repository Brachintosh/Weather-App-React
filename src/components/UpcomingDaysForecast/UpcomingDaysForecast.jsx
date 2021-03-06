import React from 'react';
import PropTypes from 'prop-types';

import UpcomingDaysForecastItem from '../UpcomingDaysForecastItem';

import styles from './UpcomingDaysForecast.module.css';

const UpcomingDaysForecast = ({days}) => (
    
    <ul className={`${styles.weekList} d-flex justify-content-between p-2 mt-4 mb-4 `}>
        {
            days?.map((day) => (
                <UpcomingDaysForecastItem {...day} key={day.weekday} />
            ))
        }
    </ul>
);

UpcomingDaysForecast.propTypes = {
    days: PropTypes.array.isRequired,
};

export default UpcomingDaysForecast;

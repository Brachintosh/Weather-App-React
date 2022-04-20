import React from 'react';
import PropTypes from 'prop-types';

const CurrentDayDescriptionItem = ({ name, value, unit }) => (
    <div className="d-flex justify-content-between">
        <p className="mb-2 font-weight-bold text-uppercase">{name}</p>
        <p className="pr-1">{value}{" "}{" "}{unit} </p>
    </div>
);

CurrentDayDescriptionItem.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
}

export default CurrentDayDescriptionItem;
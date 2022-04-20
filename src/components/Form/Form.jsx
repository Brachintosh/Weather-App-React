import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

const Form = ({ submitSearch }) => {
    const [location, setLocation] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setLocation(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!location || location === '') return;
        submitSearch(location);
    };
    
    return (
        <form onSubmit={handleSubmit} >
            <input
                aria-label="location"
                type="text"
                className={`${styles.input} form-control`}
                placeholder="Search for location"
                required
                onChange={handleChange}
                value={location}
            />

            <button type="submit" className={styles.button} onClick={handleSubmit} >
                SEARCH
            </button>
        </form>
    );
};

Form.propTypes = {
    submitSearch: PropTypes.func.isRequired,
}

export default Form;

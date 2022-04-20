import React, { Fragment } from 'react';
import Header from '../Header';
import Form from '../Form';
import Error from '../Error';
import Loader from '../Loader';
import Forecast from '../Forecast';

import styles from './Page.module.css';

import useForecast from '../../hooks/useForecast';

const Page = () => {
    const { isError, isLoading, forecast, submitRequest } = useForecast();

    const onSumbit = (value) => {
        // console.log({value});
        submitRequest(value);
    }

    return (
        <Fragment>
            <Header />
           {
               !forecast && (
                <div className={`${styles.box} position-relative`}>
                    {/* FORM */}
                    { !isLoading && <Form submitSearch={onSumbit} /> }
                    {/* ERROR */}
                    { isError && <Error message={isError} /> }
                    {/* LOADER */}
                    {isLoading && <Loader /> }
                </div>
               )
           }
                {/* FORECAST */}
                { forecast && <Forecast forecast={forecast} /> }

        </Fragment>
    );
};

export default Page;

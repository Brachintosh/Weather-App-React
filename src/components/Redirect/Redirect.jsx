import React from 'react';
import { Button } from 'react-bootstrap';

import styles from './Redirect.module.css';

const Redirect = () => {

    function refreshLocalePage() {
        window.location.reload(false);
    };

    return (
        <div className={styles.boxShadowBtn}>
            <Button className="h4 mt-4 mb-3 ml-4" onClick={refreshLocalePage} >New Search</Button>
        </div>
    );
};

export default Redirect;
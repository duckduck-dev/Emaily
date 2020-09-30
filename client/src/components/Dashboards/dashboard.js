import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return(
        <div>
                <div className="fixed-action-btn">
                    <Link  to="surveys/new" className="btn-floating btn-large blue">
                        <i  className="material-icons">add</i>
                    </Link>
                </div>
        </div>
    );
};
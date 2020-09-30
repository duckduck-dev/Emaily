import React from 'react';

export default ( { input, label, meta: { error, touched } } ) => {
    return(
        <div>
                <label >{label}</label>
                <input type="text"  {...input} style={{marginBottom: '1rem'}}/>
               {/* //if touched is true , error string will be displayed.*/}
                <div className="red-text" style={{marginBottom: '1rem'}}>{touched && error}</div>
        </div>
    );
};
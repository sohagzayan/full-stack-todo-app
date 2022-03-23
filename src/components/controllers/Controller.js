import propTypes from 'prop-types';
import React from 'react';
import SearchPanel from './Search-panel';
const Controller = ({tarm , handleSearch ,toggleForm}) => {
    return (
        <div>
            <SearchPanel 
                tarm={tarm}
                handleSearch={handleSearch}
                toggleForm={toggleForm}
            />
        </div>
    );
};



Controller.propTypes ={
    tarm :propTypes.string.isRequired,
    handleSearch : propTypes.func.isRequired,
    toggleForm : propTypes.func.isRequired
}



export default Controller;
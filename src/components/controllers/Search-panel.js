import propTypes from 'prop-types';
import React from 'react';
import { Button, Input } from 'reactstrap';
const SearchPanel = ({tarm , handleSearch ,toggleForm}) => {
    return (
        <div className='d-flex'>
            <Input 
               placeholder='Enter Search Term '
               className='mr-3'
               value={tarm} 
               onChange={(e)=> handleSearch(e.target.value)}
            />
            <Button color='success' onClick={toggleForm}>
                New
            </Button>
        </div>
    );
};

SearchPanel.propTypes ={
    tarm :propTypes.string.isRequired,
    handleSearch : propTypes.func.isRequired,
    toggleForm : propTypes.func.isRequired
}

export default SearchPanel;
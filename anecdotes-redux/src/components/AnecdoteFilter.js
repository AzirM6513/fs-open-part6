import React from 'react';
import { connect } from 'react-redux';

import { setFilter } from '../reducers/filterReducer';

const AnecdoteFilter = (props) => {
  const handleChange = (event) => {
    props.setFilter(event.target.value);
  };

  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input type='text' onChange={handleChange} />
    </div>
  );
};

export default connect(null, { setFilter })(AnecdoteFilter);

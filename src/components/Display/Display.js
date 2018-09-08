import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { value } = props;
  return (
    <div className="display-wrap">
      <div className="display">
        {value}
      </div>
    </div>
  );
};

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Display;

import React from 'react';
import PropTypes from 'prop-types';

const ExampleComponent = ({ text }) => (
    <h1>My {text} Presentational React Component!</h1>
);

ExampleComponent.propTypes = {
    text: PropTypes.string.isRequired,
};

export default ExampleComponent;

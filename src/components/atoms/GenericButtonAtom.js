import PropTypes from 'prop-types';
import React from 'react';

const GenericButtonAtom = ({ onClick, label }) => {
    return (
        <button
            className="btn btn-outline-success my-2 my-sm-0"
            onClick={onClick}
        >
            {label}
        </button>
    );
};

GenericButtonAtom.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
};

export default GenericButtonAtom;

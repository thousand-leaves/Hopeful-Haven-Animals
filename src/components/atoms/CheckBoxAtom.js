import classnames from "classnames";
import PropTypes from 'prop-types';
import React from 'react';

const CheckBoxAtom = ({ name, checked, onChange, label, error, id }) => {
    const handleChange = () => {
        onChange(!checked);
    };

    return (
        <div className={classnames("form-check", { "is-invalid": error })}>
            <input
                type="checkbox"
                name={name}
                checked={checked}
                onChange={handleChange}
                className="form-check-input"
                id={id}
            />
            <label className="form-check-label" htmlFor={id}>
                {label}
            </label>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

CheckBoxAtom.defaultProps = {
    checked: false,
    label: "Unknown",
    id: "Unknown",
};

CheckBoxAtom.propTypes = {
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    id: PropTypes.string.isRequired,
};

export default CheckBoxAtom;

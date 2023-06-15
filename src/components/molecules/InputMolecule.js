import React from 'react';
import PropTypes from 'prop-types';
import ErrorAtom from '../atoms/ErrorAtom';
import InputAtom from '../atoms/InputAtom';
import LabelAtom from '../atoms/LabelAtom';

const InputMolecule = ({
  labelId,
  labelName,
  type,
  name,
  value,
  onChange,
  error,
  id,
  placeholder,
}) => {
  return (
    <div className="mb-2">
      <LabelAtom labelId={labelId} labelName={labelName} />
      <InputAtom
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        error={error}
        id={id}
        placeholder={placeholder}
      />
      <ErrorAtom error={error} />
    </div>
  );
};

InputMolecule.defaultProps = {
  value: '',
  error: '',
};

InputMolecule.propTypes = {
  labelId: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default InputMolecule;

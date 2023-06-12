import React from 'react'
import ErrorAtom from '../atoms/ErrorAtom'
import InputAtom from '../atoms/InputAtom'
import LabelAtom from '../atoms/LabelAtom'

const InputMolecule = ({ labelId, labelName, type, name, value, onChange, error, id, placeholder }) => {
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
    )
}

export default InputMolecule
import PropTypes from 'prop-types'
import React from 'react'

const LabelAtom = ({ labelId, labelName }) => {
    return (
        <label htmlFor={labelId} className="form-label">{labelName}</label>
    )
}

LabelAtom.defaultProps = {
    labelId: "Generic ID",
    labelName: "Generic Name"
}

LabelAtom.propTypes = {
    labelId: PropTypes.string.isRequired,
    labelName: PropTypes.string.isRequired
}

export default LabelAtom
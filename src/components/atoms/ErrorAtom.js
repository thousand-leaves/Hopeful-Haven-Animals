import PropTypes from 'prop-types'
import React from 'react'

const ErrorAtom = ({ error }) => {
    return (
        <React.Fragment>
            {error && <div className="invalid-feedback">{error}</div>}
        </React.Fragment>
    )
}

ErrorAtom.defaultProps = {
    error: "Not defined"
}

ErrorAtom.propTypes = {
    error: PropTypes.string.isRequired
}

export default ErrorAtom
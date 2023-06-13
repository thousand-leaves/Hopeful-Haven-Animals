import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const TitleAtom = ({title}) => (
    <Link className="navbar-brand" to="/">
        {title}
    </Link>
  )

TitleAtom.propTypes = {
    title: PropTypes.string.isRequired
}

export default TitleAtom
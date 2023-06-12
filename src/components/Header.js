import PropTypes from 'prop-types'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = ({ brand }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-1">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{brand}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/"><i className="fa fa-home mx-1" aria-hidden="true"></i>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login"><i className="fa fa-user mx-1" aria-hidden="true"></i>Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/register"><i className="fa fa-plus mx-1" aria-hidden="true"></i>Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" tabIndex="-1" aria-disabled="true"><i className="fa fa-question mx-1" aria-hidden="true"></i>About Us</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

Header.defaultProps = {
    brand: "Hopeful Haven Animals"
}

Header.propTypes = {
    brand: PropTypes.string.isRequired
}
export default Header
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class User extends Component {
    state = {
        showInfo: false
    }

    onHandleClick = (e) => {
        this.setState({ showInfo: !this.state.showInfo })
    }

    onDeleteUser = (e) => {
        //create a new property and pass this property to parent(Users) component
        this.props.handleDeleteUser()
    }

    render() {
        const { name, email, phone } = this.props.User
        const { showInfo } = this.state
        return (
            <div className="card mb-1">
                <div className='card-header'>
                    <i className="fa fa-user mx-1" aria-hidden="true"></i>
                    {name}
                    <i className="fa fa-chevron-down mx-1" aria-hidden="true" onClick={this.onHandleClick}></i>
                    <i className="fa fa-trash float-end" aria-hidden="true" onClick={this.onDeleteUser}></i>
                </div>
                {showInfo ? <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item">Email: {email}</li>
                        <li className="list-group-item">Phone: {phone}</li>
                    </ul>
                </div> : null}

            </div>
        )
    }
}

User.defaultProps = {
    name: "Unknown",
    email: "Unknown",
    phone: "Unknown"
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
}
export default User
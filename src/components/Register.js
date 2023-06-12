import React, { Component } from 'react'
import InputMolecule from "./molecules/InputMolecule"

class Register extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        password: "",
        errors: {}
    }

    onHandleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onHandleSubmit = (e) => {
        e.preventDefault();

        const { name, email, password, phone } = this.state

        if (name === "") {
            this.setState({ errors: { name: "Name is required." } })
            return;
        }

        if (email === "") {
            this.setState({ errors: { email: "Email is required." } })
            return
        }

        if (password === "") {
            this.setState({ errors: { email: "Password is required." } })
            return
        }

        if (phone === "") {
            this.setState({ errors: { phone: "Phone number is required." } })
            return
        }


        const newUser = {
            name: name,
            email: email,
            password: password,
            phone: phone
        }

        console.log(newUser)

        this.setState({ name: "", email: "", password: "", phone: "", errors: {} })

    }

    render() {
        const { name, email, password, phone, errors } = this.state
        return (
            <div className='card'>
                <div className="card-header">User Registration Form</div>
                <div className="card-body">
                    <form onSubmit={this.onHandleSubmit}>
                        <InputMolecule
                            labelId="name"
                            labelName="Name"
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.onHandleChange}
                            id="name"
                            placeholder="Please insert full name."
                            error={errors.name} />

                        <InputMolecule
                            labelId="email"
                            labelName="Email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.onHandleChange}
                            placeholder="Please insert valid email address."
                            id="email"
                            error={errors.email}
                        />

                        <InputMolecule
                            labelId="password"
                            labelName="Password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.onHandleChange}
                            placeholder="Please insert valid password."
                            id="password"
                            error={errors.password}
                        />  

                        <InputMolecule
                            labelId="phone"
                            labelName="Phone"
                            type="tel"
                            name="phone"
                            value={phone}
                            onChange={this.onHandleChange}
                            placeholder="Please insert your phone number."
                            id="phone"
                            error={errors.phone}
                        />
                        <input type='submit' value="register" className='btn btn-outline-success float-end' />
                    </form>
                </div>
            </div>
        )
    }
}
export default Register
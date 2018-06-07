import React, { Component } from 'react';
import logo from './logo.svg';
import users from './users.jpg';
import './App.css';


const Images = function() {
    return ( <
        div className = 'images' >
        <
        img src = { users }
        alt = 'homeImages' / >
        <
        img src = { users }
        alt = 'homeImages' / >
        <
        img src = { users }
        alt = 'homeImages' / >
        <
        img src = { users }
        alt = 'homeImages' / >
        <
        img src = { users }
        alt = 'homeImages' / >
        <
        img src = { users }
        alt = 'homeImages' / >
        <
        img src = { users }
        alt = 'homeImages' / >
        <
        img src = { users }
        alt = 'homeImages' / >

        <
        /div>
    )
}




const FormInputs = function() {
    return ( <
        form className = 'form' >
        <
        label > First Name: < /label>  <
        input type = 'text' / > < br / >
        <
        label > Last Name: < /label> <
        input type = 'text' / > < br / >
        <
        label > Email: < /label> <
        input type = 'text' / > < br / >
        <
        label > Comfirm email: < /label> <
        input type = 'text' / > < br / >
        <
        label > Country: < /label> <
        input type = 'text' / > < br / >
        <
        label > Date Of Birth: < /label> <
        input type = 'text' / > < br / >
        <
        label > Password: < /label> <
        input type = 'password' / > < br / >
        <
        label > Confirm Password: < /label> <
        input type = 'password' / >
        <
        div className = 'submit' >
        <
        input type = 'submit'
        value = 'Sign Up' / >
        <
        /div> < /
        form >
    )
}


class Neichatonation extends Component {
    // constructor(props) {
    //   super(props);
    // }

    render() {
        return ( <
            div >

            <
            header >
            <
            div className = "logo" >
            <
            img src = { logo }
            alt = 'logo' / >
            <
            /
            div > <
            span className = "nav" >
            <
            a href = "google.com"
            title = "sign in to your account" > Sign in < /a>  <
            a href = "google.com"
            title = "take a tour" > Tour < /a>  <
            a href = "google.com"
            title = "find out about us" > About < /a>  <
            a href = "google.com"
            title = "upgrade to enjoy features" > Upgrade < /a> < /
            span >

            <
            /header>  <
            div className = 'contain' >
            <
            Images / >
            <
            FormInputs / >
            <
            /div> < /
            div >

        )
    }
}



export default Neichatonation;
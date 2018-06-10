import React, { Component } from 'react';
import './App.css';

// const Images = function () {
//     return (
//         <div className='images' >
//             <img src={users} alt='homeImages' />
//             <img src={users} alt='homeImages' />
//             <img src={users} alt='homeImages' />
//             <img src={users} alt='homeImages' />
//             <img src={users} alt='homeImages' />
//             <img src={users} alt='homeImages' />
//             <img src={users} alt='homeImages' />
//             <img src={users} alt='homeImages' />
//         </div>
//     )
// }

const Footer = function() {
  return <div className="footer" />;
};

const FormInputs = function() {
  return (
    <div className="form">
      <form>
        <label> First Name: </label>
        <input type="text" />
        <label> Last Name: </label>
        <input type="text" />
        <label> Email: </label>
        <input type="text" />
        <label> Comfirm email: </label>
        <input type="text" />
        <label> Country: </label>
        <input type="text" />
        <label> Date Of Birth: </label>
        <input type="text" />
        <label> Password: </label>
        <input type="password" />
        <label> Confirm Password: </label>
        <input type="password" />
        <div className="submit">
          <input type="submit" value="Sign Up" />
        </div>
      </form>
    </div>
  );
};

class Neichatonation extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <header>
          <div className="logo">
            <h1>Neichatonation</h1>
          </div>
          <span className="nav">
            <a href="google.com" title="sign in to your account">
              {' '}
              Sign in{' '}
            </a>
            <a href="google.com" title="take a tour">
              {' '}
              Tour{' '}
            </a>
            <a href="google.com" title="find out about us">
              {' '}
              About{' '}
            </a>
            <a href="google.com" title="upgrade to enjoy features">
              {' '}
              Upgrade{' '}
            </a>
          </span>
        </header>
        <div className="contain">
          <FormInputs />
          {/* <Images /> */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Neichatonation;

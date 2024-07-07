import React, { useState } from 'react';
import '../LandingPage.css';
import Header from './Header.jsx';
import Features from './Features.jsx';
import Review from './Reviews.jsx';
import Sign from './Sign.jsx';
import Footer from './Footer.jsx';

const LandingPage = (props) => {

  // const [sign, setSign] = useState("up");

  // const toggleSign = () => {
  //   setSign(sign === "up" ? "in" : "up");
  // }

  return (
    <>
      <Header mode={props.mode} />
      <Features mode={props.mode} />
      <Review mode={props.mode} />
      <Sign changeUser={props.changeUser} sign={props.sign} toggleSign={props.toggleSign} mode={props.mode} />
      <Footer mode={props.mode} />
    </>
  );
}

export default LandingPage;

import React, { useState, useEffect } from 'react';
import WOW from 'wowjs';
import 'animate.css';
import Intro from './sections/Intro';
import ByWho from './sections/ByWho';
import Register from './sections/Register';
import Footer from './sections/Footer';
import { Navigate, useNavigate } from "react-router-dom";

const About = () => {

  const [authenticated, setauthenticated] = useState(localStorage.getItem("YPToken") || false);

    useEffect(() => {
        new WOW.WOW({
          live: true,
          offset:       100,

        }).init();
      }, [])

    return (
        <>
            <Intro />

            <div className='divider wow animate__animated animate__fadeInUp'></div>

            <ByWho />

            <div className="divider wow animate__animated animate__fadeInUp"></div>
            {!authenticated ? (
              <>
              <Register />
              <div className="divider wow animate__animated animate__fadeInUp"></div>
              </>
            ):""}


            <Footer />
        </>
    );
}

export default About;

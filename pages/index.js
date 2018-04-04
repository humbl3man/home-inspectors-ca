import React from 'react';
import Link from 'next/link';

import Header from './../components/Header';

import './home.scss';

export default () => (
  <div id="site">
    <Header page="home" />
    <main id="content">
      <div className="jumbotron hero text-white">
        <div className="container text-center">
          <h1 className="hero__heading animated fadeInDown">HOME INSPECTORS CALIFORNIA</h1>
          <p className="hero__lead lead animated fadeInUp" style={{ animationDelay: '1.1s' }}>
            Bringing Peace Of Mind Back To Your Home
          </p>
          <Link href="/contact-us">
            <a
              style={{ width: '250px', animationDelay: '2.1s' }}
              className="animated fadeIn hero__cta btn btn-primary btn-lg d-block mx-auto"
            >
              Contact Us
            </a>
          </Link>
        </div>
      </div>
    </main>
    {/* <Footer /> */}
  </div>
);

import React from 'react';

import Header from './../components/Header';
import Footer from './../components/Footer';

import './content.scss';

export default () => (
  <div id="site">
    <Header page="contact" title="contact us" />
    <main id="content" className="content">
      <div className="container">
        <h1 className="content__heading">Contact Us</h1>
      </div>
    </main>
    <Footer />
  </div>
);

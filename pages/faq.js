import React from 'react';

import Header from './../components/Header';
import Footer from './../components/Footer';

import './content.scss';

export default () => (
  <div id="site">
    <Header page="faq" title="faq" />
    <main id="content" className="content">
      <div className="container">
        <h1 className="content__heading">Frequently Asked Questions</h1>
        <h4 className="lead">What is a Home Inspection?</h4>
        <p>A general home inspection is a non-invasive, visual examination of the accessible areas of a residential property (as delineated below), performed for a fee, which is designed to identify defects within specific systems and components defined by these Standards that are both observed and deemed material by the inspector.  The scope of work may be modified by the Client and Inspector prior to the inspection process.</p> 

<h4 className="lead">What do the services cost?</h4>

<p>Home inspections are priced individually. The price is based generally on the property’s size, age and location. Please call for a quote and appointment.</p>

<p className="lead">Are you open on weekends?</p>

<p>Yes, I am available on weekends based on appointment.</p>

<p className="lead">How long does the inspection take?</p>

<p>A home inspection typically takes between 2 to 3 hours. We suggest that you leave small children with a sitter if possible as you will want to follow the inspector closely as he inspects your new home and explains his findings.</p>
      </div>
    </main>
    <Footer />
  </div>
);
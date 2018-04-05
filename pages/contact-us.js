import React, { Component } from 'react';
import axios from 'axios';

import Header from './../components/Header';
import Footer from './../components/Footer';

import './content.scss';

const CONTACT_ENDPOINT = 'https://formspree.io/apkomatic@gmail.com';

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      formSubmitted: false,
      name: '',
      email: '',
      phone: '',
      address: '',
      message: ''
    };

    this.onValueUpdate = this.onValueUpdate.bind(this);
    this.submitContactInfo = this.submitContactInfo.bind(this);
  }

  onValueUpdate(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitContactInfo(e) {
    e.preventDefault();
    if (this.state.email) {
      axios
        .post(CONTACT_ENDPOINT, {
          name: this.state.name,
          email: this.state.email,
          phone: this.state.phone,
          address: this.state.address,
          message: this.state.message
        })
        .then(() => {
          this.setState({
            formSubmitted: true
          });
        })
        .catch(err => {
          console.error(err);
        });
    }
  }

  render() {
    if (this.state.formSubmitted) {
      return (
        <p className="lead text-center">
          <i className="fa fa-hand-peace-o" /> Thank you for contacting us! <i className="fa fa-hand-peace-o" />
        </p>
      );
    }

    const { name, email, phone, address, message } = this.state;

    return (
      <form onSubmit={this.submitContactInfo} className="content__form" method="POST">
        <div className="form-group">
          <input
            className="form-control"
            id="name"
            name="name"
            onChange={this.onValueUpdate}
            placeholder="Name"
            type="text"
            value={name}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            id="email-address"
            name="email"
            onChange={this.onValueUpdate}
            placeholder="Email*"
            required
            type="email"
            value={email}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Phone"
            name="phone"
            value={phone}
            onChange={this.onValueUpdate}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            id="address"
            name="address"
            onChange={this.onValueUpdate}
            placeholder="Address (Street, City, ZipCode)"
            type="text"
            value={address}
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            cols="30"
            id=""
            name="message"
            onChange={this.onValueUpdate}
            placeholder="Message"
            rows="10"
            value={message}
          />
        </div>
        <input
          type="text"
          name="_gotcha"
          style={{
            display: 'none'
          }}
        />
        <input type="hidden" name="_subject" value="You got a contact request" />
        <button type="submit" className="btn btn-lg d-block w-100 text-white">
          Send <i className="fa fa-telegram" />
        </button>
      </form>
    );
  }
}

export default () => (
  <div id="site">
    <Header page="contact" title="contact us" />
    <main id="content" className="content">
      <div className="container">
        <h1 className="content__heading">Contact Us</h1>
        <div className="row">
          <section className="col-lg-6">
            <p className="text-center">
              <i className="fa fa-bell" /> We will reach out to you within 24 hours of request.
            </p>
            <hr />
            <ContactForm />
          </section>

          <section className="contact-callout col-lg-6 text-center d-flex justify-content-center flex-column border">
            {/* <h4>Home Inspectors California</h4>
            <p>(858)-247-2631</p>
            <h4>Hours</h4>
            <p>By Appointment</p> */}
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

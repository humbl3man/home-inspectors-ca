import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';

import './Header.scss';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      mobileNavOpen: false,
      links: [
        {
          id: 1,
          href: '/',
          label: 'home'
        },
        {
          id: 2,
          href: '/services',
          label: 'services'
        },
        {
          id: 3,
          href: '/about-us',
          label: 'about us'
        },
        {
          id: 4,
          href: '/contact-us',
          label: 'contact'
        },
        {
          id: 5,
          href: '/faq',
          label: 'FAQ'
        }
      ]
    };
  }

  renderLinks(options) {
    const { isMobile } = options;
    const { links } = this.state;
    const { page } = this.props;
    return (
      <nav className={`${isMobile ? (this.state.mobileNavOpen ? 'mobile-nav open' : 'mobile-nav') : 'header__nav'}`}>
        {links.map(link => {
          const { id, href, label } = link;
          return (
            <Link key={id} href={href}>
              <a className={`${page === label.toLowerCase() ? 'active' : ''}`}>{label}</a>
            </Link>
          );
        })}
      </nav>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>Home Inspectors California</title>
        </Head>
        <header className="header">
          <div className="container header__content">
            <Link href="/">
              <a className="header__logo navbar-brand">Home Inspectors California</a>
            </Link>
            <i
              className="header__mobile-toggle fa fa-bars"
              onClick={() => {
                this.setState({
                  mobileNavOpen: !this.state.mobileNavOpen
                });
              }}
            />
            {this.renderLinks({ isMobile: false })}
          </div>
        </header>
        {this.renderLinks({ isMobile: true })}
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  page: PropTypes.string.isRequired,
  title: PropTypes.string
};

Header.defaultProps = {
  title: ''
};

export default Header;
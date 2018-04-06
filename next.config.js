const withSass = require('@zeit/next-sass');

module.exports = withSass({
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/services': { page: '/services' },
      '/about-us': { page: '/about-us' },
      '/contact-us': { page: '/contact-us' },
      '/faq': { page: '/faq' }
    };
  }
});

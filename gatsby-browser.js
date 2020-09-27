/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

const React = require('react')
const Layout = require('./src/components/Layout').default
const { GlobalStyles } = require('./src/styles')

exports.wrapPageElement = ({ element }) => (
  <>
    <GlobalStyles />
    <Layout> { element } </Layout>
  </>
)

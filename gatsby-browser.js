/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

const React = require('react')
const Layout = require('./src/components/Layout').default

exports.wrapPageElement = ({ element }) => <Layout> { element } </Layout>

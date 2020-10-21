const React = require('react')
const Layout = require('./src/components/layout').default
const { CarProvider } = require('./src/context')

exports.wrapRootElement = ({ element }) => (
  <CarProvider>
    <Layout>
      {element}
    </Layout>
  </CarProvider>
)
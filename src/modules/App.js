import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

export default React.createClass({
  render: function () {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
})

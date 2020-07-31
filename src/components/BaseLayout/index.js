import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';

function BaseLayout({ children }) {
  return (
    <>
      <Menu />
        {children}
      <Footer />
    </>
  )
}

export default BaseLayout;
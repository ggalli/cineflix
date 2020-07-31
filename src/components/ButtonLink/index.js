import React from 'react';

function ButtonLink({children, className, href}) {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  )
}

export default ButtonLink;
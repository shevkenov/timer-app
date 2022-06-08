import React from 'react'

const Heading = ({ children, extraClasses }) => {
    const classes = "text-4xl text-green-900 font-semibold " + extraClasses
  return (
    <div className={classes}>{children}</div>
  )
}

export default Heading
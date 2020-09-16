import React from 'react'
import PropTypes from 'prop-types'

import moduleStyles from './phoneCard.module.scss'

export default function PhoneCard({
  children,
  className,
  onClick,
  img,
  title,
  ...otherProps }) {

  return (
    <div {...otherProps} className={`${moduleStyles.productCard} ${className}`} onClick={onClick}>
      {
        img ?
          <img
            src={img.path}
            className={`${moduleStyles.imgInCard} ${moduleStyles.insideCardMargin} ${img.styles}`}>
          </img> :
          false
      }

      {
        title ?
          <h2
            className={`${moduleStyles.title} ${moduleStyles.insideCardMargin} ${title.styles}`}>
            {title.text}
          </h2> :
          false
      }
      {children}
    </div>
  )
}

PhoneCard.defaultProps = {
  children: null,
  className: undefined,
  onClick: () => { },
  img: {
    path: null,
    styles: null
  },
  title: {
    styles: null,
    text: null
  }
}

PhoneCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  img: PropTypes.shape({
    path: PropTypes.string,
    styles: PropTypes.string
  }),
  title: PropTypes.shape({
    styles: PropTypes.string,
    text: PropTypes.string
  })
}

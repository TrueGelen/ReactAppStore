import React from 'react'
import PropTypes, { object } from 'prop-types'

import moduleStyles from './index.module.scss'

export default function BtnAddToCart({
  className,
  addClassName,
  onAdd,
  onRemove,
  inCart,
  ...otherProps }) {

  let btnClass = className ? className : moduleStyles

  const add = (e) => {
    e.stopPropagation()
    onAdd()
  }

  const remove = (e) => {
    e.stopPropagation()
    onRemove()
  }

  return (
    inCart ?
      <div {...otherProps}
        className={`${moduleStyles.noselect}
				${typeof btnClass === 'object' ? btnClass.mainStyles : btnClass}
				${typeof btnClass === 'object' ? btnClass.inCart : btnClass}
				${addClassName}`}
        onClick={remove}>
        Delete from cart
			</div>
      :
      <div {...otherProps}
        className={`${moduleStyles.noselect}
				${typeof btnClass === 'object' ? btnClass.mainStyles : btnClass}
				${typeof btnClass === 'object' ? btnClass.nonInCart : btnClass}
				${addClassName}`}
        onClick={add}>
        Add to cart
			</div>
  )
}

BtnAddToCart.defaultProps = {
  children: null,
  className: undefined,
  addClassName: '',
  onAdd: () => { },
  onRemove: () => { },
  inCart: false
}

BtnAddToCart.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  addClassName: PropTypes.string,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  inCart: PropTypes.bool
}

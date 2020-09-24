import React from 'react'
import PropTypes, { object } from 'prop-types'

import moduleStyles from './index.module.scss'

export default function BtnAddToCart({
  className,
  addClassName,
  onAdd,
  onRemove,
  inCart,
  innerOnAdd,
  innerOnRemove,
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
        {innerOnRemove}
      </div>
      :
      <div {...otherProps}
        className={`${moduleStyles.noselect}
				${typeof btnClass === 'object' ? btnClass.mainStyles : btnClass}
				${typeof btnClass === 'object' ? btnClass.nonInCart : btnClass}
				${addClassName}`}
        onClick={add}>
        {innerOnAdd}
      </div>
  )
}

BtnAddToCart.defaultProps = {
  className: undefined,
  addClassName: '',
  onAdd: () => { },
  onRemove: () => { },
  inCart: false,
  innerOnAdd: 'Add to cart',
  innerOnRemove: 'Delete from cart'
}

BtnAddToCart.propTypes = {
  className: PropTypes.string,
  addClassName: PropTypes.string,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  inCart: PropTypes.bool,
  innerOnAdd: PropTypes.any,
  innerOnRemove: PropTypes.any
}

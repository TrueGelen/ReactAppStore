import React from 'react'
import PropTypes, { object } from 'prop-types'

import moduleStyles from './index.module.scss'

export default function BtnAddToCart({ className, addClassName, onAdd, onRemove, inCart, ...otherProps }) {

	let btnClass = className ? className : moduleStyles

	return (
		inCart ?
			<div {...otherProps}
				className={`${moduleStyles.noselect}
				${typeof btnClass === 'object' ? btnClass.mainStyles : btnClass}
				${typeof btnClass === 'object' ? btnClass.inCart : btnClass}
				${addClassName}`}
				onClick={onRemove}>
				Delete from cart
			</div>
			:
			<div {...otherProps}
				className={`${moduleStyles.noselect}
				${typeof btnClass === 'object' ? btnClass.mainStyles : btnClass}
				${typeof btnClass === 'object' ? btnClass.nonInCart : btnClass}
				${addClassName}`}
				onClick={onAdd}>
				Add to cart
			</div>
	)
}

BtnAddToCart.defaultProps = {
	children: null,
	className: undefined,
	onAdd: () => { },
	onRemove: () => { },
	inCart: false,
	addClassName: ''
}

BtnAddToCart.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	onAdd: PropTypes.func,
	onRemove: PropTypes.func,
	inCart: PropTypes.bool,
	addClassName: PropTypes.string
}

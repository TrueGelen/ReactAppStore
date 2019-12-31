import React from 'react'
import PropTypes from 'prop-types'

import moduleStyles from './productCard.module.scss'

export default function ProductCard({ children, className, addClassName, onClick, ...otherProps }) {

	const classCard = className ? className : moduleStyles.productCard

	return (
		<div {...otherProps} className={`${classCard} ${addClassName}`} onClick={onClick}>
			{children}
		</div>
	)
}

ProductCard.defaultProps = {
	children: null,
	className: undefined,
	onClick: () => { },
	addClassName: ''
}

ProductCard.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	onClick: PropTypes.func,
	addClassName: PropTypes.string
}

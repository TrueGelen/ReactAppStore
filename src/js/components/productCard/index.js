import React from 'react'
import PropTypes from 'prop-types'

import moduleStyles from './productCard.module.scss'
import MainStyles from '../../../scss/main.module.scss'

export default function ProductCard({ children, className, onClick, ...otherProps }) {
	const classCard = className ? className : moduleStyles.productCard
	return (
		<div className={`${classCard}`} onClick={onClick}>
			{children}
		</div>
	)
}

ProductCard.defaultProps = {
	children: null,
	className: undefined,
	onClick: () => { }
}

ProductCard.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	onClick: PropTypes.func
}

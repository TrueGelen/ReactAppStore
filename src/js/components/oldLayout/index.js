import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from '@material-ui/core/Checkbox';
import moduleStyles from './styles.module.scss'

export default function PageLayout({
	className,
	title,
	products,
	productsData,
	filters,
	...props }) {

	/* const [checked, setChecked] = React.useState(true);

	const handleChange = (event) => {
		setChecked(event.target.checked);
	}; */

	let checkboxes = []

	for (let key in filters) {
		checkboxes.push(<div key={filters[key]}>
			<h4>{filters[key]}</h4>
			<div>
				{productsData.map(prod => {
					return (
						<div key={prod.data().description[key]}>
							<Checkbox
								defaultChecked
								color="primary"
								inputProps={{ 'aria-label': 'secondary checkbox' }}
							/>
							<p>{prod.data().description[key]}</p>
						</div>
					)
				})}
			</div>
		</div>)
	}

	return (
		<>
			<h1 className={` ${moduleStyles.title}`}>{title.text}</h1>

			<div className={moduleStyles.pageWrapper}>
				<div className={moduleStyles.filtersWrapper}>
					<p className={moduleStyles.filterTitle}>Фильтры</p>
					<div className={moduleStyles.filters}>
						<div>
							{checkboxes}
						</div>
					</div>
				</div>

				<div className={moduleStyles.productsWrapper}>
					{products}
				</div>
			</div>
		</>
	)
}

PageLayout.defaultProps = {
	className: undefined,
	title: {
		styles: null,
		text: null
	},
	products: null
}

PageLayout.propTypes = {
	className: PropTypes.string,
	title: PropTypes.shape({
		styles: PropTypes.string,
		text: PropTypes.string
	}),
	products: PropTypes.arrayOf(PropTypes.node)
}
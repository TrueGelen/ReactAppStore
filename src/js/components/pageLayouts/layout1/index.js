/* lib */
import React from 'react'
import PropTypes from 'prop-types'

/* styles */
import moduleStyles from './styles.module.scss'

export default function PageLayout({
  className,
  title,
  products,
  ...otherProps }) {

  return (
    <>
      <h1 className={` ${moduleStyles.title}`}>{title.text}</h1>

      <div className={moduleStyles.pagePhoneWrapper}>
        <div className={moduleStyles.filtersWrapper}>
          <p className={moduleStyles.filterTitle}>Фильтры</p>
          <div className={moduleStyles.filters}>
            <p>Место для фильтров</p>
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
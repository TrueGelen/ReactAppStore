/* lib */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Checkbox from '@material-ui/core/Checkbox';


import LabeledTwoThumbs from '../../range';


/* styles */
import moduleStyles from './styles.module.scss'

export default function PageLayout({
  className,
  title,
  products,
  filters,
  filterLabels,
  onFilter,
  onPriceFilter,
  ...otherProps }) {

  const [mobFilters, setMobFilters] = useState(false)

  const openMobFilters = () => {
    setMobFilters(true)
  }

  const hideMobFilters = () => {
    setMobFilters(false)
  }

  let checkboxes = []

  for (let key in filters) {
    if (key !== "price") {
      checkboxes.push(
        <div key={key}
          className={moduleStyles.filterWrap}>
          <h4 className={moduleStyles.filterTitle}>{filterLabels[key]}</h4>
          <div className={moduleStyles.filterBlock}>
            {
              Object.keys({ ...filters[key] }).map(val => {
                return (
                  <div key={val}
                    className={moduleStyles.checkBoxFilter}>
                    <Checkbox
                      checked={filters[key][val]}
                      color="primary"
                      inputProps={{ 'aria-label': 'secondary checkbox' }}
                      onChange={(e) => { onFilter(key, val) }}
                    />
                    <p>{val}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    }
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
              <div className={moduleStyles.filterWrap}>
                <h4
                  className={`${moduleStyles.filterTitle} ${moduleStyles.filterTitle_mb30px}`}>
                  Цена
                </h4>
                <div className={moduleStyles.filterBlock}>
                  <LabeledTwoThumbs
                    className={moduleStyles.rangeSlider}
                    min={filters.price.min}
                    max={filters.price.max}
                    step={1000}
                    rangeChanger={onPriceFilter}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>


        <div
          className={moduleStyles.filterButton}
          onClick={openMobFilters}>
          <p>Фильтры</p>
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
  products: null,
  filters: null,
  filterLabels: null,
  onPriceFilter: () => { },
  onFilter: () => { }
}

PageLayout.propTypes = {
  className: PropTypes.string,
  title: PropTypes.shape({
    styles: PropTypes.string,
    text: PropTypes.string
  }),
  products: PropTypes.arrayOf(PropTypes.node),
  filters: PropTypes.object,
  filterLabels: PropTypes.object,
  onPriceFilter: PropTypes.func,
  onFilter: PropTypes.func
}
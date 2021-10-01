import React, { FC, memo, useCallback, useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import LabeledTwoThumbs from "../range";
import styles from "./styles.module.scss";
import { FILTERS, PRICE } from "../../utils/localization";
import { useLocalization } from "../../utils/decorators/withLoc/useLocalization";
import MobCloseButton from "./components/MobCloseButton/MobCloseButton";

export interface FilterPanelProps {}

// {
//   className,
//   filters,
//   filterLabels,
//   onFilter,
//   onPriceFilter,
//   onCloseMobFilters,
//   ...otherProps
// }

const FilterPanel: FC<FilterPanelProps> = (props) => {
  const {} = props;
  const localization = useLocalization();
  /** isMobFPOpened - флаг открыта ли мобильная фильтр панель */
  const [isMobFPOpened, setIsMobFilterPanelOpened] = useState(false);

  const handleOpenMobFilterPanel = useCallback(() => setIsMobFilterPanelOpened(true), []);
  const handleHideMobFilterPanel = useCallback(() => setIsMobFilterPanelOpened(false), []);

  let checkboxes = [];

  for (let key in filters) {
    if (key !== "price") {
      checkboxes.push(
        <div key={key} className={styles.filterWrap}>
          <h4 className={styles.filterTitle}>{filterLabels[key]}</h4>
          <div className={styles.filterBlock}>
            {Object.keys({ ...filters[key] }).map((val) => {
              return (
                <div key={val} className={styles.checkBoxFilter}>
                  <Checkbox
                    checked={filters[key][val]}
                    color="primary"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                    onChange={(e) => {
                      onFilter(key, val);
                    }}
                  />
                  <p>{val}</p>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      <div className={styles.filterButton} onClick={handleOpenMobFilterPanel}>
        <p className={styles.filterButton__text}>{localization.getLocalized(FILTERS)}</p>
      </div>
      <div className={`${styles.filterPanel} ${isMobFPOpened ? styles.filterPanel_mob : null}`}>
        <MobCloseButton onClose={handleHideMobFilterPanel} />

        <p className={styles.title}>{localization.getLocalized(FILTERS)}</p>
        <div className={styles.filters}>
          <div>
            {checkboxes}
            <div className={styles.filterWrap}>
              <h4 className={`${styles.filterTitle} ${styles.filterTitle_price}`}>
                {localization.getLocalized(PRICE)}
              </h4>
              <div className={styles.filterBlock}>
                <LabeledTwoThumbs
                  className={styles.rangeSlider}
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
    </div>
  );
};

export default memo(FilterPanel);

Filters.defaultProps = {
  className: undefined,
  filters: null,
  filterLabels: null,
  onPriceFilter: () => {},
  onFilter: () => {},
  onCloseMobFilters: () => {},
};

Filters.propTypes = {
  className: PropTypes.string,
  filters: PropTypes.object,
  filterLabels: PropTypes.object,
  onPriceFilter: PropTypes.func,
  onFilter: PropTypes.func,
  onCloseMobFilters: PropTypes.func,
};

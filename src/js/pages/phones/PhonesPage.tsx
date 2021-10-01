import { head, isNil, map } from "lodash";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import React, { FC, useEffect, useMemo, useState } from "react";
import PageLayout from "../../components/pageLayouts/layout2";
import PhoneCard from "../../components/productCard/phone/PhoneCard";
import { urlBuilder } from "../../routes/routes";
import {
  DIAGONAL,
  FRONT_CAMERA,
  MAIN_CAMERA,
  MEMORY_CAPACITY,
  OPERATION_SYSTEM,
  PHONES,
  PROCESSOR,
} from "../../utils/localization";
import styles from "./phones.module.scss";
import PhonePlaceholderVSG from "../../../icons/phonePlaceholder.svg";
import Filters from "../../components/filtersOnProductPage";
import { TProductData } from "../../models/parentModels/ProductModel";
import { TPhoneDescription } from "../../models/PhoneModel";
import { TLocData } from "../../utils/Localization/Localization";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import { IWithLocProps, withLoc } from "../../utils/decorators/withLoc/withLocHOC";
import { IWithRootStoreProps, withRootStore } from "../../utils/decorators/withRootStore/withRootStore";

interface IPhonesPageProps extends IWithRootStoreProps, IWithLocProps {}

// todo: перенести в модель
// const filtersLocalization: {
//   [key in TProductData<TPhoneDescription>]: TLocData;
// } = {
//   diagonal: DIAGONAL,
//   processor: PROCESSOR,
//   os: OPERATION_SYSTEM,
//   memory: MEMORY_CAPACITY,
//   frontCamera: FRONT_CAMERA,
//   mainCamera: MAIN_CAMERA,
// };

const PhonesPage: FC<IPhonesPageProps> = (props) => {
  const { rootStore, localization } = props;
  const phonesStore = rootStore.getPhonesStore();
  const phoneFiltersStore = rootStore.getPhoneFiltersStore();
  const { isProductsLoading, products } = phonesStore.getProductsAndIsProductsLoading();
  const { viewFilters, isFiltersLoading } = phoneFiltersStore.getViewFiltersAndIsFiltersLoading();

  //get phones from server
  useEffect(() => {
    phonesStore.requestProducts(localization.getLanguage());
    phonesStore.requestProducts(localization.getLanguage());
  }, [localization, phonesStore]);

  const productCards = useMemo(() => {
    return map(products, (product) => {
      const partPath = head(product.getImagesPath());
      const image = !isNil(partPath) ? phonesStore.getImageURL(partPath) : <PhonePlaceholderVSG />;
      return (
        <PhoneCard
          key={product.getId()}
          className={styles.card}
          image={image}
          title={product.getTitle()}
          price={`${product.getPrice()} р.`}
          // onClick={() => {
          //   props.history.push(urlBuilder("phone", phone.id));
          // }}
          // button={<BtnAddToCart
          // 	inCart={cart.inCart(phone.id)}
          // 	onAdd={() => { cart.addToCart(phone.id) }}
          // 	onRemove={() => { cart.removeFromCart(phone.id) }} />}
        />
      );
    });
  }, [phonesStore, products]);

  return (
    <>
      <h1 className={styles.title}>{localization.getLocalized(PHONES)}</h1>
      <div className={styles.pageWrapper}>
        <FilterPanel
          filters={filters}
          filterLabels={filterLabels}
          onFilter={onFilter}
          onPriceFilter={onPriceFilter}
          isMobFilterOpen={isMobileFilters}
          onCloseMobFilters={handleHideMobileFilters}
        />
        <div className={styles.productsWrapper}>{products}</div>
      </div>
    </>
  );

  // return (
  //   <>
  //     <PageLayout
  //       title={{ text: localization.getLocalized(PHONES) }}
  //       products={products}
  //       // filters={{}}
  //       // filterLabels={{}}
  //       // onFilter={{}}
  //       // onPriceFilter={() => {}}
  //     />
  //   </>
  // );
};
// @ts-ignore todo: избавиться от ts-ignore
export default withRootStore(withLoc(observer(PhonesPage)));

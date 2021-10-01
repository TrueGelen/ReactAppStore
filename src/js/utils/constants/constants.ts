export const BASE_PHONE_IMAGES_URL = "/assets/images/phones/";
export const BASE_TELEVISION_IMAGES_URL = "/assets/images/televisions/";
export const BASE_TABLET_IMAGES_URL = "/assets/images/tablets/";

// for gitHub page
// export const BASE_PHONE_IMAGES_URL = "ReactAppStore/dist/assets/images/phones/";
// export const BASE_TELEVISION_IMAGES_URL = "ReactAppStore/dist/assets/images/televisions/";
// export const BASE_TABLET_IMAGES_URL = "ReactAppStore/dist/assets/images/tablets/";

// todo: наверняка можно сделать baseUrl = ReactAppStore/dist/assets/ и функцию которая бы клеила остатки к этому адресу.
// и с помощью webpack'а менять этот baseUrl на /assets/ в зависимости от команды для сборки

export const PHONE_MODEL_TYPENAME = "phone";
export const TABLET_TYPENAME = "tablet";
export const TELEVISION_TYPENAME = "television";

export const RANGE_FILTER_TYPENAME = "range_filter";
export const BOOL_FILTER_TYPENAME = "bool_filter";
export const LIST_FILTER_TYPENAME = "list_filter";

export const FILTERS_COLLECTION_NAME = "filters";
export const PHONE_FILTERS_DOC_NAME = "phoneFilters";

export const PHONES_COLLECTION_NAME_RU = "v2_ru_phones";
export const TELEVISIONS_COLLECTION_NAME_RU = "v2_ru_televisions";
export const TABLETS_COLLECTION_NAME_RU = "v2_ru_tablets";

export const PHONES_COLLECTION_NAME_EN = "v2_en_phones";
export const TELEVISIONS_COLLECTION_NAME_EN = "v2_en_televisions";
export const TABLETS_COLLECTION_NAME_EN = "v2_en_tablets";

export const RU_LOC = "ru";
export const EN_LOC = "en";

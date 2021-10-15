import React, { FC, memo, useMemo } from "react";
import { NavLink } from "react-router-dom";
import _s from "./styles.module.scss";
import mainStyles from "../../../scss/main.module.scss";
import { routesMap } from "../../routes/routes";
import { PHONES, TABLETS, TELEVISIONS } from "../../utils/localization";
import { useLocalization } from "../../utils/decorators/withLoc/useLocalization";
import ShopLogo from "../ShopLogo/ShopLogo";
import Menu from "../Menu/Menu";
import CartButton from "../buttons/CartButton/CartButton";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import { SelectInputProps } from "@material-ui/core/Select/SelectInput";
import { TLanguage } from "../../utils/Localization/Localization";

export interface HeaderDesktopProps {
  handleLocalizationChange: SelectInputProps<TLanguage>["onChange"];
}

export const HeaderDesktop: FC<HeaderDesktopProps> = (props) => {
  const { handleLocalizationChange } = props;
  const localization = useLocalization();

  const menuItems = useMemo(() => {
    return [
      <NavLink
        key={routesMap.televisions}
        to={routesMap.televisions}
        activeClassName={_s.activeLink}
        className={_s.menuItem}
      >
        <p className={_s.menuItem__text}>{localization.getLocalized(TELEVISIONS)}</p>
      </NavLink>,
      <NavLink
        key={routesMap.phones}
        to={routesMap.phones}
        activeClassName={_s.activeLink}
        className={_s.menuItem}
      >
        <p className={_s.menuItem__text}>{localization.getLocalized(PHONES)}</p>
      </NavLink>,
      <NavLink
        key={routesMap.tablets}
        to={routesMap.tablets}
        activeClassName={_s.activeLink}
        className={_s.menuItem}
      >
        <p className={_s.menuItem__text}>{localization.getLocalized(TABLETS)}</p>
      </NavLink>,
    ];
  }, [localization]);

  return (
    <header className={_s.header}>
      <div className={`${mainStyles.container}`}>
        <div className={`${_s.headerWrapper} ${mainStyles.noselect}`}>
          <ShopLogo />
          <Menu items={menuItems} />
          <CartButton />
          <LanguageSelect onChange={handleLocalizationChange} />
          {/* todo: удалить, как применю стили
					<div className={_s.language}>
                    <Select
                      label={"Language"}
                      value={localization.getLanguage()}
                      itemList={Localization.locList}
                      onChange={this.changeLocalization}
                      selectClassName={_s.languageSelect}
                      itemClassName={_s.languageItemSelect}
                      iconClassName={_s.languageArrowIcon}
                      rootClassName={_s.languageSelectRoot}
                      labelClassName={_s.languageSelectLabel}
                    />
                  </div> */}
        </div>
      </div>
    </header>
  );
};

export default memo(HeaderDesktop);

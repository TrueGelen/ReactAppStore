import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";
// todo: удалить этот импорт и обертку когда доделаю все сторы
// @ts-ignore
import withStore from "../hocs/withStore";
import { routes, routesMap } from "../routes/routes";
import styles from "./app.module.scss";
import mainStyles from "../../scss/main.module.scss";
import { Localization, TLanguage } from "../utils/Localization/Localization";
import { RU_LOC } from "../utils/constants/constants";
import { LocalizationContext } from "../utils/decorators/withLoc/LocalizationContext";
import { Select } from "../components/LanguageSelect/LanguageSelect";
import type { SelectInputProps } from "@material-ui/core/Select/SelectInput";
import { CART, PHONES, TABLETS, TELEVISIONS } from "../utils/localization";
import { HeaderDesktop } from "../components/HeaderDesktop/HeaderDesktop";

export interface IAppComponentState {
  mobMenu: boolean;
  // todo: temporary decision while have no userStore
  localization: Localization;
}

export interface IAppComponentProps {}

class AppComponent extends PureComponent<IAppComponentProps, IAppComponentState> {
  constructor(props: IAppComponentProps) {
    super(props);

    this.state = {
      mobMenu: false,
      localization: new Localization(RU_LOC),
    };
  }

  public openMobMenu = () => {
    this.setState({ mobMenu: true });
  };

  public hideMobMenu = () => {
    this.setState({ mobMenu: false });
  };

  public changeLocalization: SelectInputProps<TLanguage>["onChange"] = (e) => {
    const { localization } = this.state;
    const newValue = e.target.value as TLanguage;
    if (newValue !== localization.getLanguage()) {
      this.setState({ localization: new Localization(newValue) });
    }
  };

  override render() {
    const { localization } = this.state;
    //to del later
    // @ts-ignore
    // this.cartStore = this.props.rootStore.cart;

    const routsPages = routes.map((route) => {
      return (
        <Route path={route.url} component={route.container} exact={route.exact} key={route.url} />
      );
    });

    return (
      <LocalizationContext.Provider value={localization}>
        <Router>
          <HeaderDesktop handleLocalizationChange={this.changeLocalization} />
          {/* content */}
          <main className={styles.content}>
            <div className={`${mainStyles.container} ${styles.container_mod}`}>
              <Switch>{routsPages}</Switch>
            </div>
          </main>

          {/* 
<div className={_s.burger} onClick={this.openMobMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div> */}
          {/* mobMenu */}
          {this.state.mobMenu && (
            <menu className={styles.mobMenu}>
              <div className={styles.closeMobMenu} onClick={this.hideMobMenu}>
                <div></div>
                <div></div>
              </div>
              <ul>
                <NavLink
                  className={styles.menu__a}
                  to={routesMap.cart}
                  activeClassName={styles.activeLink}
                >
                  <li className={styles.menu__li} onClick={this.hideMobMenu}>
                    {localization.getLocalized(CART)}
                  </li>
                </NavLink>
                <NavLink
                  className={styles.menu__a}
                  to={routesMap.televisions}
                  activeClassName={styles.activeLink}
                >
                  <li className={styles.menu__li} onClick={this.hideMobMenu}>
                    {localization.getLocalized(TELEVISIONS)}
                  </li>
                </NavLink>
                <NavLink
                  className={styles.menu__a}
                  to={routesMap.phones}
                  activeClassName={styles.activeLink}
                >
                  <li className={styles.menu__li} onClick={this.hideMobMenu}>
                    {localization.getLocalized(PHONES)}
                  </li>
                </NavLink>
                <NavLink
                  className={styles.menu__a}
                  to={routesMap.tablets}
                  activeClassName={styles.activeLink}
                >
                  <li className={styles.menu__li} onClick={this.hideMobMenu}>
                    {localization.getLocalized(TABLETS)}
                  </li>
                </NavLink>
              </ul>
            </menu>
          )}
        </Router>
      </LocalizationContext.Provider>
    );
  }
}

export const App = withStore(AppComponent);

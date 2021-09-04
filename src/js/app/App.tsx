import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";
// @ts-ignore
import withStore from "../hocs/withStore";
import { routes, routesMap } from "../routes/routes";
import moduleStyles from "./app.module.scss";
import mainStyles from "../../scss/main.module.scss";

export interface IAppComponentState {
  mobMenu: boolean;
}

export interface IAppComponentProps {}

class AppComponent extends PureComponent<IAppComponentProps, IAppComponentState> {
  constructor(props: IAppComponentProps) {
    super(props);

    this.state = {
      mobMenu: false,
    };
  }

  openMobMenu = () => {
    this.setState({ mobMenu: true });
  };

  hideMobMenu = () => {
    this.setState({ mobMenu: false });
  };

  override render() {
    // const a: number = 1;
    // const b: number = 2;

    // if (a === b) return "some";
    // else return "some 2 and 'sd' as";
    // console.log({ a, b });

    //to del later
    // @ts-ignore
    this.cartStore = this.props.rootStore.cart;

    const routsContainers = routes.map((route) => {
      return <Route path={route.url} component={route.container} exact={route.exact} key={route.url} />;
    });

    return (
      <Router>
        <>
          <header className={moduleStyles.header}>
            <div className={`${mainStyles.container} ${moduleStyles.container_mod}`}>
              <div className={`${moduleStyles.headerWrapper} ${mainStyles.noselect}`}>
                <div className={moduleStyles.logo}>
                  <Link to={routesMap.home}>
                    <span className={moduleStyles.logoParody}>Gparody</span>Shop
                  </Link>
                </div>
                <menu className={moduleStyles.menu}>
                  <ul className={moduleStyles.menu__ul}>
                    <NavLink
                      className={moduleStyles.menu__a}
                      to={routesMap.televisions}
                      activeClassName={moduleStyles.activeLink}
                    >
                      <li className={moduleStyles.menu__li}>Телевизоры</li>
                    </NavLink>
                    <NavLink
                      className={moduleStyles.menu__a}
                      to={routesMap.phones}
                      activeClassName={moduleStyles.activeLink}
                    >
                      <li className={moduleStyles.menu__li}>Телефоны</li>
                    </NavLink>
                    <NavLink
                      className={moduleStyles.menu__a}
                      to={routesMap.tablets}
                      activeClassName={moduleStyles.activeLink}
                    >
                      <li className={moduleStyles.menu__li}>Планшеты</li>
                    </NavLink>
                  </ul>
                </menu>
                <div className={moduleStyles.cart}>
                  <NavLink to={routesMap.cart} activeClassName={moduleStyles.activeLink}>
                    Корзина
                  </NavLink>
                  {/* <div className={moduleStyles.totalInCart}>{this.cartStore.totalPositionsInCart}</div> */}
                  <div className={moduleStyles.totalInCart}>
                    <p>
                      {
                        // @ts-ignore
                        this.cartStore.totalProductsInCart
                      }
                    </p>
                  </div>
                </div>
                <div className={moduleStyles.burger} onClick={this.openMobMenu}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </header>

          {/* content */}
          <main className={moduleStyles.content}>
            <div className={`${mainStyles.container} ${moduleStyles.container_mod}`}>
              <Switch>{routsContainers}</Switch>
            </div>
          </main>

          {/* mobMenu */}
          {this.state.mobMenu && (
            <menu className={moduleStyles.mobMenu}>
              <div className={moduleStyles.closeMobMenu} onClick={this.hideMobMenu}>
                <div></div>
                <div></div>
              </div>
              <ul>
                <NavLink className={moduleStyles.menu__a} to={routesMap.cart} activeClassName={moduleStyles.activeLink}>
                  <li className={moduleStyles.menu__li} onClick={this.hideMobMenu}>
                    Корзина
                  </li>
                </NavLink>
                <NavLink
                  className={moduleStyles.menu__a}
                  to={routesMap.televisions}
                  activeClassName={moduleStyles.activeLink}
                >
                  <li className={moduleStyles.menu__li} onClick={this.hideMobMenu}>
                    Телевизоры
                  </li>
                </NavLink>
                <NavLink
                  className={moduleStyles.menu__a}
                  to={routesMap.phones}
                  activeClassName={moduleStyles.activeLink}
                >
                  <li className={moduleStyles.menu__li} onClick={this.hideMobMenu}>
                    Телефоны
                  </li>
                </NavLink>
                <NavLink
                  className={moduleStyles.menu__a}
                  to={routesMap.tablets}
                  activeClassName={moduleStyles.activeLink}
                >
                  <li className={moduleStyles.menu__li} onClick={this.hideMobMenu}>
                    Планшеты
                  </li>
                </NavLink>
              </ul>
            </menu>
          )}
        </>
      </Router>
    );
  }
}

export const App = withStore(AppComponent);

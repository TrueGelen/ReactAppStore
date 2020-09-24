import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import withStore from '../hocs/withStore'
import { routes, routesMap } from '../routes'
import moduleStyles from './app.module.scss'
import mainStyles from '../../scss/main.module.scss'

class App extends React.Component {

  render() {

    //to del later
    this.cartStore = this.props.rootStore.cart

    let routsContainers = routes.map((route) => {
      return <Route path={route.url}
        component={route.container}
        exact={route.exact}
        key={route.url}
      />
    })

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
                  <ul>
                    <NavLink
                      to={routesMap.televisions}
                      activeClassName={moduleStyles.activeLink}><li>Телевизоры</li></NavLink>
                    <NavLink
                      to={routesMap.phones}
                      activeClassName={moduleStyles.activeLink}><li>Телефоны</li></NavLink>
                    <NavLink
                      to={routesMap.tablets}
                      activeClassName={moduleStyles.activeLink}><li>Планшеты</li></NavLink>
                  </ul>
                </menu>
                <div className={moduleStyles.cart}>
                  <NavLink
                    to={routesMap.cart}
                    activeClassName={moduleStyles.activeLink}>
                    Cart
                  </NavLink>
                  {/* <div className={moduleStyles.totalInCart}>{this.cartStore.totalPositionsInCart}</div> */}
                  <div className={moduleStyles.totalInCart}><p>{this.cartStore.totalProductsInCart}</p></div>
                </div>
              </div>
            </div>
          </header>



          <main className={moduleStyles.content}>
            <div className={`${mainStyles.container} ${moduleStyles.container_mod}`}>
              <Switch>
                {routsContainers}
              </Switch>
            </div>
          </main>
        </>
      </Router >
    )
  }
}

export default withStore(App)

import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import withStore from '../hocs/withStore'
import { routes, routesMap } from '../routes'
import moduleStyles from './app.module.scss'
import mainStyles from '../../scss/main.module.scss'

//temporary imports
import LazyInp from '../components/inputs/lazyInput/lazyInput'
import ItemsCounter from '../components/inputs/itemsCounter'

class App extends React.Component {

  render() {

    //to del later
    this.phonesStore = this.props.rootStore.phones
    this.televisionsStore = this.props.rootStore.televisions
    this.tabletsStore = this.props.rootStore.tablets
    this.cartStore = this.props.rootStore.cart

    // console.log(this.cartStore.totalPositionsInCart)


    //console.log(routesMap)
    let routsContainers = routes.map((route) => {
      //console.log(route)
      return <Route path={route.url}
        component={route.container}
        exact={route.exact}
        key={route.url}
      />
    })
		/* console.log(routsContainers)
		console.log("STYLES========")
		console.log(styles)*/

    return (
      <Router>
        <>
          <header className={moduleStyles.header}>
            <div className={`${mainStyles.container} ${moduleStyles.container_mod}`}>
              <div className={`${moduleStyles.headerWrapper} ${mainStyles.noselect} ${mainStyles.borderRadiusBlock}`}>
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
                  <Link to={routesMap.cart}>Cart</Link>
                  <div className={moduleStyles.totalInCart}>{this.cartStore.totalPositionsInCart}</div>
                </div>
              </div>
            </div>
          </header>



          <main className={moduleStyles.content}>
            <div className={mainStyles.container}>
              {routsContainers}
            </div>

            {/* test ItemsCounter */}
            {/* <div className={moduleStyles.divForTest}>
							<ItemsCounter
								currentCount={1}
								max={10}
							/>
						</div> */}
          </main>
        </>
      </Router >
    )
  }
}

export default withStore(App)

import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import withStore from '../hocs/withStore'
import { routes, routesMap } from '../routes'
import styles from './app.module.scss'
import mainStyles from '../../scss/main.module.scss'

class App extends React.Component {

	render() {
		this.phonesStore = this.props.rootStore.phones
		this.televisionsStore = this.props.rootStore.televisions
		this.tabletsStore = this.props.rootStore.tablets
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
		console.log(styles) */

		return (
			<Router>
				<>
					<header>
						<div className={mainStyles.container}>
							<div className={`${styles.headerWrapper} ${mainStyles.noselect}`}>
								<h1 className={styles.logo}>
									<Link to={routesMap.home}>
										<span className={styles.logoParody}>Gparody</span>Shop
								</Link>
								</h1>
								<menu>
									<ul>
										{/* <li><Link to={routesMap.home}>Главная</Link></li> */}
										<li><Link to={routesMap.televisions} onClick={this.televisionsStore.getTelevisions}>Телевизоры</Link></li>
										<li><Link to={routesMap.phones} onClick={this.phonesStore.getPhones}>Телефоны</Link></li>
										<li><Link to={routesMap.tablets} onClick={this.tabletsStore.getTablets}>Планшеты</Link></li>
									</ul>
								</menu>
								<div className={styles.cart}>
									cart
								</div>
							</div>
						</div>
					</header>
					<main>
						<div className={mainStyles.container}>
							{routsContainers}
						</div>
					</main>
				</>
			</Router >
		)
	}
}

export default withStore(App)

{/* <menu>
					<ul>
						<li> <Link to={routesMap.tv}>Телевизоры</Link></li>
						<li><Link to={routesMap.phones}>Телефоны</Link></li>
						<li><Link to={routesMap.tablets}>Планшеты</Link></li>
					</ul>
				</menu>
				<div>
					<Switch>
						{routsContainers}
					</Switch>
				</div> */}
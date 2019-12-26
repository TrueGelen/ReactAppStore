import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import withStore from '../hocs/withStore'
import { routes, routesMap } from '../routes'
import styles from './app.module.scss'
import mainStyles from '../../scss/main.module.scss'

//temporary imports
import LazyInp from '../components/inputs/lazyInput/lazyInput'
import ItemsCounter from '../components/inputs/itemsCounter'

class App extends React.Component {

	render() {

		//?
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
		console.log(styles)*/

		return (
			<Router>
				<>
					<header className={styles.header}>
						<div className={`${mainStyles.container} ${styles.container_mod}`}>
							<div className={`${styles.headerWrapper} ${mainStyles.noselect} ${mainStyles.borderRadiusBlock}`}>
								<div className={styles.logo}>
									<Link to={routesMap.home}>
										<span className={styles.logoParody}>Gparody</span>Shop
								</Link>
								</div>
								<menu>
									<ul>
										<li><Link to={routesMap.televisions} onClick={this.televisionsStore.getTelevisions}>Телевизоры</Link></li>
										<li><Link to={routesMap.phones} onClick={() => { }}>Телефоны</Link></li>
										<li><Link to={routesMap.tablets} onClick={this.tabletsStore.getTablets}>Планшеты</Link></li>
									</ul>
								</menu>
								<div className={styles.cart}>
									<Link to={routesMap.cart} onClick={() => { }}>Cart</Link>
								</div>
							</div>
						</div>
					</header>



					<main className={styles.content}>
						<div className={mainStyles.container}>
							{routsContainers}
						</div>

						{/* test ItemsCounter */}
						{/* <div className={styles.divForTest}>
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

import React from 'react'
import withStore from '../../hocs/withStore'

function phones(props) {
	/* console.log(props)
	console.log(props.rootStore.phones) */
	return (
		<>
			<div>	Phones</div>
		</>
	)
}

export default withStore(phones)
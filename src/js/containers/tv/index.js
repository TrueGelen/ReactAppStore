import React from 'react'
import withStore from '../../hocs/withStore'

function tv() {
	console.log("tc")
	return (
		<div>	tv</div>
	)
}

export default withStore(tv)
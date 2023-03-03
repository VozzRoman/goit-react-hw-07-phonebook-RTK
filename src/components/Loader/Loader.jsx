import React from 'react'
import { ProgressBar } from 'react-loader-spinner'

const Loader = () => {
  return (
	<div style={{display: 'flex', justifyContent: 'center'}}>
		<ProgressBar
  height="60"
  width="60"
  ariaLabel="progress-bar-loading"
  wrapperStyle={{}}
  wrapperClass="progress-bar-wrapper"
  borderColor = 'blue'
  barColor = 'red'
/>
</div>
	 
  )
}

export default Loader;
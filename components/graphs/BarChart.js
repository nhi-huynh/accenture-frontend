import React from 'react'
import { Chart } from 'react-charts'


function BarChart () {
    const data = React.useMemo(
	    () => [
	      {
	        label: 'Series 1',
	        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7], [5, 1], [6, 2], [7, 4], [8, 2], [9, 7]]
	      },
	      {
	        label: 'Series 2',
	        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4], [5, 3], [6, 1], [7, 5], [8, 6], [9, 4]]
	      }
	    ],
	    []
  	)
	const series = React.useMemo(
	    () => ({
	      type: 'bar'
	    }),
	    []
	)
  	const axes = React.useMemo(
    	() => [
    		{ primary: true, type: 'ordinal', position: 'bottom' },
      		{ position: 'left', type: 'linear', stacked: false }
    	],
    	[]
  	)
  	return (
  <div
      style={{
        flex: 1,
        maxHeight: '400px',
        margin: 10
      }}
    >
	        <Chart data={data} series={series} axes={axes} dark tooltip />
	    </div>
  	)
}

export default BarChart
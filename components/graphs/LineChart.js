import React from 'react'
import { Chart } from 'react-charts'


function LineChart () {
    const data = React.useMemo(
    () => [
      {
        label: 'Actual Funding Rate',
        data: [[1, 50], [2, 40], [3, 60], [4, 62], [5, 80]]
      },
      {
        label: 'Predicted Funding Rate',
        data: [[1, 40], [2, 50], [3, 70], [4, 80], [5, 110]]
      }
    ],
    []
  )
  const series = React.useMemo(
    () => ({
      showPoints: false
    }),
    []
  )
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'bottom' },
      { type: 'linear', position: 'left' }
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
        <Chart data={data} series={series} axes={axes} tooltip dark responsive={false}/>
    </div>
  )
}

export default LineChart
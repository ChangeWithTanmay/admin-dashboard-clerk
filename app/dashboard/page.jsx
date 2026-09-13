import React from 'react'
import Card from '../ui/dashboard/card/card'
import Rightbar from '../ui/dashboard/rightbar/rightbar'
import Transactions from '../ui/dashboard/transactions/transactions'
import Chart from '../ui/dashboard/chart/chart'

const page = () => {
  return (
    <div className="flex gap-5 mt-5">
      <div className="flex flex-3 flex-col gap-5 ">

        {/* Card */}
        <div className="flex gap-5 justify-between">
          <Card />
          <Card />
          <Card />
        </div>

        <Transactions/>
        <Chart/>

      </div>
      <div className="c">
        <Rightbar/>
      </div>
    </div>
  )
}

export default page

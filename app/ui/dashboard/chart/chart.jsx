"use client"
import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Sun", visit: 4000, click: 2400 },
  { name: "Mon", visit: 3000, click: 1390 },
  { name: "Tue", visit: 2000, click: 4800 },
  { name: "Wed", visit: 2780, click: 3900 },
  { name: "Thu", visit: 1890, click: 4800 },
  { name: "Fri", visit: 2390, click: 3800 },
  { name: "Sat", visit: 4090, click: 4800 },
];


const Chart = () => {
  return (
    <div className="h-112.5 bg-bgSoft p-5 rounded-[10px]">
      <h2 className='font-extralight text-textSoft mb-5 text-xl'>Weekly Recap</h2>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          data={data}
          width={500}
          height={300}
          margin={{
            top: 15,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >

          <XAxis dataKey="name" />
          <YAxis width="auto" />

          <Tooltip contentStyle={{background:"#151c2c", border:"none", borderRadius: "8px" }}/>
          <Legend />

          <Line
            type="monotone"
            dataKey="visit"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />

          <Line
            type="monotone"
            dataKey="click"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
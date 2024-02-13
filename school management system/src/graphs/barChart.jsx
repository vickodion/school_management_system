import React from 'react';
import YellowDot from '../img/dotY.svg';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function barChart() {
  const data = [
    {
      name: 'Mon',
      uv: 400,
      pv: 200,
      amt: 400,
    },
    {
      name: 'Tue',
      uv: 300,
      pv: 198,
      amt: 210,
    },
    {
      name: 'Wed',
      uv: 200,
      pv: 900,
      amt: 290,
    },
    {
      name: 'Thu',
      uv: 780,
      pv: 308,
      amt: 200,
    },
    {
      name: 'Fri',
      uv: 180,
      pv: 480,
      amt: 281,
    },
    {
      name: 'Sat',
      uv: 230,
      pv: 300,
      amt: 250,
    },
    {
      name: 'Sun',
      uv: 349,
      pv: 430,
      amt: 200,
    },
  ];
  return (
    <div className="w-[100%] p-5 pl-0 ">
      <ResponsiveContainer width="100%" height={250}>
        <div className="pl-5 flex justify-between w-[100%] ">
          <h5 className="text-[#303972] font-bold text-[14px]">
            School Finance
          </h5>
          <div className="flex  ">
            <div className=" text-[#A098AE] flex flex-row">
              <img src={YellowDot} className="pr-2 w-[25px]" />
              <div className="flex flex-col">
                <p className="text-[10px]"> Last Week</p>
                <p className="text-[10px]">1.266</p>
              </div>
            </div>
            <div className=" text-[#A098AE] flex flex-row">
              <img src={YellowDot} className="pr-2 w-[25px]" />
              <div className="flex flex-col">
                <p className="text-[10px]"> Last Week</p>
                <p className="text-[10px]">1.266</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <BarChart data={data} width={800}>
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name" />
          <YAxis fontSize={12} label={{ dy: 20 }} tick={{ dx: -20 }} />
          <Tooltip />
          <Bar dataKey="uv" fill="#FB7D5B" />
          <Bar dataKey="pv" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default barChart;

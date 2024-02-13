import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import YellowDot from '../img/dotY.svg';

const data = [
  { name: 'Jan', uv: 0, pv: 240, amt: 240 },
  { name: 'Feb', uv: 300, pv: 138, amt: 220 },
  { name: 'Mar', uv: 200, pv: 980, amt: 290 },
  { name: 'Apr', uv: 270, pv: 390, amt: 200 },
  { name: 'May', uv: 180, pv: 800, amt: 281 },
  { name: 'Jun', uv: 230, pv: 300, amt: 200 },
  { name: 'Jul', uv: 390, pv: 400, amt: 100 },
  { name: 'Aug', uv: 340, pv: 430, amt: 300 },
  { name: 'Sep', uv: 390, pv: 300, amt: 210 },
  { name: 'Oct', uv: 340, pv: 430, amt: 100 },
  { name: 'Nov', uv: 190, pv: 430, amt: 100 },
  { name: 'Dec', uv: 490, pv: 400, amt: 210 },
];

function schoolPerformance() {
  return (
    <div className="h-[400px] w-[100%] bg-white p-[20px] rounded-[10px]">
      <div className="pl-5 flex justify-between">
        <h3 className="text-[#303972] font-bold text-[24px]">
          School Performance
        </h3>
        <ul className="pr-[20px] flex ">
          <li className="pr-5 text-[#A098AE] text-[16px] flex">
            <img src={YellowDot} className="pr-3 w-[25px]" />
            <p>
              This Week
              <span className="text-[#303972] font-bold text-[18px] ">
                {' '}
                1.356
              </span>
            </p>
          </li>
          <li className="pr-5 text-[#A098AE] text-[16px] flex">
            <img src={YellowDot} className="pr-3 w-[25px]" />
            <p>
              This Week
              <span className="text-[#303972] font-bold text-[18px] ">
                {' '}
                1.356
              </span>
            </p>
          </li>
        </ul>
      </div>
      <br />
      <ResponsiveContainer width="97%" height={290}>
        <AreaChart data={data}>
          <CartesianGrid horizontal={false} />
          <XAxis dataKey="name" interval={0} fontSize={12} tick={{ dy: 15 }} />
          <YAxis fontSize={12} label={{ dy: 20 }} tick={{ dx: -15 }} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stackId="2"
            stroke="#8884d8"
            fill="#FB7D5B"
          />
          {/* <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" /> */}
          <Area
            type="monotone"
            dataKey="amt"
            stackId="2"
            stroke="#ffc658"
            fill="#ffc658"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default schoolPerformance;

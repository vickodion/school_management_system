import React from 'react';
import Sidenav from '../components/sidenav';
import SchoolPerformance from '../graphs/schoolPerformance';
import BarChart from '../graphs/barChart';
import Bell from '../img/bell.svg';
import Setting from '../img/setting.svg';
import Email from '../img/email.svg';

function dashboard() {
  return (
    <div className="flex justify-between   w-[100%]">
      {/* <div className='h-full '> */}
      <Sidenav />
      {/* </div> */}
      <div className="flex justify-between  w-[100%]">
        <div className=" w-[70%] m-[30px] ">
          <SchoolPerformance />
          <div className=" flex w-[100%] mt-4">
            <div className="bg-white rounded-[10px]  w-[50%] h-[352px] m-[10px] ml-0 ">
              <h1>hello</h1>
            </div>
            <div className="bg-white rounded-[10px]  w-[50%] h-[352px] m-[10px] mr-0">
              <BarChart />
            </div>
          </div>
          <div className="bg-white rounded-[10px] h-[370px]  mt-4"></div>
        </div>
        <div className="bg-white  w-[30%] mt-[30px] rounded-[10px] p-5">
          <div className="flex justify-items-center justify-between">
            <img src={Bell} />
            <img src={Setting} className="w-[20]" />
            <div className="flex">
              <div>
                <p className="text-[#303972] text-[14px]">
                  <b>Vick Odion</b>
                </p>
                <p className="text-[#A098AE] text-[13px]">Admin</p>
              </div>
              <div class="w-12 h-12 rounded-full bg-[#C1BBEB] ml-3"></div>
            </div>
          </div>

          <div className="flex justify-between mt-10">
            <div>
              <h3 className="text-[#303972] font-extrabold text-[21px]">
                <b>Recent Students</b>
              </h3>
              <p className="text-[#A098AE] text-[12px] ">
                You have 456 students
              </p>
            </div>
            <img src={Email} />
          </div>
          <div className="flex justify-between mt-10">
            <div className="flex">
              <div class="w-12 h-12 rounded-full bg-[#C1BBEB] mr-2"></div>
              <div>
                <p className="text-[#303972] font-bold text-[14px]">
                  Samantha William
                </p>
                <p className="text-[#A098AE] text-[12px] ">Class VII A</p>
              </div>
            </div>
            <img src={Email} />
          </div>
          <div className="flex justify-between mt-10">
            <div className="flex">
              <div class="w-12 h-12 rounded-full bg-[#C1BBEB] mr-2"></div>
              <div>
                <p className="text-[#303972] font-bold text-[14px]">
                  Samantha William
                </p>
                <p className="text-[#A098AE] text-[12px] ">Class VII A</p>
              </div>
            </div>
            <img src={Email} />
          </div>
          <div className="flex justify-between mt-10">
            <div className="flex">
              <div class="w-12 h-12 rounded-full bg-[#C1BBEB] mr-2"></div>
              <div>
                <p className="text-[#303972] font-bold text-[14px]">
                  Samantha William
                </p>
                <p className="text-[#A098AE] text-[12px] ">Class VII A</p>
              </div>
            </div>
            <img src={Email} />
          </div>
          <div className="flex justify-between mt-10">
            <div className="flex">
              <div class="w-12 h-12 rounded-full bg-[#C1BBEB] mr-2"></div>
              <div>
                <p className="text-[#303972] font-bold text-[14px]">
                  Samantha William
                </p>
                <p className="text-[#A098AE] text-[12px] ">Class VII A</p>
              </div>
            </div>
            <img src={Email} />
          </div>
          <div className="flex justify-between mt-10">
            <div className="flex">
              <div class="w-12 h-12 rounded-full bg-[#C1BBEB] mr-2"></div>
              <div>
                <p className="text-[#303972] font-bold text-[14px]">
                  Samantha William
                </p>
                <p className="text-[#A098AE] text-[12px] ">Class VII A</p>
              </div>
            </div>
            <img src={Email} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default dashboard;

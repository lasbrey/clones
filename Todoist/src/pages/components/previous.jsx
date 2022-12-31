import React from "react";
import {
  Tune,
  CircleOutlined,
  EventOutlined,
  BorderColorOutlined,
  SmsOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";

function Previous() {
  const current = new Date();
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-white text-2xl">
          Today{" "}
          <span className="text-[12px] text-gray-500">
            {current.toDateString()}
          </span>
        </h1>
        <div className="ml-auto text-gray-500 hover:text-red-500 cursor-pointer">
          {" "}
          <Tune />
        </div>
      </div>
      <div className=" mt-5 ">
        <div className="flex border-b border-gray-500 mb-2 pb-2">
          <h1 className="text-white text-md">Overdue</h1>
          <div className="ml-auto text-red-500">Reschedule</div>
        </div>

        <div className="flex cursor-pointer">
          <div className="flex items-center h-5">
            <CircleOutlined className="text-gray-400" sx={{ fontSize: 18 }} />
          </div>
          <div className="ml-2 text-sm w-full">
            <div className="flex justify-between w-full">
              <div className="font-medium text-gray-900 dark:text-gray-300">
                Step out your comfort zone and make friends
              </div>
              <div className="flex gap-3">
                <BorderColorOutlined
                  className="cursor-pointer text-gray-400 hover:bg-[#353535] p-1"
                  sx={{ fontSize: 20 }}
                />
                <SmsOutlined
                  className="cursor-pointer text-gray-400 hover:bg-[#353535] p-1"
                  sx={{ fontSize: 20 }}
                />
                <MoreHorizOutlined
                  className="cursor-pointer text-gray-400 hover:bg-[#353535] p-1"
                  sx={{ fontSize: 20 }}
                />
              </div>
            </div>
            <div className="flex justify-between w-full  py-2">
              <p
                id="helper-radio-text"
                className="text-xs font-normal text-red-500"
              >
                <EventOutlined sx={{ fontSize: 12 }} /> Dec 19 2022
              </p>
              <p className="text-gray-400 text-[12px]">
                <span className="pr-1">Friends/Socialize</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Previous;
